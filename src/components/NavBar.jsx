import { Link } from "react-router-dom"
import Logo from '../assets/logo-passa-a-bola.png'

export default function NavBar () {
    return(
        <div className="flex flex-row justify-between p-5 ml-10 mr-10">

            <div className="flex flex-row justify-between gap-10">

                <img src={Logo} alt="Logo-passa-a-bola" className="w-15" />

                <div className="flex flex-row gap-15 justify-center items-center">
                    <Link to="/" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Passa a bola</Link>
                    <Link to="/Copa" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Copa PB</Link>
                    <Link to="/Inscricao" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Inscreva-se</Link>
                    <Link to="/Apoiadores" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Apoiadores</Link>
                </div>

            </div>

            <div className="flex flex-row justify-center items-center gap-5">
                <Link to="/login" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Login</Link>
                <button className="border-[2.5px] border-[#3C1A6E] p-2 pl-10 pr-10 hover:border-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white transition-all duration-400"><Link to="inscricao">Quero Jogar</Link></button>
            </div>
        </div>
    )
    
}