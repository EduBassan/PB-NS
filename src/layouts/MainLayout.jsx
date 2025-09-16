import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function MainLayout () {
    return(
        <>
            <NavBar/>
            <main className="w-full overflow-hidden">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}