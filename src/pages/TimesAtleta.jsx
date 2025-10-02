import { Link } from "react-router-dom"
import { useState, useEffect } from "react";


export default function TimesAtleta () {
    const [times, setTimes] = useState([]);
    const [busca, setBusca] = useState("");
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const listaTimes = JSON.parse(localStorage.getItem("times")) || [];
        setTimes(listaTimes);

        const user = JSON.parse(localStorage.getItem("usuarioLogado"));
        setUsuario(user);
    }, []);

    const salvarUsuario = (novoUsuario) => {
        localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

        let jogadoras = JSON.parse(localStorage.getItem("jogadoras")) || [];
        jogadoras = jogadoras.map((j) =>
            j.id === novoUsuario.id ? novoUsuario : j
        );
        localStorage.setItem("jogadoras", JSON.stringify(jogadoras));

        setUsuario(novoUsuario);
    };

    const pedirParaEntrar = (timeId) => {
        if (!usuario) {
            alert("Você precisa estar logada como jogadora!");
            return;
        }

        let listaTimes = [...times];

        if (usuario.possuiTime) {
            alert("Você já está em um time!");
            return;
    }

        const jaCandidatadaEmOutro = listaTimes.some((t) =>
            t.candidatas?.some((c) => c.id === usuario.id)
        );

        if (jaCandidatadaEmOutro) {
            alert("Você já está candidata em um time. Aguarde a resposta!");
            return;
        }

        let time = listaTimes.find((t) => t.id === timeId);
        if (!time) {
            return;
        } 

        
        time.candidatas = [...(time.candidatas || []), usuario];

        localStorage.setItem("times", JSON.stringify(listaTimes));
        setTimes(listaTimes);

        alert(`Você pediu para entrar no ${time.nome}. Aguarde aprovação.`);
    };

    const sairDoTime = () => {
        if (!usuario || !usuario.possuiTime) return;

        let listaTimes = [...times];
        let time = listaTimes.find((t) => t.id === usuario.timeId);

        if (time) {
            time.jogadoras = time.jogadoras?.filter((j) => j.id !== usuario.id) || [];
        }

        const novoUsuario = { ...usuario, possuiTime: false, timeId: null, timeNome: null };
        salvarUsuario(novoUsuario);

        localStorage.setItem("times", JSON.stringify(listaTimes));
        setTimes(listaTimes);

        alert("Você saiu do time.");
    };

  
    const timesFiltrados = (() => {
        if (!usuario) return times;

        if (usuario.possuiTime && usuario.timeId) {
            return times.filter((t) => t.id === usuario.timeId);
        }

    const timeCandidatado = times.find((t) =>
        t.candidatas?.some((c) => c.id === usuario.id)
    );
    if (timeCandidatado) {
        return [timeCandidatado];
    } 

    return times.filter((t) =>
        t.nome.toLowerCase().includes(busca.toLowerCase())
    );
})();

    return (
        <div className="flex flex-col">
            <div className="hidden lg:flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-240 gap-5">
                <Link to="/dashboard/jogadora" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/dashboard/jogadora/times" className="font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2">Times</Link>
            </div>
            <div className="hidden lg:flex flex-col w-240">
                {usuario?.possuiTime ? (
                    <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                        <h1 className="font-bold text-[50px]">TIME</h1>
                        <span className="text-[14px] mb-2">O seu atual time é o <strong className="uppercase">{usuario.timeNome}</strong></span>
                    </div>
                ) : (
                    <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                        <h1 className="font-bold text-[50px]">TIMES</h1>
                        <span className="text-[14px] mb-2">Escolha o time que quiser e envie sua candidatura — uma por vez. A decisão final é deles, mas cada tentativa é uma chance de mostrar seu potencial!</span>
                    </div>
                )}
                <div>
                    {!usuario?.possuiTime &&
                    !times.some((t) => t.candidatas?.some((c) => c.id === usuario?.id)) && (
                        <input
                            type="text"
                            placeholder="Pesquisar time..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="border-2 border-[#EE4D9A] p-2 mb-5 mt-5 w-full"
                        />
                    )}
                </div>
                <div>
                    {timesFiltrados.length > 0 ? (
                    timesFiltrados.map((time) => (
                        <div key={time.id} className=" pl-7 pb-5 mt-5 flex justify-between items-center border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white mb-5 ">
                            <div className="flex items-center gap-4">
                                {time.foto && (
                                    <img
                                        src={time.foto} alt="Logo do time"
                                        className="w-20 h-20 object-cover rounded-full"/>
                                )}
                                <div className="flex flex-col">
                                    <h2 className="text-[23px] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap max-w-155">{time.nome}</h2>
                                    <p className="text-[14px]">Jogadoras: {time.jogadoras?.length || 0}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                {usuario?.possuiTime && usuario.timeId === time.id ? (
                                    <button
                                    onClick={sairDoTime}
                                    className="border-2 border-red-600 text-red-600 p-1 pr-10 pl-10
                                    hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Sair do time
                                    </button>
                                ) : (
                                    <button
                                    onClick={() => pedirParaEntrar(time.id)}
                                    disabled={time.candidatas?.some((c) => c.id === usuario?.id)}
                                    className={`p-1 pr-8 pl-8
                                    ${time.candidatas?.some((c) => c.id === usuario?.id)? "bg-[#3C1A6E] text-white cursor-not-allowed" : "border-2 border-[#EE4D9A] text-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer"}`}>
                                    {time.candidatas?.some((c) => c.id === usuario?.id)? "Aguardando aprovação..." : "Pedir para entrar"}
                                    </button>
                                )}        
                            </div>
                        </div>
                    ))
                    ) : (
                        <div className="flex justify-center items-center">
                            <p>Nenhum time encontrado.</p>
                        </div>
                    )}
                </div>
            </div>



            <div className="lg:hidden hidden md:flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-160 gap-5">
                <Link to="/dashboard/jogadora" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/dashboard/jogadora/times" className="font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2">Times</Link>
            </div>
            <div className="lg:hidden hidden md:flex flex-col w-160">
                <div className="text-center">
                    {usuario?.possuiTime ? (
                        <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                            <h1 className="font-bold text-[50px]">TIME</h1>
                            <span className="text-[14px] mb-2">O seu atual time é o <strong className="uppercase">{usuario.timeNome}</strong></span>
                        </div>
                    ) : (
                        <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                            <h1 className="font-bold text-[50px]">TIMES</h1>
                            <span className="text-[14px] mb-2">Escolha o time que quiser e envie sua candidatura — uma por vez. A decisão final é deles, mas cada tentativa é uma chance de mostrar seu potencial!</span>
                        </div>
                    )}
                </div>
                <div>
                    {!usuario?.possuiTime &&
                    !times.some((t) => t.candidatas?.some((c) => c.id === usuario?.id)) && (
                        <input
                            type="text"
                            placeholder="Pesquisar time..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="border-2 border-[#EE4D9A] p-2 mb-5 mt-5 w-full"
                        />
                    )}
                </div>
                <div>
                    {timesFiltrados.length > 0 ? (
                    timesFiltrados.map((time) => (
                        <div key={time.id} className=" pl-7 pb-5 mt-5 flex justify-between items-center border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white mb-5 ">
                            <div className="flex items-center gap-4">
                                {time.foto && (
                                    <img
                                        src={time.foto} alt="Logo do time"
                                        className="w-20 h-20 object-cover rounded-full"/>
                                )}
                                <div className="flex flex-col">
                                    <h2 className="text-[23px] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap max-w-60">{time.nome}</h2>
                                    <p className="text-[14px]">Jogadoras: {time.jogadoras?.length || 0}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                {usuario?.possuiTime && usuario.timeId === time.id ? (
                                    <button
                                    onClick={sairDoTime}
                                    className="border-2 border-red-600 text-red-600 p-1 pr-10 pl-10
                                    hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Sair do time
                                    </button>
                                ) : (
                                    <button
                                    onClick={() => pedirParaEntrar(time.id)}
                                    disabled={time.candidatas?.some((c) => c.id === usuario?.id)}
                                    className={`p-1 pr-8 pl-8
                                    ${time.candidatas?.some((c) => c.id === usuario?.id)? "bg-[#3C1A6E] text-white cursor-not-allowed text-[10px]" : "border-2 border-[#EE4D9A] text-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer"}`}>
                                    {time.candidatas?.some((c) => c.id === usuario?.id)? "Aguardando aprovação..." : "Pedir para entrar"}
                                    </button>
                                )}        
                            </div>
                        </div>
                    ))
                    ) : (
                        <div className="flex justify-center items-center">
                            <p>Nenhum time encontrado.</p>
                        </div>
                    )}
                </div>
            </div>



            <div className="md:hidden flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-85 gap-5">
                <Link to="/dashboard/jogadora" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/dashboard/jogadora/times" className="font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2">Times</Link>
            </div>
            <div className="md:hidden flex flex-col w-85">
                <div>
                    {usuario?.possuiTime ? (
                        <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                            <h1 className="font-bold text-[50px]">TIME</h1>
                            <span className="text-[14px] mb-2">O seu atual time é o <strong className="uppercase">{usuario.timeNome}</strong></span>
                        </div>
                    ) : (
                        <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                            <h1 className="font-bold text-[50px]">TIMES</h1>
                            <span className="text-[14px] mb-2">Escolha o time que quiser e envie sua candidatura — uma por vez. A decisão final é deles, mas cada tentativa é uma chance de mostrar seu potencial!</span>
                        </div>
                    )}
                </div>
                <div>
                    {!usuario?.possuiTime &&
                    !times.some((t) => t.candidatas?.some((c) => c.id === usuario?.id)) && (
                        <input
                            type="text"
                            placeholder="Pesquisar time..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className="border-2 border-[#EE4D9A] p-2 mb-5 mt-5 w-full"
                        />
                    )}
                </div>
                <div>
                    {timesFiltrados.length > 0 ? (
                    timesFiltrados.map((time) => (
                        <div key={time.id} className=" w-85 pb-5 mt-5 flex flex-col gap-7 justify-between items-center border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white mb-5 ">
                            <div className="flex flex-col justify-center items-center text-center gap-4">
                                {time.foto && (
                                    <img
                                        src={time.foto} alt="Logo do time"
                                        className="w-20 h-20 object-cover rounded-full"/>
                                )}
                                <div className="flex flex-col w-80 text-center justify-center items-center">
                                    <h2 className="text-[23px] font-bold uppercase w-auto h-auto overflow-hidden text-ellipsis whitespace-nowrap max-w-55">{time.nome}</h2>
                                    <p className="text-[14px]">Jogadoras: {time.jogadoras?.length || 0}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                {usuario?.possuiTime && usuario.timeId === time.id ? (
                                    <button
                                    onClick={sairDoTime}
                                    className="border-2 border-red-600 text-red-600 p-1 pr-10 pl-10
                                    hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Sair do time
                                    </button>
                                ) : (
                                    <button
                                    onClick={() => pedirParaEntrar(time.id)}
                                    disabled={time.candidatas?.some((c) => c.id === usuario?.id)}
                                    className={`p-1 pr-8 pl-8
                                    ${time.candidatas?.some((c) => c.id === usuario?.id)? "bg-[#3C1A6E] text-white cursor-not-allowed" : "border-2 border-[#EE4D9A] text-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer"}`}>
                                    {time.candidatas?.some((c) => c.id === usuario?.id)? "Aguardando aprovação..." : "Pedir para entrar"}
                                    </button>
                                )}        
                            </div>
                        </div>
                    ))
                    ) : (
                        <div className="flex justify-center items-center">
                            <p>Nenhum time encontrado.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}