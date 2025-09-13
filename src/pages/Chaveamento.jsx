import PbEscrita from "../assets/Pb-escrita.png"
import SaoPaulo from "../assets/logo-sao-paulo-4096.png"
import BotaFogo from "../assets/logo-botafogo-4096.png"
import Corinthians from "../assets/logo-corinthians-4096.png"
import Flamengo from "../assets/logo-flamengo-4096.png"
import { Link } from "react-router-dom"

export default function Chaveamento() {
  return (
    <div>
        <div className="flex flex-row justify-center p-20 pb-5">
                <div>
                    <span className="font-bold text-4xl">Chaveamento</span>
                </div>
        </div>

        <div className="flex justify-center items-center mb-15">
  <div className="bg-gradient-to-b from-[#3C1A6E] to-purple-600 w-[1000px] text-white flex flex-col items-center p-10 rounded-2xl">

            <span className="font-semibold text-4xl">QUARTAS DE FINAL</span>
            <div className="flex items-center mt-2">
              <span className="text-2xl">Copa</span>
              <img src={PbEscrita} alt="PassaBola" className="w-20" />
            </div>

            <div className="grid grid-cols-5 gap-12 mt-10 w-full">

              <div className="flex flex-col justify-between space-y-20">
                <img src={SaoPaulo} className="w-16 h-16" />
                <img src={BotaFogo} className="w-16 h-16" />
                <img src={Corinthians} className="w-16 h-16" />
                <img src={Flamengo} className="w-16 h-16" />
              </div>

              <div className="flex flex-col justify-around space-y-40">
                <img src={SaoPaulo} className="w-16 h-16" />
                <img src={BotaFogo} className="w-16 h-16" />
              </div>

              <div className="flex justify-center ">
                  <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg px-6 py-20 flex flex-col items-center justify-between">
                    <img src={Flamengo} alt="Flamengo" className="w-20" />
                    <span className="text-5xl font-extrabold">X</span>
                    <img src={BotaFogo} alt="Botafogo" className="w-20" />
                  </div>
                </div>

              <div className="flex flex-col justify-around space-y-40 items-end">
                <img src={SaoPaulo} className="w-16 h-16" />
                <img src={BotaFogo} className="w-16 h-16" />
              </div>

              <div className="flex flex-col justify-between space-y-20 items-end">
                <img src={SaoPaulo} className="w-16 h-16" />
                <img src={BotaFogo} className="w-16 h-16" />
                <img src={Corinthians} className="w-16 h-16" />
                <img src={Flamengo} className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>

         <div className="flex lg:hidden flex-col justify-center items-center gap-5 mb-20">
            <Link to="/copa/tabela" className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] w-50 hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
            Chaveamento
            </Link>
            <Link to="/copa" className="flex justify-center border-2 border-[#EE4D9A] bg-white text-xl p-3 px-10 text-black hover:border-[#3C1A6E] w-50 hover:bg-[#EE4D9A] hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
            Voltar
            </Link>
        </div>  

         <div className="hidden lg:flex flex-row justify-center items-center gap-5 mb-20">
            <Link to="/copa/tabela" className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] w-50 hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
            Chaveamento
            </Link>
            <Link to="/copa" className="flex justify-center border-2 border-[#EE4D9A] bg-white text-xl p-3 px-10 text-black hover:border-[#3C1A6E] w-50 hover:bg-[#EE4D9A] hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
            Voltar
            </Link>
        </div>

    </div>
  );
}
