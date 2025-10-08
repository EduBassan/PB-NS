import React, { useEffect, useMemo, useState } from "react";

/*
  JogadorasDashboard.jsx
  - Componente completo, responsivo e estilizado com Tailwind.
  - Funcionalidades: busca, filtros, ordenação, paginação, seleção/bulk actions,
    export CSV, visualizar detalhes, editar/criar/delete, toggle possuiTime.
  - Ajuste as cores no topo conforme seu design.
*/

export default function JogadorasDashboard() {
  // --- CORES (ajuste para casar com seu site) ---
  const COLORS = {
    pink: "#FF3FA4",
    purple: "#4B0082",
    green: "#25D366",
    neutral: "#111827",
  };

  // --- STATE ---
  const [jogadoras, setJogadoras] = useState(() => {
    try {
      const raw = localStorage.getItem("jogadoras");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  const [query, setQuery] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [onlyWithoutTeam, setOnlyWithoutTeam] = useState(false);
  const [onlyMedical, setOnlyMedical] = useState(false);
  const [sortBy, setSortBy] = useState("nome");
  const [page, setPage] = useState(1);
  const perPage = 9;

  // selection/bulk
  const [selectedIds, setSelectedIds] = useState([]);

  // modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [viewing, setViewing] = useState(null);

  // sync to localStorage whenever jogadoras change
  useEffect(() => {
    try {
      localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
    } catch (e) {
      console.error("Erro ao salvar jogadoras:", e);
    }
  }, [jogadoras]);

  // derived positions
  const positions = useMemo(() => {
    const s = new Set(jogadoras.map((j) => j.posicao).filter(Boolean));
    return ["", ...Array.from(s).sort()];
  }, [jogadoras]);

  // filtering/searching/sorting
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    let arr = [...jogadoras];

    if (term) {
      arr = arr.filter((j) => {
        const full = `${j.nome} ${j.sobrenome} ${j.email} ${j.telefone} ${j.posicao}`.toLowerCase();
        return full.includes(term);
      });
    }

    if (positionFilter) arr = arr.filter((j) => j.posicao === positionFilter);
    if (onlyWithoutTeam) arr = arr.filter((j) => !j.possuiTime);
    if (onlyMedical) arr = arr.filter((j) => !!j.condicaoMedica);

    if (sortBy === "nome") arr.sort((a, b) => a.nome.localeCompare(b.nome));
    if (sortBy === "idade")
      arr.sort((a, b) => {
        const da = a.dataDeNascimento ? new Date(a.dataDeNascimento) : new Date();
        const db = b.dataDeNascimento ? new Date(b.dataDeNascimento) : new Date();
        return da - db;
      });

    return arr;
  }, [jogadoras, query, positionFilter, onlyWithoutTeam, onlyMedical, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages]);

  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  function calcAge(dob) {
    if (!dob) return "-";
    const diff = Date.now() - new Date(dob).getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  }

  // --- ACTIONS ---
  function openCreate() {
    setEditing({
      id: Date.now(),
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
      dataDeNascimento: "",
      posicao: "",
      foto: "",
      condicaoMedica: false,
      possuiTime: false,
      tipo: "jogadora",
    });
    setIsEditModalOpen(true);
  }

  function openEdit(item) {
    setEditing({ ...item });
    setIsEditModalOpen(true);
  }

  function openView(item) {
    setViewing(item);
    setIsViewModalOpen(true);
  }

  function saveEdit(item) {
    setJogadoras((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      if (exists) return prev.map((p) => (p.id === item.id ? item : p));
      return [item, ...prev];
    });
    setIsEditModalOpen(false);
    setEditing(null);
  }

  function remove(id) {
    if (!confirm("Confirmar remoção desta jogadora?")) return;
    setJogadoras((prev) => prev.filter((p) => p.id !== id));
    setSelectedIds((s) => s.filter((x) => x !== id));
  }

  function bulkDelete() {
    if (selectedIds.length === 0) return alert("Nenhuma seleção.");
    if (!confirm(`Excluir ${selectedIds.length} jogadora(s)?`)) return;
    setJogadoras((prev) => prev.filter((p) => !selectedIds.includes(p.id)));
    setSelectedIds([]);
  }

  function toggleTeam(id) {
    setJogadoras((prev) => prev.map((p) => (p.id === id ? { ...p, possuiTime: !p.possuiTime } : p)));
  }

  function toggleSelect(id) {
    setSelectedIds((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  }

  function selectAllOnPage() {
    const ids = pageItems.map((i) => i.id);
    const allSelected = ids.every((id) => selectedIds.includes(id));
    if (allSelected) setSelectedIds((s) => s.filter((id) => !ids.includes(id)));
    else setSelectedIds((s) => Array.from(new Set([...s, ...ids])));
  }


  // small helper: avatar fallback initials
  function initials(nome, sobrenome) {
    return `${(nome || "")[0] ?? ""}${(sobrenome || "")[0] ?? ""}`.toUpperCase();
  }

  // --- RENDER ---
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">JOGADORAS</h1>
            <p className="text-sm text-gray-500 mt-1">Consulta administrativa das atletas inscritas na Copa Feminina.</p>
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <button onClick={openCreate} className="px-4 py-2 rounded-lg font-semibold shadow" style={{ background: COLORS.pink, color: 'white' }}>+ Nova</button>

          </div>
        </header>

        {/* filtros */}
        <section className="bg-white rounded-lg p-4 shadow-sm mb-6 border" style={{ borderColor: COLORS.pink }}>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1 flex gap-3">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por nome, e-mail, telefone ou posição" className="flex-1 px-3 py-2 border rounded-lg" />
              <select value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} className="px-3 py-2 border rounded-lg">
                {positions.map((p, i) => (<option key={i} value={p}>{p || 'Todas posições'}</option>))}
              </select>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2 border rounded-lg">
                <option value="nome">Ordenar: Nome</option>
                <option value="idade">Ordenar: Idade</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={onlyWithoutTeam} onChange={(e) => setOnlyWithoutTeam(e.target.checked)} /> Sem time</label>
              <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={onlyMedical} onChange={(e) => setOnlyMedical(e.target.checked)} /> Condição médica</label>
              <div className="text-sm text-gray-600">Resultados: <strong>{filtered.length}</strong></div>
            </div>
          </div>
        </section>

        {/* bulk actions */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={pageItems.every(i => selectedIds.includes(i.id)) && pageItems.length>0} onChange={selectAllOnPage} />
              Selecionar página
            </label>

            <button onClick={bulkDelete} className="px-3 py-1 rounded border text-sm">Excluir selecionadas</button>
          </div>

          <div className="text-sm text-gray-600">Página {page} / {totalPages}</div>
        </div>

        {/* grid de cards */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500">Nenhuma jogadora encontrada</div>
            )}

            {pageItems.map((j) => (
              <article key={j.id} className="bg-white rounded-2xl shadow-lg overflow-hidden relative border-2" style={{ borderColor: COLORS.pink }}>
                {/* header small - position badge */}
                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold shadow" style={{ border: `1px solid ${COLORS.purple}`, color: COLORS.purple }}>{j.posicao || '—'}</div>

                <div className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    {j.foto ? (
                      <img src={j.foto} alt={`${j.nome}`} className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md" />
                    ) : (
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-xl font-bold bg-gray-100 border-4 border-white">{initials(j.nome, j.sobrenome)}</div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg md:text-xl">{j.nome} {j.sobrenome}</h3>
                    <div className="text-sm text-gray-500 mt-1">{calcAge(j.dataDeNascimento)} anos • {j.email || '-'}</div>
                  </div>

                  <div className="w-full flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium`} style={{ background: j.possuiTime ? '#E6F8EF' : '#F3F4F6', color: j.possuiTime ? '#0B6B3B' : '#374151' }}>{j.possuiTime ? 'Tem time' : 'Sem time'}</span>
                      {j.condicaoMedica && <span className="px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">Condição</span>}
                    </div>

                    <div className="text-xs text-gray-400">ID #{j.id}</div>
                  </div>

                  <div className="w-full flex gap-2 mt-3">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={selectedIds.includes(j.id)} onChange={() => toggleSelect(j.id)} />
                    </label>

                    <button onClick={() => openView(j)} className="flex-1 px-3 py-2 rounded-md border">Ver</button>
                    <button onClick={() => openEdit(j)} className="flex-1 px-3 py-2 rounded-md border">Editar</button>
                    <button onClick={() => toggleTeam(j.id)} className="flex-1 px-3 py-2 rounded-md border">{j.possuiTime ? 'Remover' : 'Adicionar'}</button>
                  </div>

                  <div className="w-full flex gap-2 mt-2">
                    <button onClick={() => remove(j.id)} className="flex-1 px-3 py-2 rounded-md text-white font-bold" style={{ background: COLORS.pink }}>Excluir</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* paginação */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">Mostrando {filtered.length} resultado(s)</div>
            <div className="flex items-center gap-2">
              <button disabled={page === 1} onClick={() => setPage(1)} className="px-3 py-1 border rounded disabled:opacity-50">Primeira</button>
              <button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="px-3 py-1 border rounded disabled:opacity-50">Anterior</button>
              <div className="px-3 py-1">{page}</div>
              <button disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))} className="px-3 py-1 border rounded disabled:opacity-50">Próxima</button>
              <button disabled={page === totalPages} onClick={() => setPage(totalPages)} className="px-3 py-1 border rounded disabled:opacity-50">Última</button>
            </div>
          </div>
        </section>

        {/* VIEW Modal */}
        {isViewModalOpen && viewing && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6">
              <div className="flex items-start gap-4">
                <div>
                  {viewing.foto ? <img src={viewing.foto} alt={viewing.nome} className="w-28 h-28 rounded-full object-cover" /> : <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">{initials(viewing.nome, viewing.sobrenome)}</div>}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{viewing.nome} {viewing.sobrenome}</h2>
                  <div className="text-sm text-gray-600 mt-1">{viewing.posicao} • {calcAge(viewing.dataDeNascimento)} anos</div>
                  <div className="mt-3 text-sm text-gray-700">Email: {viewing.email || '-'}</div>
                  <div className="text-sm text-gray-700">Telefone: {viewing.telefone || '-'}</div>
                  <div className="text-sm text-gray-700 mt-2">Possui time: {viewing.possuiTime ? 'Sim' : 'Não'}</div>
                  <div className="text-sm text-gray-700">Condição médica: {viewing.condicaoMedica ? 'Sim' : 'Não'}</div>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button onClick={() => setIsViewModalOpen(false)} className="px-4 py-2 border rounded">Fechar</button>
                <button onClick={() => { setIsViewModalOpen(false); openEdit(viewing); }} className="px-4 py-2 rounded" style={{ background: COLORS.pink, color: 'white' }}>Editar</button>
              </div>
            </div>
          </div>
        )}

        {/* EDIT Modal */}
        {isEditModalOpen && editing && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
              <h2 className="text-xl font-bold mb-3">{jogadoras.some(p => p.id === editing.id) ? 'Editar jogadora' : 'Nova jogadora'}</h2>

              <form onSubmit={(e) => { e.preventDefault(); if (!editing.nome || !editing.sobrenome) return alert('Nome e sobrenome obrigatórios'); saveEdit(editing); }} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input placeholder="Nome" value={editing.nome} onChange={(e) => setEditing({ ...editing, nome: e.target.value })} className="px-3 py-2 border rounded" />
                <input placeholder="Sobrenome" value={editing.sobrenome} onChange={(e) => setEditing({ ...editing, sobrenome: e.target.value })} className="px-3 py-2 border rounded" />
                <input placeholder="Email" value={editing.email} onChange={(e) => setEditing({ ...editing, email: e.target.value })} className="px-3 py-2 border rounded" />
                <input placeholder="Telefone" value={editing.telefone} onChange={(e) => setEditing({ ...editing, telefone: e.target.value })} className="px-3 py-2 border rounded" />
                <input type="date" placeholder="Data de nascimento" value={editing.dataDeNascimento} onChange={(e) => setEditing({ ...editing, dataDeNascimento: e.target.value })} className="px-3 py-2 border rounded" />
                <input placeholder="Posição" value={editing.posicao} onChange={(e) => setEditing({ ...editing, posicao: e.target.value })} className="px-3 py-2 border rounded" />
                <input placeholder="URL foto" value={editing.foto} onChange={(e) => setEditing({ ...editing, foto: e.target.value })} className="px-3 py-2 border rounded col-span-full" />

                <div className="col-span-full flex items-center gap-3">
                  <label className="inline-flex items-center gap-2"><input type="checkbox" checked={editing.condicaoMedica} onChange={(e) => setEditing({ ...editing, condicaoMedica: e.target.checked })} /> Condição médica</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" checked={editing.possuiTime} onChange={(e) => setEditing({ ...editing, possuiTime: e.target.checked })} /> Possui time</label>
                </div>

                <div className="col-span-full flex justify-end gap-2">
                  <button type="button" onClick={() => { setIsEditModalOpen(false); setEditing(null); }} className="px-4 py-2 border rounded">Cancelar</button>
                  <button type="submit" className="px-4 py-2 rounded" style={{ background: COLORS.pink, color: 'white' }}>Salvar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
