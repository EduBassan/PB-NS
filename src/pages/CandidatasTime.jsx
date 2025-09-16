import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export default function CandidatasTime () {
    const [time, setTime] = useState(null);

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

    const aceitarCandidata = (candidata) => {
        const novoTime = { ...time };

        novoTime.candidatas = novoTime.candidatas.filter((c) => c.id !== candidata.id);
        novoTime.jogadoras = [...(novoTime.jogadoras || []), candidata];

        const novaJogadora = {
            ...candidata,
            possuiTime: true,
            timeId: novoTime.id,
            timeNome: novoTime.nome,
        };
        salvarJogadora(novaJogadora);

        salvarTimes(novoTime);
        alert(`${candidata.nome} foi aceita no time!`);
    };

    const recusarCandidata = (candidata) => {
        const novoTime = { ...time };
        novoTime.candidatas = novoTime.candidatas.filter((c) => c.id !== candidata.id);

        salvarTimes(novoTime);
        alert(`${candidata.nome} foi recusada.`);
    };

    if (!time) return <p>Carregando...</p>;

    return (
        <div className="flex flex-col">
            <div className="hidden lg:flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-240 gap-5">
                <Link to="/PB-NS/dashboard/clube" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/PB-NS/dashboard/clube/jogadoras" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Jogadoras</Link>
                <Link to="/PB-NS/dashboard/clube/candidatas" className=" font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2">Pedidos</Link>
            </div>
            <div className="hidden lg:flex flex-col">
                <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                    <h1 className="font-bold text-[50px]">PEDIDOS</h1>
                    <span className="text-[16px] mb-3">Veja todas as jogadoras que querem fazer parte do seu elenco!</span>
                </div>
                <div>
                    {time.candidatas && time.candidatas.length > 0 ? (
                        <div className="flex flex-col gap-5">
                            {time.candidatas.map((candidata) => (
                                <div key={candidata.id} className=" border-2 border-[#3C1A6E] pl-7 pb-5 mt-5 mb-5 flex justify-between items-center border-b-[#3C1A6E] border-t-white border-r-white border-l-white">
                                    <div className="flex items-center gap-4">
                                        {candidata.foto ? (
                                            <img src={candidata.foto} alt="foto-da-candidata"
                                                className="w-28 h-28 object-cover rounded-full"/>
                                        ) : (
                                            <div className="w-28 h-28 bg-gray-300 flex items-center justify-center rounded-full">
                                                <span className="text-gray-600">Sem foto</span>
                                            </div>
                                        )}
                                        <div>
                                            <div>
                                                <h2 className="text-[25px] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap max-w-120">{candidata.nome} {candidata.sobrenome}</h2>
                                                <p className="text-[14px]">Posição: {candidata.posicao}</p>
                                            </div>
                                            <div className="flex flex-row gap-1 text-[12px]">
                                                <a href={candidata.instagram} target="_blank" rel="noopener noreferrer">Instagram |</a>
                                                <a href={candidata.youtube} target="_blank" rel="noopener noreferrer">Youtube |</a>
                                                <a href={candidata.x} target="_blank" rel="noopener noreferrer">X ( Twitter ) |</a>
                                                <a href={candidata.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <button
                                        onClick={() => {
                                            alert(
                                                    `📋 INFORMAÇÕES DA ATLETA\n\n` +
                                                    `Email: ${candidata.email || "—"}\n` +
                                                    `Data de nascimento: ${candidata.dataDeNascimento || "—"}\n` +
                                                    `Telefone/WhatsApp: ${candidata.telefone || "-" }\n` +
                                                    `Condições médicas: ${candidata.condicoesMedicas ? "Sim" : "Não"}` 
                                                    ) 
                                        }}
                                        className="border-2 border-[#EE4D9A] text-[#EE4D9A] p-1 pr-10 pl-10
                                        hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Ver informações</button>
                                        <button
                                        onClick={() => aceitarCandidata(candidata)}
                                        className="border-2 border-green-600 text-green-600 p-1 pr-4 pl-4
                                        hover:bg-green-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Aceitar</button>
                                        <button
                                        onClick={() => recusarCandidata(candidata)}
                                        className="border-2 border-red-600 text-red-600 p-1 pr-4 pl-5
                                        hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Recusar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center pt-20">
                            <p>Não há pedidos de jogadoras no momento.</p>
                        </div>
                    )}
                </div>
            </div>




            <div className="lg:hidden hidden md:flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-160 gap-5">
                <Link to="/PB-NS/dashboard/clube" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/PB-NS/dashboard/clube/jogadoras" className=" border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Jogadoras</Link>
                <Link to="/PB-NS/dashboard/clube/candidatas" className=" font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2">Pedidos</Link>
            </div>
            <div className="lg:hidden hidden md:flex flex-col">
                <div className="flex flex-col border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                    <h1 className="font-bold text-[50px]">PEDIDOS</h1>
                    <span className="text-[16px] mb-3">Veja todas as jogadoras que querem fazer parte do seu elenco!</span>
                </div>
                <div>
                    {time.candidatas && time.candidatas.length > 0 ? (
                        <div className="flex flex-col gap-5">
                            {time.candidatas.map((candidata) => (
                                <div key={candidata.id} className=" border-2 border-[#3C1A6E] pl-7 pb-5 mt-5 mb-5 flex justify-between items-center border-b-[#3C1A6E] border-t-white border-r-white border-l-white">
                                    <div className="flex items-center gap-4">
                                        {candidata.foto ? (
                                            <img src={candidata.foto} alt="foto-da-candidata"
                                                className="w-28 h-28 object-cover rounded-full"/>
                                        ) : (
                                            <div className="w-28 h-28 bg-gray-300 flex items-center justify-center rounded-full">
                                                <span className="text-gray-600">Sem foto</span>
                                            </div>
                                        )}
                                        <div>
                                            <div>
                                                <h2 className="text-[25px] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap max-w-80">{candidata.nome} {candidata.sobrenome}</h2>
                                                <p className="text-[14px]">Posição: {candidata.posicao}</p>
                                            </div>
                                            <div className="flex flex-row gap-1 text-[12px]">
                                                <a href={candidata.instagram} target="_blank" rel="noopener noreferrer">Instagram |</a>
                                                <a href={candidata.youtube} target="_blank" rel="noopener noreferrer">Youtube |</a>
                                                <a href={candidata.x} target="_blank" rel="noopener noreferrer">X ( Twitter ) |</a>
                                                <a href={candidata.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <button
                                        onClick={() => {
                                            alert(
                                                    `📋 INFORMAÇÕES DA ATLETA\n\n` +
                                                    `Email: ${candidata.email || "—"}\n` +
                                                    `Data de nascimento: ${candidata.dataDeNascimento || "—"}\n` +
                                                    `Telefone/WhatsApp: ${candidata.telefone || "-" }\n` +
                                                    `Condições médicas: ${candidata.condicoesMedicas ? "Sim" : "Não"}` 
                                                    ) 
                                        }}
                                        className="border-2 border-[#EE4D9A] text-[#EE4D9A] p-1 pr-10 pl-10
                                        hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Ver informações</button>
                                        <button
                                        onClick={() => aceitarCandidata(candidata)}
                                        className="border-2 border-green-600 text-green-600 p-1 pr-4 pl-4
                                        hover:bg-green-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Aceitar</button>
                                        <button
                                        onClick={() => recusarCandidata(candidata)}
                                        className="border-2 border-red-600 text-red-600 p-1 pr-4 pl-5
                                        hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Recusar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center pt-20">
                            <p>Não há pedidos de jogadoras no momento.</p>
                        </div>
                    )}
                </div>
            </div>



            <div className="md:hidden flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-85 gap-5 justify-center">
                <Link to="/PB-NS/dashboard/clube" className="border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Conta</Link>
                <Link to="/PB-NS/dashboard/clube/jogadoras" className=" border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Jogadoras</Link>
                <Link to="/PB-NS/dashboard/clube/candidatas" className=" font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2">Pedidos</Link>
            </div>
            <div className="md:hidden flex flex-col">
                <div className="flex flex-col border-2 w-85 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 justify-center items-center text-center ">
                    <h1 className="font-bold text-[50px]">PEDIDOS</h1>
                    <span className="text-[16px] mb-3">Veja todas as jogadoras que querem fazer parte do seu elenco!</span>
                </div>
                <div>
                    {time.candidatas && time.candidatas.length > 0 ? (
                        <div className="flex flex-col gap-5">
                            {time.candidatas.map((candidata) => (
                                <div key={candidata.id} className=" border-2 w-85 border-[#3C1A6E] pb-5 mt-5 mb-5 flex flex-col justify-between items-center border-b-[#3C1A6E] border-t-white border-r-white border-l-white">
                                    <div className="flex flex-col items-center gap-4 mb-5 justify-center">
                                        {candidata.foto ? (
                                            <img src={candidata.foto} alt="foto-da-candidata"
                                                className="w-28 h-28 object-cover rounded-full"/>
                                        ) : (
                                            <div className="w-28 h-28 bg-gray-300 flex items-center justify-center rounded-full">
                                                <span className="text-gray-600">Sem foto</span>
                                            </div>
                                        )}
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="flex flex-col justify-center items-center text-center">
                                                <h2 className="text-[25px] font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap max-w-80">{candidata.nome} {candidata.sobrenome}</h2>
                                                <p className="text-[14px]">Posição: {candidata.posicao}</p>
                                            </div>
                                            <div className="flex flex-row gap-1 text-[12px]">
                                                <a href={candidata.instagram} target="_blank" rel="noopener noreferrer">Instagram |</a>
                                                <a href={candidata.youtube} target="_blank" rel="noopener noreferrer">Youtube |</a>
                                                <a href={candidata.x} target="_blank" rel="noopener noreferrer">X ( Twitter ) |</a>
                                                <a href={candidata.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <button
                                        onClick={() => {
                                            alert(
                                                    `📋 INFORMAÇÕES DA ATLETA\n\n` +
                                                    `Email: ${candidata.email || "—"}\n` +
                                                    `Data de nascimento: ${candidata.dataDeNascimento || "—"}\n` +
                                                    `Telefone/WhatsApp: ${candidata.telefone || "-" }\n` +
                                                    `Condições médicas: ${candidata.condicoesMedicas ? "Sim" : "Não"}` 
                                                    ) 
                                        }}
                                        className="border-2 border-[#EE4D9A] text-[#EE4D9A] p-1 pr-10 pl-10
                                        hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Ver informações</button>
                                        <button
                                        onClick={() => aceitarCandidata(candidata)}
                                        className="border-2 border-green-600 text-green-600 p-1 pr-4 pl-4
                                        hover:bg-green-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Aceitar</button>
                                        <button
                                        onClick={() => recusarCandidata(candidata)}
                                        className="border-2 border-red-600 text-red-600 p-1 pr-4 pl-5
                                        hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer">Recusar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center pt-20">
                            <p>Não há pedidos de jogadoras no momento.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}