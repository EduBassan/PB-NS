import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function JogadorasTime () {
    const [time, setTime] = useState(null);
    const [alterandoCamisa, setAlterandoCamisa] = useState(null);
    const [novoNumero, setNovoNumero] = useState("");

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (!usuario || usuario.tipo !== "time") {
            alert("Apenas times podem acessar essa página!");
            window.location.href = "/PageNotFound";
            return;
        }

        const listaTimes = JSON.parse(localStorage.getItem("times")) || [];
        const timeDoUsuario = listaTimes.find((t) => t.id === usuario.id);

        if (!timeDoUsuario) {
            alert("Time não encontrado!");
            return;
        }

        setTime(timeDoUsuario);
    }, []);

    const salvarTimes = (novoTime) => {
        let listaTimes = JSON.parse(localStorage.getItem("times")) || [];
        listaTimes = listaTimes.map((t) => (t.id === novoTime.id ? novoTime : t));
        localStorage.setItem("times", JSON.stringify(listaTimes));
        setTime(novoTime);
    };

    const salvarJogadora = (jogadora) => {
        let jogadoras = JSON.parse(localStorage.getItem("jogadoras")) || [];
        jogadoras = jogadoras.map((j) => (j.id === jogadora.id ? jogadora : j));
        localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
    };

    const removerJogadora = (jogadora) => {
        const novoTime = { ...time };
        novoTime.jogadoras = novoTime.jogadoras.filter((j) => j.id !== jogadora.id);

        const jogadoraAtualizada = { ...jogadora, possuiTime: false, timeId: null, timeNome: null };
        salvarJogadora(jogadoraAtualizada);

        salvarTimes(novoTime);
        alert(`${jogadora.nome} foi removida do time.`);
    };

    const alterarCamisa = (jogadora) => {
        if (!novoNumero){
            return alert("Digite o número da camisa!");
        }

        const novaJogadora = { ...jogadora, numeroCamisa: novoNumero };

        const novoTime = {
            ...time,
            jogadoras: time.jogadoras.map((j) => (j.id === jogadora.id ? novaJogadora : j)),
        };

        salvarJogadora(novaJogadora);
        salvarTimes(novoTime);

        setAlterandoCamisa(null);
        setNovoNumero("");
        alert(`Número da camisa de ${jogadora.nome} alterado para ${novoNumero}.`);
    };

    if (!time) return <p>Carregando...</p>;

    return (
        <div className="flex flex-col">
            <div className="hidden lg:flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-240 gap-5">
                <Link to="/dashboard/clube" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/dashboard/clube/jogadoras" className="font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2 ">Jogadoras</Link>
                <Link to="/dashboard/clube/candidatas" className=" border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Pedidos</Link>
            </div>
            <div className="lg:hidden hidden md:flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-160 gap-5">
                <Link to="/dashboard/clube" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/dashboard/clube/jogadoras" className="font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2 ">Jogadoras</Link>
                <Link to="/dashboard/clube/candidatas" className=" border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Pedidos</Link>
            </div>
            <div className="hidden md:flex flex-col">
                <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                    <h1 className="font-bold text-[50px]">JOGADORAS</h1>
                    <span className="text-[16px] mb-3">Veja todas as jogadoras que fazem parte do elenco atual!</span>
                </div>
                <div>
                    {time.jogadoras && time.jogadoras.length > 0 ? (
                        <div>
                            <div className="flex flex-col gap-5">
                                {time.jogadoras.map((jogadora) => (
                                    <div key={jogadora.id} className="border-2 border-[#3C1A6E] pl-7 pb-5 mt-5 mb-5 flex justify-between items-center border-b-[#3C1A6E] border-t-white border-r-white border-l-white">
                                        <div className="flex items-center gap-4">
                                            {jogadora.foto ? (
                                                <img src={jogadora.foto} alt="imagem-da-jogadora"
                                                className="w-28 h-28 object-cover rounded-full"/>
                                            ) : (
                                                <div className="w-28 h-28 bg-gray-300 flex items-center justify-center rounded-full">
                                                    <span className="text-gray-600">Sem foto</span>
                                                </div>
                                            )}
                                            <div className="hidden lg:flex flex-col">
                                                <h2 className="text-[25px] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap max-w-120">{jogadora.nome} {jogadora.sobrenome}</h2>
                                                <div className="flex flex-row gap-2 font-medium">
                                                    <p className="text-[14px]"> {jogadora.posicao} | </p>
                                                    <p className="text-[14px]">{jogadora.numeroCamisa || "—"}</p>
                                                </div>
                                                <div className="flex flex-row gap-1 text-[12px]">
                                                    <a href={jogadora.instagram} target="_blank" rel="noopener noreferrer">Instagram |</a>
                                                    <a href={jogadora.youtube} target="_blank" rel="noopener noreferrer">Youtube |</a>
                                                    <a href={jogadora.x} target="_blank" rel="noopener noreferrer">X ( Twitter ) |</a>
                                                    <a href={jogadora.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
                                                </div>
                                            </div>
                                            <div className="lg:hidden hidden md:flex flex-col mr-5">
                                                <h2 className="text-[25px] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap max-w-67">{jogadora.nome} {jogadora.sobrenome}</h2>
                                                <div className="flex flex-row gap-2 font-medium">
                                                    <p className="text-[14px]"> {jogadora.posicao} | </p>
                                                    <p className="text-[14px]">{jogadora.numeroCamisa || "—"}</p>
                                                </div>
                                                <div className="flex flex-row gap-1 text-[12px]">
                                                    <a href={jogadora.instagram} target="_blank" rel="noopener noreferrer">Instagram |</a>
                                                    <a href={jogadora.youtube} target="_blank" rel="noopener noreferrer">Youtube |</a>
                                                    <a href={jogadora.x} target="_blank" rel="noopener noreferrer">X ( Twitter ) |</a>
                                                    <a href={jogadora.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="flex flex-col mr-3 mt-5 mb-5 gap-3">
                                            <button
                                                onClick={() => {
                                                    alert(
                                                    `📋 INFORMAÇÕES DA ATLETA\n\n` +
                                                    `Email: ${jogadora.email || "—"}\n` +
                                                    `Data de nascimento: ${jogadora.dataDeNascimento || "—"}\n` +
                                                    `Telefone/WhatsApp: ${jogadora.telefone || "-" }\n` +
                                                    `Condições médicas: ${jogadora.condicoesMedicas ? "Sim" : "Não"}` 
                                                    ) 
                                                }}
                                                className="border-2 border-[#EE4D9A] text-[#EE4D9A] p-1 pr-10 pl-10
                                                hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Ver informações</button>

                                            {alterandoCamisa === jogadora.id ? (
                                                <div className="flex gap-2">
                                                    <input
                                                        type="number"
                                                        placeholder="Nº"
                                                        value={novoNumero}
                                                        onChange={(e) => setNovoNumero(e.target.value)}
                                                        className="border-2 border-[#3C1A6E] px-2 py-1 w-16"/>
                                                <button
                                                    onClick={() => alterarCamisa(jogadora)}
                                                    className="border-2 border-green-600 text-green-600 p-1 pr-4 pl-4
                                                hover:bg-green-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">✔</button>
                                                <button
                                                    onClick={() => {
                                                        setAlterandoCamisa(null); setNovoNumero("");
                                                    }}
                                                    className="border-2 border-red-600 text-red-600 p-1 pr-4 pl-5
                                                hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">✖</button>
                                                </div>
                                            ) : (
                                                <button
                                                onClick={() => setAlterandoCamisa(jogadora.id)}
                                                className="border-2 border-[#3C1A6E] text-[#3C1A6E] p-1 pr-10 pl-10
                                                hover:bg-[#3C1A6E] hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Alterar camisa</button>
                                            )}

                                            <button
                                                onClick={() => removerJogadora(jogadora)}
                                                className="border-2 border-red-600 text-red-600 p-1 pr-10 pl-10
                                                hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Remover</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center pt-20">
                            <p>Não há jogadoras neste time.</p>
                        </div>
                    )}
                </div>
            </div>



            <div className="md:hidden flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-85 gap-5 justify-center">
                <Link to="/dashboard/clube" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/dashboard/clube/jogadoras" className="font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2 ">Jogadoras</Link>
                <Link to="/dashboard/clube/candidatas" className=" border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Pedidos</Link>
            </div>
            <div className="md:hidden flex flex-col">
                <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 w-85 justify-center items-center text-center ">
                    <h1 className="font-bold text-[50px]">JOGADORAS</h1>
                    <span className="text-[16px] mb-3">Veja todas as jogadoras que fazem parte do elenco atual!</span>
                </div>
                <div>
                    {time.jogadoras && time.jogadoras.length > 0 ? (
                        <div>
                            <div className="flex flex-col gap-5">
                                {time.jogadoras.map((jogadora) => (
                                    <div key={jogadora.id} className="border-2 w-85 border-[#3C1A6E] pb-5 mt-5 mb-5 flex flex-col justify-between items-center border-b-[#3C1A6E] border-t-white border-r-white border-l-white">
                                        <div className="flex flex-col justify-center items-center text-center gap-4">
                                            {jogadora.foto ? (
                                                <img src={jogadora.foto} alt="imagem-da-jogadora"
                                                className="w-28 h-28 object-cover rounded-full"/>
                                            ) : (
                                                <div className="w-28 h-28 bg-gray-300 flex items-center justify-center rounded-full">
                                                    <span className="text-gray-600">Sem foto</span>
                                                </div>
                                            )}
                                            <div className="flex flex-col text-center justify-center items-center">
                                                <h2 className="text-[25px] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap max-w-80">{jogadora.nome} {jogadora.sobrenome}</h2>
                                                <div className="flex flex-row gap-2 font-medium">
                                                    <p className="text-[14px]"> {jogadora.posicao} | </p>
                                                    <p className="text-[14px]">{jogadora.numeroCamisa || "—"}</p>
                                                </div>
                                                <div className="flex flex-row gap-1 text-[12px] ">
                                                    <a href={jogadora.instagram} target="_blank" rel="noopener noreferrer">Instagram |</a>
                                                    <a href={jogadora.youtube} target="_blank" rel="noopener noreferrer">Youtube |</a>
                                                    <a href={jogadora.x} target="_blank" rel="noopener noreferrer">X ( Twitter ) |</a>
                                                    <a href={jogadora.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col mr-3 mt-5 mb-5 gap-3">
                                            <button
                                                onClick={() => {
                                                    alert(
                                                    `📋 INFORMAÇÕES DA ATLETA\n\n` +
                                                    `Email: ${jogadora.email || "—"}\n` +
                                                    `Data de nascimento: ${jogadora.dataDeNascimento || "—"}\n` +
                                                    `Telefone/WhatsApp: ${jogadora.telefone || "-" }\n` +
                                                    `Condições médicas: ${jogadora.condicoesMedicas ? "Sim" : "Não"}` 
                                                    ) 
                                                }}
                                                className="border-2 border-[#EE4D9A] text-[#EE4D9A] p-1 pr-10 pl-10
                                                hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Ver informações</button>

                                            {alterandoCamisa === jogadora.id ? (
                                                <div className="flex gap-2">
                                                    <input
                                                        type="number"
                                                        placeholder="Nº"
                                                        value={novoNumero}
                                                        onChange={(e) => setNovoNumero(e.target.value)}
                                                        className="border-2 border-[#3C1A6E] px-2 py-1 w-16"/>
                                                <button
                                                    onClick={() => alterarCamisa(jogadora)}
                                                    className="border-2 border-green-600 text-green-600 p-1 pr-4 pl-4
                                                hover:bg-green-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">✔</button>
                                                <button
                                                    onClick={() => {
                                                        setAlterandoCamisa(null); setNovoNumero("");
                                                    }}
                                                    className="border-2 border-red-600 text-red-600 p-1 pr-4 pl-5
                                                hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">✖</button>
                                                </div>
                                            ) : (
                                                <button
                                                onClick={() => setAlterandoCamisa(jogadora.id)}
                                                className="border-2 border-[#3C1A6E] text-[#3C1A6E] p-1 pr-10 pl-10
                                                hover:bg-[#3C1A6E] hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Alterar camisa</button>
                                            )}

                                            <button
                                                onClick={() => removerJogadora(jogadora)}
                                                className="border-2 border-red-600 text-red-600 p-1 pr-10 pl-10
                                                hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Remover</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center pt-20">
                            <p>Não há jogadoras neste time.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}