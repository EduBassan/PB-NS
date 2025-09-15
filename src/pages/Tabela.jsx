import Corinthians from "../assets/corinthiansLogo.png"
import Logo from "../assets/logo-passa-a-bola.png";
import Adidas from "../assets/adidas.png";
import { Link } from "react-router-dom";
import { carregarTimes } from "../js/storage.js";
import { times } from "../js/times.js";
 
export default function Tabela() {
const time = carregarTimes()
const pegar3Melhores = time.slice(0,3)
const PrimeiroLugar = pegar3Melhores[0]
const SegundoLugar = pegar3Melhores[1]
const TerceiroLugar = pegar3Melhores[2]

  return (
    <div className="px-4 sm:px-6 md:px-20 m-10">
      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <div className="flex-1">
          <span className="text-4xl sm:text-5xl font-semibold italic text-center lg:text-left">TABELA</span>
          <div className="bg-[#EE4D9A] text-white shadow-lg p-6 sm:p-10 mt-4 w-full overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="uppercase text-gray-300">
                <tr>
                  <th className="px-2 sm:px-4 py-2">POS</th>
                  <th className="px-2 sm:px-4 py-2">TIME</th>
                  <th className="px-2 sm:px-4 py-2">J</th>
                  <th className="px-2 sm:px-4 py-2 text-[#3C1A6E]">P</th>
                  <th className="px-2 sm:px-4 py-2">V</th>
                  <th className="px-2 sm:px-4 py-2">E</th>
                  <th className="px-2 sm:px-4 py-2">D</th>
                </tr>
              </thead>
              <tbody>
                {time.map((times) => (
                  <tr key={times.id} className="border-t border-white/30">
                    <td className="px-2 sm:px-4 py-2">{times.id}</td>
                    <td className="px-2 sm:px-4 py-2">{times.nome}</td>
                    <td className="px-2 sm:px-4 py-2">7</td>
                    <td className="px-2 sm:px-4 py-2">21</td>
                    <td className="px-2 sm:px-4 py-2">7</td>
                    <td className="px-2 sm:px-4 py-2">0</td>
                    <td className="px-2 sm:px-4 py-2">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
 
          <div className="bg-[#FFC3E0] h-auto flex flex-wrap items-center justify-around p-4 sm:p-6 mt-4 gap-2">
            <span className="text-sm sm:text-base">Patrocinadores do campeonato:</span>
            <div className="flex items-center gap-2">
              <img src={Logo} alt="PB" className="w-12 sm:w-16" />
              <span className="text-sm sm:text-base">Passa a Bola</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={Adidas} alt="Adidas" className="w-12 sm:w-16" />
              <span className="text-sm sm:text-base">Adidas</span>
            </div>
          </div>
        </div>
 
        <div className="flex-1 flex flex-col items-center lg:items-start gap-6">
          <div className="text-4xl sm:text-5xl font-semibold italic text-center lg:text-left">
            MELHORES
          </div>
          <div className="text-2xl sm:text-3xl font-semibold italic text-center lg:text-left">
            times
          </div>
 
          <div className="flex flex-col gap-4 w-full">
            <div className="bg-[#3C1A6E] text-white shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:max-w-150">
              <div className="text-5xl sm:text-9xl font-bold italic">{PrimeiroLugar?.pontos || 21}</div>
              <div className="text-xl italic">Pts</div>
              <img src={PrimeiroLugar?.foto || "Time não disponível"} alt={PrimeiroLugar?.nome  || "Time não disponível"} className="w-32 sm:w-60" />
            </div>
 
            <div className="bg-[#3C1A6E] text-white shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:max-w-150">
              <img src={SegundoLugar?.foto} alt={SegundoLugar?.nome  || "Time não disponível"} className="w-32 sm:w-60" />
              <div className="text-5xl sm:text-9xl font-bold italic">{SegundoLugar?.pontos || 21}</div>
              <div className="text-xl italic">Pts</div>
            </div>
 
            <div className="bg-[#3C1A6E] text-white shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:max-w-150">
              <div className="text-5xl sm:text-9xl font-bold italic">{SegundoLugar?.pontos || 21}</div>
              <div className="text-xl italic">Pts</div>
              <img src={TerceiroLugar?.foto  || "Time não disponível"} alt={TerceiroLugar?.nome  || "Time não disponível"} className="w-32 sm:w-60" />
            </div>
          </div>
        </div>
      </div>
 
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 m-10">
        <Link
          to="/copa/chaveamento"
          className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] w-full sm:w-auto hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300 text-center"
        >
          Chaveamento
        </Link>
        <Link
          to="/copa"
          className="border-2 border-[#EE4D9A] bg-white text-xl p-3 px-10 text-black hover:border-[#3C1A6E] w-full sm:w-auto hover:bg-[#EE4D9A] hover:text-[#3C1A6E] hover:transition-all hover:duration-300 text-center"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
 