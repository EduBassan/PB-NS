import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function LoginLayout () {
    return(
        <>
            <div className="flex justify-center items-center bg-[#3C1A6E] p-1 ">
                <h1 className="flex flex-row gap-2 text-white"><strong>LOGIN</strong></h1>
            </div>
            <Outlet/>
        </>
    )
}