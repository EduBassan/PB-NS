import { Outlet } from "react-router-dom"

export default function CopaLayout () {
    return(
        <>
            <div className="flex justify-center items-center text-center bg-[#3C1A6E] p-1 overflow-hidden">
                <h1 className="flex flex-row gap-2 text-white uppercase"><strong>O campo é de terra, mas o talento é de ouro!</strong></h1>
            </div>
            <Outlet/>
        </>
    )
    
}