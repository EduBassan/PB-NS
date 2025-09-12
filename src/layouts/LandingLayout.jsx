import { Outlet } from "react-router-dom";
import Hero from "../components/hero";

export default function LandingLayout () {
    return(
        <>
            <div className="flex justify-center items-center text-center bg-[#3C1A6E] p-1 ">
                <h1 className="flex flex-row gap-2 text-white"><strong>CHUTA</strong> ou <strong>PASSA A BOLA</strong></h1>
            </div>
            <Hero/>
        </>
    )
}