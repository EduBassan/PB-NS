import React, { useEffect, useMemo, useState } from "react";

/**
 * PedidosPanel.jsx
 * - Combina localStorage['pedidos'] (jogadoras) + localStorage['pedidosTimes'] (times)
 * - Mostra tudo junto + filtros: Tipo (All/Jogadora/Time), posição, cidade, busca
 * - Ações: Aceitar / Recusar (single) e Aceitar/Recusar em massa (selected)
 * - Responsivo: tabela (lg) / cards (sm)
 *
 * Requisitos: TailwindCSS
 */

export default function PedidosPanel() {
  const [pedidos, setPedidos] = useState([]); // jogadoras pedidos
  const [pedidosTimes, setPedidosTimes] = useState([]); // times pedidos
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all"); // all | jogadora | time
  const [posFilter, setPosFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [selected, setSelected] = useState([]); // array of keys like "jogadora-11" or "time-51"
  const [flash, setFlash] = useState(null);

  // load once
  useEffect(() => {
    try { setPedidos(JSON.parse(localStorage.getItem("pedidos")) || []); } catch { setPedidos([]); }
    try { setPedidosTimes(JSON.parse(localStorage.getItem("pedidosTimes")) || []); } catch { setPedidosTimes([]); }
  }, []);

  // save helpers
  const savePedidos = JSON.parse(localStorage.getItem("pedidos"))
  const savePedidosTimes = JSON.parse(localStorage.getItem("pedidosTimes"))

  // flash
  function flashMsg(txt) { setFlash(txt); setTimeout(() => setFlash(null), 2500); }

  // merge lists into unified list with kind and key
  const unified = useMemo(() => {
    const pj = pedidos.map(p => ({ ...p, kind: "jogadora", key: `jogadora-${p.id}` }));
    const pt = pedidosTimes.map(t => ({ ...t, kind: "time", key: `time-${t.id}` }));
    // sort by id desc (assumes id increments) so newest first
    return [...pj, ...pt].sort((a, b) => (b.id || 0) - (a.id || 0));
  }, [pedidos, pedidosTimes]);

  // derived filter options
  const posOptions = useMemo(() => {
    const s = new Set(pedidos.map(p => p.posicao).filter(Boolean));
    return ["", ...Array.from(s).sort()];
  }, [pedidos]);
  const cityOptions = useMemo(() => {
    const s = new Set(pedidosTimes.map(t => t.cidade).filter(Boolean));
    return ["", ...Array.from(s).sort()];
  }, [pedidosTimes]);

  // filter + search
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return unified.filter(item => {
      if (typeFilter !== "all" && item.kind !== typeFilter) return false;
      if (item.kind === "jogadora" && posFilter && (item.posicao || "") !== posFilter) return false;
      if (item.kind === "time" && cityFilter && (item.cidade || "") !== cityFilter) return false;
      if (!q) return true;
      // search over different fields depending on kind
      if (item.kind === "jogadora") {
        const hay = `${item.nome} ${item.sobrenome} ${item.email || ""} ${item.telefone || ""} ${item.posicao || ""}`.toLowerCase();
        return hay.includes(q);
      } else {
        const hay = `${item.nome} ${item.responsavel || ""} ${item.email || ""} ${item.telefone || ""} ${item.cidade || ""}`.toLowerCase();
        return hay.includes(q);
      }
    });
  }, [unified, query, typeFilter, posFilter, cityFilter]);

  // helpers
  const initials = (a = "", b = "") => (a[0] || "") + (b[0] || "");
  const ageFrom = (dob) => {
    if (!dob) return "-";
    const diff = Date.now() - new Date(dob).getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  };

  // accept/reject single
  function acceptOne(key) {
    const [kind, idStr] = key.split("-");
    const id = Number(idStr);
    if (kind === "jogadora") {
      savePedidos(pedidos.filter(p => p.id !== id));
      flashMsg("Jogadora aceita (removida dos pedidos)");
    } else {
      savePedidosTimes(pedidosTimes.filter(t => t.id !== id));
      flashMsg("Time aceito (removido dos pedidos)");
    }
    setSelected(s => s.filter(x => x !== key));
  }

  function rejectOne(key) {
    const [kind, idStr] = key.split("-");
    const id = Number(idStr);
    if (kind === "jogadora") {
      savePedidos(pedidos.filter(p => p.id !== id));
      flashMsg("Jogadora recusada (removida dos pedidos)");
    } else {
      savePedidosTimes(pedidosTimes.filter(t => t.id !== id));
      flashMsg("Time recusado (removido dos pedidos)");
    }
    setSelected(s => s.filter(x => x !== key));
  }

  // bulk
  function bulkAction(action) { // action: 'accept' | 'reject'
    if (selected.length === 0) { flashMsg("Nada selecionado"); return; }
    const selJog = selected.filter(k => k.startsWith("jogadora-")).map(k => Number(k.split("-")[1]));
    const selTime = selected.filter(k => k.startsWith("time-")).map(k => Number(k.split("-")[1]));

    if (selJog.length) {
      const next = pedidos.filter(p => !selJog.includes(p.id));
      savePedidos(next);
    }
    if (selTime.length) {
      const next = pedidosTimes.filter(t => !selTime.includes(t.id));
      savePedidosTimes(next);
    }
    flashMsg(`${action === "accept" ? "Aceitos" : "Recusados"}: ${selected.length}`);
    setSelected([]);
  }

  // toggle select for unified key
  function toggleSelect(key) {
    setSelected(s => (s.includes(key) ? s.filter(x => x !== key) : [...s, key]));
  }

  // select all visible
  function toggleSelectAllVisible() {
    const visibleKeys = filtered.map(it => it.key);
    const allSelected = visibleKeys.every(k => selected.includes(k));
    if (allSelected) setSelected(s => s.filter(k => !visibleKeys.includes(k)));
    else setSelected(s => Array.from(new Set([...s, ...visibleKeys])));
  }

  // UI components: row and card
  function Row({ it }) {
    return (
      <tr className="bg-white">
        <td className="p-3">
          <input type="checkbox" checked={selected.includes(it.key)} onChange={() => toggleSelect(it.key)} />
        </td>

        <td className="p-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold">
              {it.kind === "jogadora" ? initials(it.nome, it.sobrenome) : initials(it.nome)}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">
                {it.kind === "jogadora" ? `${it.nome} ${it.sobrenome}` : it.nome}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {it.kind === "jogadora" ? (it.posicao || "-") : (it.cidade || "-")}
              </div>
            </div>
          </div>
        </td>

        <td className="p-3 text-sm text-gray-500">{it.email || "-"}</td>
        <td className="p-3 text-sm text-gray-500">{it.telefone || "-"}</td>
        <td className="p-3 text-sm text-gray-500">
          {it.kind === "jogadora" ? `${ageFrom(it.dataDeNascimento)} anos` : (it.responsavel || "-")}
        </td>

        <td className="p-3 text-right">
          <div className="inline-flex gap-2">
            <button onClick={() => acceptOne(it.key)} className="px-3 py-1 rounded-md bg-green-600 text-white text-sm">Aceitar</button>
            <button onClick={() => rejectOne(it.key)} className="px-3 py-1 rounded-md bg-pink-500 text-white text-sm">Recusar</button>
          </div>
        </td>
      </tr>
    );
  }

  function Card({ it }) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 flex gap-3 items-start">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold">
            {it.kind === "jogadora" ? initials(it.nome, it.sobrenome) : initials(it.nome)}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold truncate">
                {it.kind === "jogadora" ? `${it.nome} ${it.sobrenome}` : it.nome}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {it.kind === "jogadora" ? `${it.posicao || "-"} • ${ageFrom(it.dataDeNascimento)} anos` : `${it.cidade || "-"} • Resp: ${it.responsavel || "-"}`}
              </div>
            </div>

            <div className="text-xs text-gray-400">{it.key}</div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="text-xs text-gray-500 truncate">{it.email || "-"} • {it.telefone || "-"}</div>
            <div className="flex items-center gap-2">
              <input type="checkbox" checked={selected.includes(it.key)} onChange={() => toggleSelect(it.key)} />
              <button onClick={() => acceptOne(it.key)} className="px-3 py-1 bg-green-600 text-white text-xs">Aceitar</button>
              <button onClick={() => rejectOne(it.key)} className="px-3 py-1 bg-pink-500 text-white text-xs">Recusar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // render
  return (
    <section aria-label="Pedidos painel" className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Pedidos (unificados)</h2>
          <p className="text-sm text-gray-500">Aqui estão todos os pedidos das jogadoras e dos times. Use filtros para refinar.</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <input
            className="px-3 py-1 border rounded-md w-48"
            placeholder="Pesquisar (nome, e-mail, telefone...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select className="px-3 py-1 border rounded-md" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="all">Todos os tipos</option>
            <option value="jogadora">Jogadoras</option>
            <option value="time">Times</option>
          </select>

          <select
            className="px-3 py-1 border rounded-md"
            value={posFilter}
            onChange={(e) => setPosFilter(e.target.value)}
            disabled={typeFilter === "time"}
            title={typeFilter === "time" ? "Filtrar por posição: escolha 'Jogadoras' no tipo" : "Filtrar por posição"}
          >
            <option value="">Todas posições</option>
            {posOptions.map((p, i) => <option key={i} value={p}>{p || "—"}</option>)}
          </select>

          <select
            className="px-3 py-1 border rounded-md"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            disabled={typeFilter === "jogadora"}
            title={typeFilter === "jogadora" ? "Filtrar por cidade: escolha 'Times' no tipo" : "Filtrar por cidade"}
          >
            <option value="">Todas cidades</option>
            {cityOptions.map((c, i) => <option key={i} value={c}>{c || "—"}</option>)}
          </select>
        </div>
      </div>

      {/* bulk actions */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filtered.length > 0 && filtered.every(it => selected.includes(it.key))}
            onChange={toggleSelectAllVisible}
          />
          <div className="text-sm text-gray-600">Selecionar todos visíveis</div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => bulkAction("accept")} className="px-3 py-1 rounded-md bg-green-600 text-white text-sm">Aceitar selecionados</button>
          <button onClick={() => bulkAction("reject")} className="px-3 py-1 rounded-md bg-pink-500 text-white text-sm">Recusar selecionados</button>
          <div className="text-sm text-gray-500">Selecionados: <strong>{selected.length}</strong></div>
        </div>
      </div>

      {/* content */}
      <div>
        {/* desktop table */}
        <div className="hidden lg:block mt-3 bg-transparent">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="p-3"><input type="checkbox" /></th>
                <th className="p-3 text-left">Nome / Time</th>
                <th className="p-3 text-left">E-mail</th>
                <th className="p-3 text-left">Telefone</th>
                <th className="p-3 text-left">Posição / Resp</th>
                <th className="p-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filtered.map(it => <Row key={it.key} it={it} />)}
            </tbody>
          </table>
        </div>

        {/* mobile cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3 mt-3">
          {filtered.map(it => <Card key={it.key} it={it} />)}
        </div>
      </div>

      {/* flash */}
      {flash && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-2 rounded-md shadow-lg z-50">
          {flash}
        </div>
      )}
    </section>
  );
}
