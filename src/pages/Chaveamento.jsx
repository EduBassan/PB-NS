import PbEscrita from "../assets/Pb-escrita.png"
import SaoPaulo from "../assets/logo-sao-paulo-4096.png"
import BotaFogo from "../assets/logo-botafogo-4096.png"
import Corinthians from "../assets/logo-corinthians-4096.png"
import Flamengo from "../assets/logo-flamengo-4096.png"
import { Link } from "react-router-dom"
import { carregarTimes } from "../js/storage.js";
import { times } from "../js/times.js";
import Placeholder from "../assets/placeholder.png"
import Grama from "../assets/grama.png"

export default function Chaveamento() {
  const time = carregarTimes()
  const top8 = time.slice(0,8)

  const Top8Embaralhados = top8.sort(() => Math.random() - 0.5);

  const time1 = Top8Embaralhados[0]
  const time2 = Top8Embaralhados[1]
  const time3 = Top8Embaralhados[2]
  const time4 = Top8Embaralhados[3]
  const time5 = Top8Embaralhados[4]
  const time6 = Top8Embaralhados[5]
  const time7 = Top8Embaralhados[6]
  const time8 = Top8Embaralhados[7]

  return (
    <div>
        <div className="flex flex-row justify-center p-20 pb-5">
                <div>
                    <span className="font-bold text-4xl">Chaveamento</span>
                </div>
        </div>

        <div className="flex justify-center items-center mb-15">
          <div className="bg-gradient-to-b from-[#3C1A6E] to-purple-600 w-[1000px] text-white flex flex-col items-center  rounded-2xl">

            <span className="font-semibold text-4xl">QUARTAS DE FINAL</span>
            <div className="flex items-center mt-2">
              <span className="text-2xl">Copa</span>
              <img src={PbEscrita} alt="PassaBola" className="w-20" />
            </div>

            <div className="grid grid-cols-5 gap-12 mt-10 w-full p-10">

              <div className="flex flex-col justify-between space-y-20">
                <img src={time1?.foto || Placeholder} className="w-16 h-16 rounded-xl border-[#3C1A6E] border-2" />
                <img src={time2?.foto || Placeholder} className="w-16 h-16 rounded-xl border-[#3C1A6E] border-2" />
                <img src={time3?.foto || Placeholder} className="w-16 h-16 rounded-xl border-[#3C1A6E] border-2" />
                <img src={time4?.foto || Placeholder} className="w-16 h-16 rounded-xl border-[#3C1A6E] border-2" />
              </div>

              <div className="flex flex-col justify-around space-y-20">
                <img src={Placeholder} className="w-20 h-20 rounded-xl border-[#3C1A6E] border-2" />
                <img src={Placeholder} className="w-20 h-20 rounded-xl border-[#3C1A6E] border-2" />
              </div>

              <div className="flex justify-center ">
                  <div className="bg-[#3C1A6E] text-white rounded-xl border-[#3C1A6E] border-2 shadow-lg px-6 py-10 flex flex-col items-center justify-center gap-6">
                    <img src={Placeholder} alt="Flamengo" className="w-25 rounded-xl" />
                    <span className="text-5xl font-extrabold">X</span>
                    <img src={Placeholder} alt="Botafogo" className="w-25 rounded-xl" />
                  </div>
                </div>

              <div className="flex flex-col justify-around space-y-20 items-end">
                <img src={Placeholder} className="w-20 h-20 rounded-xl border-[#3C1A6E] border-2" />
                <img src={Placeholder} className="w-20 h-20 rounded-xl border-[#3C1A6E] border-2" />
              </div>

              <div className="flex flex-col justify-between space-y-20 items-end">
                <img src={time5?.foto || Placeholder} className="w-16 h-16 rounded-xl border-[#3C1A6E] border-2" />
                <img src={time6?.foto || Placeholder} className="w-16 h-16 rounded-xl border-[#3C1A6E] border-2" />
                <img src={time7?.foto || Placeholder} className="w-16 h-16 rounded-xl border-[#3C1A6E] border-2" />
                <img src={time8?.foto || Placeholder} className="w-16 h-16 rounded-xl border-[#3C1A6E] border-2" />
              </div>
            </div>
            <img src={Grama} alt="Grama" className="rounded-b-lg" />
          </div>
        </div>
        <div>
                 <div className="flex flex-col justify-center items-center gap-5 mb-20">
                    <Link to="/copa/tabela" className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] w-50 hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
                    Chaveamento
                    </Link>
                    <Link to="/copa" className="flex justify-center border-2 border-[#EE4D9A] bg-white text-xl p-3 px-10 text-black hover:border-[#3C1A6E] w-50 hover:bg-[#EE4D9A] hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
                    Voltar
                    </Link>
                </div>
            </div>

    </div>
  );
}
