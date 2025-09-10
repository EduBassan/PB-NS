import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo-passa-a-bola.png";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-5 ml-10 mr-10">
            <div className="flex justify-between items-center">
                <div className="flex flex-row items-center gap-18">
                    <div className="hidden lg:flex items-center gap-10">
                        <img src={Logo} alt="Logo-passa-a-bola" className="w-16" />
                    </div>
                    <div className="hidden lg:flex items-center gap-20">
                        <Link to="/"className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Passa a bola</Link>
                        <Link to="/Copa" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Copa PB</Link>
                        <Link to="/Inscricao" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Inscreva-se</Link>
                        <Link to="/Apoiadores" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Apoiadores</Link>
                    </div>
                </div>
                
                <div className="flex flex-row items-center gap-5">
                    <div className="hidden lg:flex ">
                        <Link to="/Login" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Login</Link>
                    </div>
                    
                    <button className="hidden lg:flex border-[2.5px] border-[#3C1A6E] p-2 pl-10 pr-10 hover:border-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white transition-all duration-400">
                        <Link to="/Inscricao">Quero Jogar</Link>
                    </button>
                </div>

                <div className="lg:hidden hidden md:flex w-screen justify-between content-center items-center gap-30">
                    <div>
                        <img src={Logo} alt="Logo-Passa-a-bola" className="w-13" />
                    </div>
                    <div>
                        <button className="lg:hidden border-[2.5px] border-[#3C1A6E] p-2 pl-15 pr-15 hover:border-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white transition-all duration-400">
                            <Link to="/Inscricao">Quero Jogar</Link>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>

                <div className="md:hidden flex w-screen justify-center content-center items-center gap-10">
                    <div>
                        <img src={Logo} alt="Logo-Passa-a-bola" className="w-13" />
                    </div>
                    <div>
                        <button className="md:hidden border-[2.5px] border-[#3C1A6E] p-2 pl-3.2 pr-3.2 hover:border-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white transition-all duration-400">
                            <Link to="/Inscricao">Quero Jogar</Link>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="flex flex-col items-center mt-4 gap-4 lg:hidden">
                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Passa a bola</Link>
                    <Link to="/Copa" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Copa PB</Link>
                    <Link to="/Inscricao" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Inscreva-se</Link>
                    <Link to="/Apoiadores" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Apoiadores</Link>
                    <Link to="/Login" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Login</Link>
                </div>
            )}
        </nav>
  );
}
