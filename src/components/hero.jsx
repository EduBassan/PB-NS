import atletasDisputa from "../assets/atletas_disputa.png"
import Logo from "../assets/logo-passa-a-bola.png";
import { Link } from "react-router-dom"


export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-300">
            <div className="flex justify-center items-center flex-wrap h-120">

                <div className="flex item-left flex-col flex pl-10 md:pl-40">


                    <div className="block mb-2">
                        <img src={Logo} alt="logo-passa-a-bola" className="w-20" />
                    </div>

                    <h4 className="leading-none">Futebol de verdade</h4>

                    <p className="block text-[#EE4D9A] font-bold text-[50px] leading-none mb-3 -translate-x-[3.5px]">FEITO POR ELAS</p>

                    <h3 className="font-bold mb-3">Passa a Bola conecta meninas, times e comunidades para criar campeonatos acessíveis, divertidos e profissionais.</h3>
                    <Link to="/cadastrar" className="font-bold text-center bg-[#EE4D9A] border-2 p-3  w-50
                           hover:translate-x-7 text-white transition-all duration-400">Inscreva seu time</Link>
                    <Link to="/copa" className="text-[12px] font-bold text-center bg-[#3C1A6E] border-2 p-3  w-50
                            text-white transition-all hover:translate-x-7 duration-400">Ver programação da COPA PB </Link>

                </div>
            </div>
            <div className="md:flex justify-center pt-5 h-120 hidden ">
                <div >
                    <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-100 pt-8" />
                </div>
            </div>



            <div className="flex justify-center items-center flex-wrap h-100 bg-[#3C1A6E] col-span-2">
                <h2 className="inline-block text-white font-bold text-[50px] leading-none mb-3 -translate-x-[3.5px] w-full text-center">Por que o Passa a Bola?</h2>
                <div className="grid grid-cols-2 bg-white p-10 justify-center items-center">
                    <div className="h-full">
                        <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-40" />
                    </div>
                    <div>
                        <p className="">Falta de oportunidade...</p>
                        <h2 className="">→ Plataforma de inscrição simples.</h2>
                    </div>
                </div>
            </div>
        </div>


    )
}