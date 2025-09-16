import { Outlet } from "react-router-dom";

export default function PostagensLayout () {
    return(
        <>
            <div className="flex justify-center items-center text-center bg-[#3C1A6E] p-1 ">
                <h1 className="flex flex-row gap-2 text-white uppercase"><strong>As craques falaram. A gente só anotou!</strong></h1>
            </div>
            <Outlet/>
        </>
    )
}