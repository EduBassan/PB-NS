import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function DashboardAtleta () {
    const navigate = useNavigate ();
    const [usuario, setUsuario] = useState(null);

    useEffect (() => {
        const user = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (!user ||  user.tipo !== "jogadora") {
            navigate("/PageNotFound");
            return
        }
        setUsuario(user);
    }, [navigate])
    if (!usuario) return <p>Carregando...</p>;

    const excluirConta = () => {
        const confirmacao = window.confirm("Tem certeza que deseja excluir sua conta? Esta ação não poderá ser desfeita.");
        if (!confirmacao) return;

        let jogadoras = JSON.parse(localStorage.getItem("jogadoras")) || [];
        jogadoras = jogadoras.filter((j) => j.id !== usuario.id);
        localStorage.setItem("jogadoras", JSON.stringify(jogadoras));

        localStorage.removeItem("usuarioLogado");

        alert("Conta excluída com sucesso!");
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center">
            <div className="hidden lg:flex bg-[#3C1A6E] w-240 pt-25 pr-20 pl-20 pb-7 mt-10">
                <div className="flex flex-row gap-5">
                    <div>
                        {usuario.foto ? (
                            <img src={usuario.foto} alt="foto-da-atleta" className="w-40 h-40 rounded-full object-cover" />
                        ):(
                            <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">Sem foto</span>
                            </div>
                        )}
                    </div>

                    <div className="text-white flex flex-col justify-end pb-2 ">
                        <div>
                            <h1 className="text-[30px] uppercase font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-130">{usuario.nome} {usuario.sobrenome}</h1>
                            {usuario.possuiTime? (
                                <span className="text-[20px] italic">Time: {usuario.timeNome}</span>
                            ) : (
                                <span className="text-[20px] italic">Sem time</span>
                            )}
                        </div>
                        <div>
                            <a href={usuario.instagram} className="font-bold" target="_blank" rel="noopener noreferrer">Instagram | </a>
                            <a href={usuario.youtube} className="font-bold" target="_blank" rel="noopener noreferrer">Youtube | </a>
                            <a href={usuario.x} className="font-bold" target="_blank" rel="noopener noreferrer">X | </a>
                            <a href={usuario.tiktok} className="font-bold" target="_blank" rel="noopener noreferrer">Tiktok</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex">
                <Outlet/>
            </div>
            <div className="hidden lg:flex">
                <button onClick={excluirConta}
                className="border-2 border-red-600 text-red-600 font-medium p-2 pr-8 pl-8 mt-15 mb-15 cursor-pointer
                hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500">Excluir Conta</button>
            </div>
            <div className="hidden lg:flex w-full bg-[#3C1A6E] h-60 items-center justify-center">
                <h1 className="text-white text-[80px] font-medium">PASSA A BOLA</h1>
            </div>



            <div className="lg:hidden hidden md:flex bg-[#3C1A6E] w-160 pt-25 pr-20 pl-20 pb-7 mt-10 justify-center items-center">
                <div className="flex flex-row gap-5 ">
                    <div className="flex flex-col items-center">
                        <div>
                            {usuario.foto ? (
                                <img src={usuario.foto} alt="foto-da-atleta" className="w-40 h-40 rounded-full object-cover" />
                            ):(
                                <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center">
                                    <span className="text-gray-600">Sem foto</span>
                                </div>
                            )}
                        </div>

                        <div className="text-white flex flex-col pb-2 text-center gap-2 ">
                            <div>
                                <h1 className="text-[40px] uppercase font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-146">{usuario.nome} {usuario.sobrenome}</h1>
                                {usuario.possuiTime? (
                                    <span className="text-[18px] italic">Time: {usuario.timeNome}</span>
                                ) : (
                                    <span className="text-[18px] italic">Sem time</span>
                                )}
                            </div>
                            <div>
                                <a href={usuario.instagram} className="font-bold" target="_blank" rel="noopener noreferrer">Instagram | </a>
                                <a href={usuario.youtube} className="font-bold" target="_blank" rel="noopener noreferrer">Youtube | </a>
                                <a href={usuario.x} className="font-bold" target="_blank" rel="noopener noreferrer">Twitter | </a>
                                <a href={usuario.tiktok} className="font-bold" target="_blank" rel="noopener noreferrer">Tiktok</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="lg:hidden hidden md:flex">
                <Outlet/>
            </div>
            <div className="lg:hidden hidden md:flex">
                <button onClick={excluirConta}
                className="border-2 border-red-600 text-red-600 font-medium p-2 pr-8 pl-8 mt-15 mb-15 cursor-pointer
                hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500">Excluir Conta</button>
            </div>
            <div className="lg:hidden hidden md:flex w-full bg-[#3C1A6E] h-60 items-center justify-center">
                <h1 className="text-white text-[80px] font-medium">PASSA A BOLA</h1>
            </div>



            <div className="md:hidden flex w-80 pt-5 mt-2 justify-center items-center">
                <div className="flex flex-row gap-5 ">
                    <div className="flex flex-col items-center p-10 border-2 w-84 border-t-white border-b-[##3C1A6E] border-l-white border-r-white">
                        <div>
                            {usuario.foto ? (
                                <img src={usuario.foto} alt="foto-da-atleta" className="w-40 h-40 rounded-full object-cover" />
                            ):(
                                <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center">
                                    <span className="text-gray-600">Sem foto</span>
                                </div>
                            )}
                        </div>

                        <div className="text-[#3C1A6E] flex flex-col pb-2 text-center gap-2 ">
                            <div>
                                <h1 className="text-[25px] uppercase font-medium overflow-hidden text-ellipsis whitespace-nowrap max-w-80">{usuario.nome} {usuario.sobrenome}</h1>
                                {usuario.possuiTime? (
                                    <span className="text-[15px] italic">Time: {usuario.timeNome}</span>
                                ) : (
                                    <span className="text-[15px] italic">Sem time</span>
                                )}
                            </div>
                            <div>
                                <a href={usuario.instagram} className="font-bold text-[14px]" target="_blank" rel="noopener noreferrer">Instagram | </a>
                                <a href={usuario.youtube} className="font-bold text-[14px]" target="_blank" rel="noopener noreferrer">Youtube | </a>
                                <a href={usuario.x} className="font-bold text-[14px]" target="_blank" rel="noopener noreferrer">Twitter | </a>
                                <a href={usuario.tiktok} className="font-bold text-[14px]" target="_blank" rel="noopener noreferrer">Tiktok</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <Outlet/>
            </div>
            <div className="md:hidden">
                <button onClick={excluirConta}
                className="border-2 border-red-600 text-red-600 font-medium p-2 pr-8 pl-8 mt-15 mb-15 cursor-pointer
                hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500">Excluir Conta</button>
            </div>
        </div>  
    )
}