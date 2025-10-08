import React, { useEffect, useMemo, useState } from "react";

export default function TimesAdm() {
  const COLORS = {
    pink: "#FF3FA4",
    purple: "#4B0082",
    green: "#25D366",
  };

  // --- STATE ---
  const [times, setTimes] = useState(JSON.parse(localStorage.getItem("times")))

  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [minPlayers, setMinPlayers] = useState(0);
  const [hasCandidatas, setHasCandidatas] = useState(false);
  const [sortBy, setSortBy] = useState("nome");
  const [page, setPage] = useState(1);
  const perPage = 9;

  const [selectedIds, setSelectedIds] = useState([]);

  // modals
  
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [viewing, setViewing] = useState(null);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem("times", JSON.stringify(times));
    } catch (e) {
      console.error("Erro ao salvar times:", e);
    }
  }, [times]);

  // derived cities
  const cities = useMemo(() => {
    const s = new Set(times.map(t => t.cidade).filter(Boolean));
    return ["", ...Array.from(s).sort()];
  }, [times]);

  // filtering
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    let arr = [...times];

    if (term) {
      arr = arr.filter(t => {
        const full = `${t.nome} ${t.responsavel} ${t.email} ${t.telefone} ${t.cidade}`.toLowerCase();
        return full.includes(term);
      });
    }

    if (cityFilter) arr = arr.filter(t => t.cidade === cityFilter);
    if (Number(minPlayers) > 0) arr = arr.filter(t => (t.jogadoras?.length || 0) >= Number(minPlayers));
    if (hasCandidatas) arr = arr.filter(t => (t.candidatas?.length || 0) > 0);

    if (sortBy === "nome") arr.sort((a,b) => a.nome.localeCompare(b.nome));
    if (sortBy === "numero") arr.sort((a,b) => (a.numero||0) - (b.numero||0));

    return arr;
  }, [times, query, cityFilter, minPlayers, hasCandidatas, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [totalPages]);
  const pageItems = filtered.slice((page-1)*perPage, page*perPage);

  // utils
  function initials(nome) {
    if (!nome) return "T";
    return nome.split(" ").map(s => s[0]).slice(0,2).join("").toUpperCase();
  }


  function openView(t) { setViewing(t); setIsViewOpen(true); }


  function remove(id) {
    if (!confirm('Deseja remover este time?')) return;
    setTimes(prev => prev.filter(p => p.id !== id));
    setSelectedIds(s => s.filter(x => x !== id));
  }

  function bulkDelete() {
    if (selectedIds.length === 0) return alert('Nenhuma seleção');
    if (!confirm(`Excluir ${selectedIds.length} time(s)?`)) return;
    setTimes(prev => prev.filter(p => !selectedIds.includes(p.id)));
    setSelectedIds([]);
  }

  function toggleSelect(id) { setSelectedIds(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]); }
  function selectAllOnPage() {
    const ids = pageItems.map(i => i.id);
    const all = ids.every(id => selectedIds.includes(id));
    if (all) setSelectedIds(s => s.filter(id => !ids.includes(id)));
    else setSelectedIds(s => Array.from(new Set([...s, ...ids])));
  }


  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
  <div className="min-w-0">
    <h1 className="text-2xl md:text-3xl font-extrabold truncate">TIMES</h1>
    <p className="text-sm text-gray-500 mt-1 truncate">Controle total sobre os participantes: mantenha os dados atualizados e prontos para o jogo.</p>
  </div>

  <div className="flex gap-2 w-full md:w-auto flex-wrap items-center">
  </div>
</header>

        {/* filtros */}
        <section className="bg-white rounded-lg p-4 shadow-sm mb-6 border" style={{ borderColor: COLORS.pink }}>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1 flex gap-3">
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar por nome, responsável, e-mail, telefone ou cidade" className="flex-1 px-3 py-2 border rounded-lg" />
              <select value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="px-3 py-2 border rounded-lg">
                {cities.map((c,i) => (<option key={i} value={c}>{c||'Todas cidades'}</option>))}
              </select>
              <input type="number" min={0} value={minPlayers} onChange={e => setMinPlayers(e.target.value)} placeholder="Mín. jogadoras" className="w-36 px-3 py-2 border rounded-lg" />
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-2 border rounded-lg">
                <option value="nome">Ordenar: Nome</option>
                <option value="numero">Ordenar: Número</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={hasCandidatas} onChange={e => setHasCandidatas(e.target.checked)} /> Com candidatas</label>
              <div className="text-sm text-gray-600">Resultados: <strong>{filtered.length}</strong></div>
            </div>
          </div>
        </section>

        {/* bulk actions */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={pageItems.every(i => selectedIds.includes(i.id)) && pageItems.length>0} onChange={selectAllOnPage} /> Selecionar página</label>
            <button onClick={bulkDelete} className="px-3 py-1 rounded border text-sm">Excluir selecionados</button>
          </div>
          <div className="text-sm text-gray-600">Página {page} / {totalPages}</div>
        </div>

        {/* GRID */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.length === 0 && (<div className="col-span-full py-12 text-center text-gray-500">Nenhum time encontrado</div>)}

            {pageItems.map(t => (
              <article key={t.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2" style={{ borderColor: COLORS.pink }}>
                <div className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    {t.foto ? (
                      <img src={t.foto} alt={t.nome} className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md" />
                    ) : (
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-xl font-bold bg-gray-100 border-4 border-white">{initials(t.nome)}</div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg md:text-xl">{t.nome}</h3>
                    <div className="text-sm text-gray-500 mt-1">{t.cidade || '-'} • Responsável: {t.responsavel || '-'}</div>
                  </div>

                  <div className="w-full flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100">Jogadoras: <strong className="ml-1">{t.jogadoras?.length||0}</strong></div>
                      <div className="px-2 py-1 rounded-full text-xs font-medium" style={{ background: t.candidatas?.length ? '#FFF4E6' : '#F3F4F6' }}>Candidatas: <strong className="ml-1">{t.candidatas?.length||0}</strong></div>
                    </div>
                    <div className="text-xs text-gray-400">Nº {t.numero || '-'}</div>
                  </div>

                  <div className="w-full flex gap-2 mt-3">
                    <label className="flex items-center gap-2"><input type="checkbox" checked={selectedIds.includes(t.id)} onChange={() => toggleSelect(t.id)} /></label>
                    <button onClick={() => openView(t)} className="flex-1 px-3 py-2 rounded-md border">Ver</button>

                    <button onClick={() => remove(t.id)} className="flex-1 px-3 py-2 rounded-md font-bold" style={{ background: COLORS.pink, color: 'white' }}>Excluir</button>
                  </div>

                  <div className="w-full mt-2 text-xs text-gray-500">Contato: {t.email || '-'} • {t.telefone || '-'}</div>
                </div>
              </article>
            ))}
          </div>

          {/* paginação */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">Mostrando {filtered.length} resultado(s)</div>
            <div className="flex items-center gap-2">
              <button disabled={page===1} onClick={() => setPage(1)} className="px-3 py-1 border rounded disabled:opacity-50">Primeira</button>
              <button disabled={page===1} onClick={() => setPage(p => Math.max(1, p-1))} className="px-3 py-1 border rounded disabled:opacity-50">Anterior</button>
              <div className="px-3 py-1">{page}</div>
              <button disabled={page===totalPages} onClick={() => setPage(p => Math.min(totalPages, p+1))} className="px-3 py-1 border rounded disabled:opacity-50">Próxima</button>
              <button disabled={page===totalPages} onClick={() => setPage(totalPages)} className="px-3 py-1 border rounded disabled:opacity-50">Última</button>
            </div>
          </div>
        </section>

        {/* VIEW modal */}
        {isViewOpen && viewing && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6">
              <div className="flex items-start gap-4">
                <div>
                  {viewing.foto ? <img src={viewing.foto} alt={viewing.nome} className="w-28 h-28 rounded-full object-cover" /> : <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">{initials(viewing.nome)}</div>}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{viewing.nome}</h2>
                  <div className="text-sm text-gray-600 mt-1">Cidade: {viewing.cidade || '-'}</div>
                  <div className="mt-3 text-sm text-gray-700">Responsável: {viewing.responsavel || '-'}</div>
                  <div className="text-sm text-gray-700">Email: {viewing.email || '-'}</div>
                  <div className="text-sm text-gray-700">Telefone: {viewing.telefone || '-'}</div>
                  <div className="text-sm text-gray-700 mt-2">Jogadoras: {viewing.jogadoras?.length || 0}</div>
                  <div className="text-sm text-gray-700">Candidatas: {viewing.candidatas?.length || 0}</div>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button onClick={() => setIsViewOpen(false)} className="px-4 py-2 border rounded">Fechar</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
