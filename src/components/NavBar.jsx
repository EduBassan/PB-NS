import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo-passa-a-bola.png";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    const sair = () => {
        localStorage.removeItem("usuarioLogado");
        navigate("/PB-NS");
    };
    

    return (
        <nav className="p-5 ml-10 mr-10">
            <div className="flex justify-between items-center">
                <div className="flex flex-row items-center gap-13">
                    <div className="hidden lg:flex items-center gap-10">
                        <img src={Logo} alt="Logo-passa-a-bola" className="w-16" />
                    </div>
                    <div className="hidden lg:flex items-center gap-10">
                        <Link to="/PB-NS"className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Passa a bola</Link>
                        <Link to="/PB-NS/Copa" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Copa PB</Link>
                        {/* <Link to="/postagens" className="hover:text-xl hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Entrevistas</Link> */}
                    </div>
                </div>
                
                <div className="hidden lg:flex flex-row items-center gap-5">
                    {! usuarioLogado && (
                        <div className="flex flex-row gap-5 items-center">
                            <Link to="/cadastrar" 
                            className="hover:text-xl 
                            hover:text-[#EE4D9A] hover:font-bold transition-all ease-in-out duration-700">Inscreva-se</Link>
                            <Link to="/login"
                            className="border-2 border-[#3C1A6E] p-2 pr-10 pl-10
                            hover:border-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white transition-all duration-400">Entrar</Link>
                        </div>
                    )}
                    {usuarioLogado?.tipo === "jogadora" && (
                        <div className="flex flex-row items-center gap-2">
                            <img src={usuarioLogado.foto} alt="" className="w-7 h-7 rounded-full object-cover"/>
                            <span>Olá, <strong>{usuarioLogado.nome}</strong></span>
                            <button onClick={sair}
                            className="border-2 border-red-500 p-1 pr-7 pl-7
                            hover:bg-red-500 hover:text-white transition-all duration-400 cursor-pointer">sair</button>
                            <Link to="/PB-NS/dashboard/jogadora" 
                            className="border-2 border-[#3C1A6E] p-1 pr-8 pl-8
                            hover:border-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white transition-all duration-400">Minha página</Link>
                        </div>
                    )}
                    {usuarioLogado?.tipo === "time" && (
                        <div className="flex flex-row items-center gap-2">
                            <img src={usuarioLogado.foto} alt="foto-do-time" className="w-7 h-7 rounded-full object-cover"/>
                            <span>Opaa, <strong>{usuarioLogado.nome}</strong></span>
                            <button onClick={sair}
                            className="border-2 border-red-500 p-1 pr-7 pl-7
                            hover:bg-red-500 hover:text-white transition-all duration-400 cursor-pointer">sair</button>
                            <Link to="/PB-NS/dashboard/clube"
                            className="border-2 border-[#3C1A6E] p-1 pr-8 pl-8
                            hover:border-[#EE4D9A] hover:bg-[#EE4D9A] hover:text-white transition-all duration-400">Minha página</Link>
                        </div>
                    )}
                </div>

                <div className="lg:hidden hidden md:flex w-screen justify-between content-center items-center gap-30">
                    <div>
                        <img src={Logo} alt="Logo-Passa-a-bola" className="w-13" />
                    </div>
                    <div>
                        {!usuarioLogado && (
                            <button className=" border-[2.5px] border-[#3C1A6E] p-2 pl-15 pr-15 hover:bg-[#3C1A6E] hover:transition-all hover:duration-500 hover:text-white ">
                                <Link to="/login">Entrar</Link>
                            </button>
                        )}
                        {usuarioLogado?.tipo === "jogadora" && (
                            <Link className=" border-[2.5px] border-red-500 p-2 pl-15 pr-15
                            hover:bg-red-500 hover:transition-all hover:duration-500 hover:text-white " onClick={sair}>Sair</Link>
                        )}
                        {usuarioLogado?.tipo === "time" && (
                            <Link className=" border-[2.5px] border-red-500 p-2 pl-15 pr-15
                            hover:bg-red-500 hover:transition-all hover:duration-500 hover:text-white " onClick={sair}>Sair</Link>
                        )}
                        
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>

                <div className="md:hidden flex w-screen justify-center content-center items-center gap-5">
                    <div>
                        <img src={Logo} alt="Logo-Passa-a-bola" className="w-13" />
                    </div>
                    <div>
                        {!usuarioLogado && (
                            <button className="md:hidden border-[2.5px] border-[#3C1A6E] p-2 pl-12 pr-12 ">
                                <Link to="/login">Entrar</Link>
                            </button>
                        )}
                        {usuarioLogado?.tipo === "jogadora" && (
                            <button className="md:hidden border-[2.5px] border-red-500 p-2 pl-12 pr-12 ">
                                <Link onClick={sair}>Sair</Link>
                            </button>
                        )}
                        {usuarioLogado?.tipo === "time" && (
                            <button className="md:hidden border-[2.5px] border-red-500 p-2 pl-12 pr-12 ">
                                <Link onClick={sair}>Sair</Link>
                            </button>
                        )}
                        
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div>
                    {!usuarioLogado && (
                    <div className="flex flex-col items-center mt-4 gap-4 lg:hidden">
                        <Link to="/PB-NS" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Passa a bola</Link>
                        <Link to="/PB-NS/copa" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Copa PB</Link>
                        {/* <Link to="/postagens" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Entrevistas</Link> */}
                        <Link to="/cadastrar" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Inscreva-se</Link>
                    </div>
                )}
                {usuarioLogado?.tipo === "jogadora" && (
                    <div className="flex flex-col items-center mt-4 gap-4 lg:hidden">
                        <Link to="/PB-NS" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Passa a bola</Link>
                        <Link to="/PB-NS/copa" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Copa PB</Link>
                        {/* <Link to="/postagens" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Entrevistas</Link> */}
                        <Link to="/PB-NS/dashboard/jogadora" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Minha página</Link>
                    </div>
                )}
                {usuarioLogado?.tipo === "time" && (
                    <div className="flex flex-col items-center mt-4 gap-4 lg:hidden">
                        <Link to="/PB-NS" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Passa a bola</Link>
                        <Link to="/PB-NS/copa" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Copa PB</Link>
                        {/* <Link to="/postagens" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Entrevistas</Link> */}
                        <Link to="/PB-NS/dashboard/clube" onClick={() => setIsOpen(false)} className="hover:text-[#EE4D9A] font-medium">Minha página</Link>
                    </div>
                )}
                </div>
                
                
            )}
        </nav>
  );
}
