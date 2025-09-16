// Essa página ficará para possíveis atualizações, provavelmente estará no Sprint 4


import { Outlet } from "react-router-dom"

export default function ApoiadoresLayout () {
    return(
        <>
            <div className="flex justify-center items-center text-center bg-[#3C1A6E] p-1 ">
                <h1 className="flex flex-row gap-2 text-white"><strong>CHUTA</strong> ou <strong>PASSA A BOLA</strong></h1>
            </div>
            <Outlet/>
        </>
    )
}