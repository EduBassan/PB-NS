import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function DashboardTimes () {
    const navigate = useNavigate ();
    const [usuario, setUsuario] = useState(null);

    useEffect (() => {
        const user = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (!user ||  user.tipo !== "time") {
            navigate("/PageNotFound");
            return
        }
        setUsuario(user);
    }, [navigate])
    if (!usuario) return <p>Carregando...</p>;

    return (
        <div className="flex flex-col items-center">
            <div className="flex bg-[#3C1A6E] w-240 pt-25 pr-20 pl-20 pb-7 mt-10">
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
                            <h1 className="text-[50px] uppercase font-medium">{usuario.nome}</h1>
                            <span className="text-[20px] italic">{usuario.cidade}</span>
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
                <Outlet/>
            <div className="flex w-full bg-[#3C1A6E] h-60 items-center justify-center">
                <h1 className="text-white text-[80px] font-medium">PASSA A BOLA</h1>
            </div>
        </div>
    )
}