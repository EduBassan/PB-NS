import atletasDisputa from "../assets/atletas_disputa.png"
import trofeu from "../assets/trofeuPassaBola.jpg"
import staff from "../assets/staffPassaBola.PNG"
import equipe from "../assets/equipePassaBola.png"
import Logo from "../assets/logo-passa-a-bola.png";
import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:col-span-1 lg:grid-cols-2 h-480">
            <div className="md:flex lg:hidden justify-center md:h-120 h-90 flex bg-[#3C1A6E]">
                <div >
                    <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap h-120">

                <div className="flex item-left flex-col pl-10 lg:pl-40">
                    <div className="block mb-2">
                        <img src={Logo} alt="logo-passa-a-bola" className="w-20" />
                    </div>

                    <h4 className="leading-none">Futebol de verdade</h4>

                    <p className="block text-[#EE4D9A] font-bold text-[50px] leading-none mb-3 -translate-x-[3.5px]">FEITO POR ELAS</p>

                    <h3 className="font-bold mb-3 w-70 lg:w-110">Passa a Bola conecta meninas, times e comunidades para criar campeonatos acessíveis, divertidos e profissionais.</h3>
                    <Link to="/cadastrar" className="font-bold text-center bg-[#EE4D9A] border-2 p-3  w-50
                    hover:translate-x-7 text-white transition-all duration-400">Inscreva seu time</Link>
                    <Link to="/copa" className="text-[12px] font-bold text-center bg-[#3C1A6E] border-2 p-3  w-50
                     text-white transition-all hover:translate-x-7 duration-400">Ver programação da COPA PB </Link>
                </div>
            </div>
            <div className="lg:flex justify-center pt-5 h-120 hidden ">
                <div >
                    <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-130" />
                </div>
            </div>

            {/* Segunda Seção */}
            <div className="flex justify-center items-start lg:items-center flex-wrap h-200 lg:h-300 bg-[#3C1A6E] col-span-1 lg:col-span-2 pt-3">
                <div className="flex justify-center items-center w-full flex-col">
                    <h2 className="block text-white font-bold text-[22px] lg:text-[40px] leading-none mb-3 w-120 lg:w-full text-center">Por que o Passa a Bola?</h2>
                    <h2 className="block text-white font-bold text-[12px] lg:text-[18px] leading-none w-120 text-center">O campeonato amador que apresenta uma solução para cada dificuldade do Futebol Feminino</h2>
                </div>

                {/* Faixa 1 */}
                <div className="grid grid-cols-10 bg-white p-5 justify-center items-center">
                    <div className="h-full col-span-3 hidden lg:block">
                        <img src={equipe} alt="equipe da primeira edição da Copa Passa Bola" className="hidden lg:block w-70" />
                    </div>
                    <div className="col-span-10 lg:col-span-7 flex justify-center flex-col items-center w-90 lg:w-auto">
                        <p className="">Falta de oportunidades...</p>
                        <h2 className="block text-center text-[#EE4D9A] font-bold text-[20px] lg:text-[40px] leading-none">→ Plataforma de inscrição simples.</h2>
                    </div>
                </div>

                {/* Faixa 2 */}
                <div className="grid grid-cols-10 bg-white p-5 justify-center items-center w-90 lg:w-auto">
                    <div className="h-full col-span-3 hidden lg:block">
                        <img src={staff} alt="equipe da primeira edição da Copa Passa Bola" className="hidden lg:block w-70" />
                    </div>
                    <div className="col-span-10 lg:col-span-7 flex justify-center flex-col items-center">
                        <p className="">Pouca Visibilidade...</p>
                        <h2 className="block text-center text-[#EE4D9A] font-bold text-[20px] lg:text-[40px] leading-none">→ Cobertura, vitrine de atletas.</h2>
                    </div>
                </div>

                <div className="sm:flex lg:hidden">
                        <img src={trofeu} alt="equipe da primeira edição da Copa Passa Bola" className="hidden lg:block w-70" />
                    </div>


                {/* FAIXA 3 */}
                <div className="grid grid-cols-10 bg-white p-5 justify-center items-center w-90 lg:w-auto">
                    <div className="col-span-3 hidden lg:block">
                        <img src={trofeu} alt="equipe da primeira edição da Copa Passa Bola" className="hidden lg:block w-70" />
                    </div>
                    <div className="col-span-10 lg:col-span-7 flex justify-center flex-col items-center">
                        <p className="">Falta de informações...</p>
                        <h2 className="block text-center text-[#EE4D9A] font-bold text-[20px] lg:text-[40px] leading-none">→ Chave visual + Tabela Atualizada.</h2>
                    </div>
                </div>
            </div>

            {/* Terceira Seção */}
        </div>

    )
}