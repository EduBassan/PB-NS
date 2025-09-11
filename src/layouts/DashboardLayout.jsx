import { Outlet } from "react-router-dom";

export default function DashboardLayout () {
    return (
        <>
            <div className="flex justify-center items-center text-center bg-[#3C1A6E] p-1 ">
                <h1 className="flex flex-row gap-2 text-white"><strong>Preencha seus dados e já pode pedir música no Fantástico!</strong></h1>
            </div>
            <Outlet/>
        </>
    )
}