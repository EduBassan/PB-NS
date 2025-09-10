import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import SubNav from "../components/SubNav"

export default function MainLayout () {
    return(
        <>
        <NavBar/>
        <SubNav/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
    )
}