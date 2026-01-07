import atletasDisputa from "../assets/atletas_disputa.png"
import trofeu from "../assets/trofeuPassaBola.jpg"
import staff from "../assets/staffPassaBola.png"
import equipe from "../assets/equipePassaBola.png"
import Logo from "../assets/logo-passa-a-bola.png";
import { Link } from "react-router-dom"
import Postagens from "../pages/Postagens";
import { HashLink } from "react-router-hash-link";
import VideosDestaque from "./VideosDestaque";

export default function Hero() {
    return (
        <div className="grid grid-cols-2 h-auto w-full">
            <div className="row-span-1 flex col-span-2 w-full justify-center lg:w-auto lg:hidden bg-[#3C1A6E]">
                <div >
                    <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-full" />
                </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex justify-center items-center lg:items-start pt-20 flex-wrap">

                <div className="flex items-center lg:items-start flex-col lg:pl-40">
                    <div className="block mb-2">
                        <img src={Logo} alt="logo-passa-a-bola" className="w-20" />
                    </div>

                    <h4 className="leading-none">Futebol de verdade</h4>

                    <p className="block text-[#EE4D9A] font-bold text-[30px] lg:text-[50px] leading-none mb-3 -translate-x-[3.5px]">FEITO POR ELAS</p>

                    <h3 className="font-bold  mb-3  text-[13px] lg:text-[16px] w-70 lg:w-110 text-center lg:text-left">Passa a Bola conecta meninas, times e comunidades para criar campeonatos acessíveis, divertidos e profissionais.</h3>
                    <Link to="/cadastrar" className="font-bold text-center bg-[#EE4D9A] p-3  w-50
                    hover:translate-x-7 text-white transition-all duration-400">Inscreva seu time</Link>
                    <HashLink smooth to="/copa#copa" className="text-[12px] font-bold text-center bg-[#3C1A6E] p-3  w-50
                     text-white transition-all hover:translate-x-7 duration-400">Ver programação da COPA PB </HashLink>
                </div>
            </div>
            <div className="lg:flex justify-center items-start pt-10 hidden ">
                <div >
                    <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-130" />
                </div>
            </div>
            <div className="col-span-2">
            <VideosDestaque/>
            </div>
        </div>

    )
}