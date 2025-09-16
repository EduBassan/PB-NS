import { Outlet } from "react-router-dom";

export default function DashboardLayout () {
    const user = JSON.parse(localStorage.getItem("usuarioLogado"))

    return (
        <>
            <div className="flex justify-center items-center text-center bg-[#3C1A6E] p-1 ">
                {user?.tipo === "jogadora" ? (
                    <h1 className="flex flex-row gap-2 text-white uppercase"><strong>Fala, {user.nome} {user.sobrenome}!</strong></h1>
                ) : (
                    <h1 className="flex flex-row gap-2 text-white uppercase"><strong>{user.nome}: mais unidas que linha de impedimento!</strong></h1>
                )}
                
            </div>
            <Outlet/>
        </>
    )
}