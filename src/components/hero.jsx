import atletasDisputa from "../assets/atletas_disputa.png"
import trofeu from "../assets/trofeuPassaBola.jpg"
import staff from "../assets/staffPassaBola.PNG"
import equipe from "../assets/equipePassaBola.png"
import Logo from "../assets/logo-passa-a-bola.png";
import { Link } from "react-router-dom"
import Postagens from "../pages/Postagens";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
    return (
        <div className="grid grid-cols-2 h-780 lg:h-660 w-full">
            <div className="row-span-1 flex col-span-2 w-full justify-center lg:w-auto lg:hidden lg:h-120 h-50 bg-[#3C1A6E]">
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
                    <Link to="/cadastrar" className="font-bold text-center bg-[#EE4D9A] border-2 p-3  w-50
                    hover:translate-x-7 text-white transition-all duration-400">Inscreva seu time</Link>
                    <HashLink smooth to="/PB-NS/copa#copa" className="text-[12px] font-bold text-center bg-[#3C1A6E] border-2 p-3  w-50
                     text-white transition-all hover:translate-x-7 duration-400">Ver programação da COPA PB </HashLink>
                </div>
            </div>
            <div className="lg:flex justify-center items-start pt-10 hidden ">
                <div >
                    <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-130" />
                </div>
            </div>

            {/* Segunda Seção */}
            <div className="flex flex-col lg:gap-6 justify-center items-center lg:items-center flex-wrap bg-[#3C1A6E] col-span-2 pt-3">
                <div className="flex justify-center items-center w-full flex-col mb-5">
                    <h2 className="block text-white font-bold text-[22px] lg:text-[40px] leading-none mb-3 w-120 lg:w-full text-center">Por que o Passa a Bola?</h2>
                    <h2 className="block text-white font-bold text-[12px] lg:text-[18px] leading-none w-70 lg:w-120 text-center">O campeonato amador que apresenta uma solução para cada dificuldade do Futebol Feminino</h2>
                </div>

                {/* Faixa 1 */}
                <div className="grid grid-cols-10 bg-white p-5 justify-center items-center w-90 lg:w-auto mb-5">
                    <div className="h-full col-span-3 hidden lg:block">
                        <img src={equipe} alt="equipe da primeira edição da Copa Passa Bola" className="hidden lg:block w-70" />
                    </div>
                    <div className="col-span-10 lg:col-span-7 flex justify-center flex-col items-center w-90 lg:w-auto">
                        <p className="">Falta de oportunidades...</p>
                        <Link to="/cadastrar" className="block text-center text-[#EE4D9A] font-bold text-[18px] lg:text-[40px] leading-none">→ Plataforma de inscrição simples.</Link>
                    </div>
                </div>

                {/* Faixa 2 */}
                <div className="grid grid-cols-10 bg-white p-5 justify-center items-center w-90 lg:w-auto mb-5">
                    <div className="h-full col-span-3 hidden lg:block">
                        <img src={staff} alt="equipe da primeira edição da Copa Passa Bola" className="hidden lg:block w-70" />
                    </div>
                    <div className="col-span-10 lg:col-span-7 flex justify-center flex-col items-center">
                        <p className="">Pouca Visibilidade...</p>
                        <HashLink smooth to="/PB-NS/copa#destaques" className="text-center text-[#EE4D9A] font-bold text-[20px] lg:text-[40px] leading-none">→ Cobertura, vitrine de atletas.</HashLink>
                    </div>
                </div>

                <div className="sm:flex lg:hidden">
                        <img src={trofeu} alt="equipe da primeira edição da Copa Passa Bola" className="hidden lg:block w-70" />
                    </div>


                {/* FAIXA 3 */}
                <div className="grid grid-cols-10 bg-white p-5 justify-center items-center w-90 lg:w-auto mb-1">
                    <div className="col-span-3 hidden lg:block">
                        <img src={trofeu} alt="equipe da primeira edição da Copa Passa Bola" className="hidden lg:block w-70" />
                    </div>
                    <div className="col-span-10 lg:col-span-7 flex justify-center flex-col items-center">
                        <p className="">Falta de informações...</p>
                        <HashLink smooth to="copa/tabela#tabela" className="block text-center text-[#EE4D9A] font-bold text-[20px] lg:text-[38px] leading-none">→ Chave visual + Tabela Atualizada.</HashLink>
                    </div>
                </div>
            </div>

            {/* Terceira Seção */}
            <div className="col-span-2 flex items-center">
            <Postagens/>
            </div>
        </div>

    )
}