import SaoPaulo from "../assets/logo-sao-paulo-4096.png"
import BotaFogo from "../assets/logo-botafogo-4096.png"
import Corinthians from "../assets/logo-corinthians-4096.png"
import Logo from "../assets/logo-passa-a-bola.png";
import Adidas from "../assets/adidas.png";
import { Link } from "react-router-dom"
import { times } from "../js/times.js";

export default function Tabela () {
    const timeGanhador = times.find((t) => t.id === 1); 
    const timeSegundo = times.find((t) => t.id === 2);
    const timeTerceiro = times.find((t) => t.id === 3);
    return (
        <div>
            <div className="flex flex-row justify-center p-20 md:flex-row">
                <div>
                <span className="font-semibold text-4xl">TABELA</span>
            <div className="bg-[#EE4D9A] text-white shadow-lg p-10 w-200">
                <table className="table-auto w-full text-left border-collapse">
                    <thead className="uppercase text-gray-300">
                      <tr>
                        <th className="px-4 py-2">POS</th>
                        <th className="px-4 py-2">TIME</th>
                        <th className="px-4 py-2">J</th>
                        <th className="px-4 py-2 text-[#3C1A6E]">P</th>
                        <th className="px-4 py-2">V</th>
                        <th className="px-4 py-2">E</th>
                        <th className="px-4 py-2">D</th>
                      </tr>
                    </thead>
                    <tbody>
                          {times.map((time, index) => (
                            <tr key={time.id} className="border-t border-white/30">
                              <td className="px-4 py-2">{time.id}</td>
                              <td className="px-4 py-2">{time.nome}</td>
                              <td className="px-4 py-2">7</td>
                              <td className="px-4 py-2">21</td>
                              <td className="px-4 py-2">7</td>
                              <td className="px-4 py-2">0</td>
                              <td className="px-4 py-2">0</td>
                            </tr>
                          ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-[#FFC3E0] h-30 flex items-center justify-between p-15">
                <span>Patrocinadores do campeonato:</span>
                <img src={Logo} alt="PB" className="w-17" />
                <span>Passa a Bola</span>
                <img src={Adidas} alt="PB" className="w-17" />
                <span>Adidas</span>
            </div>
            </div>
                <div className="flex flex-col items-start justify-center">
                  <div className="text-5xl font-semibold italic p-10 pb-0">
                    <h1>MELHORES</h1>
                  </div>
                  <div className="text-3xl font-semibold italic p-10 pt-0">
                    <h1>times</h1>
                  </div>


                  <div className="bg-[#3C1A6E] text-white shadow-lg p-6 w-150 h-50 mx-auto ml-10 flex items-end justify-center mb-15">
                    <div className="text-9xl font-bold italic">21</div>
                    <div className="text-xl italic">Pts</div>
                    <img src={timeGanhador.foto} alt="TimeCampeao" className="w-60 ml-25" />
                  </div>
                  
                  <div className="bg-[#3C1A6E] text-white shadow-lg p-6 w-150 h-50 mx-auto ml-10 flex items-end justify-start mb-15">
                    <img src={BotaFogo} alt="TimeCampeao" className="w-60 mr-25" />
                    <div className="text-9xl font-bold italic">18</div>
                    <div className="text-xl italic">Pts</div>
                  </div>

                  <div className="bg-[#3C1A6E] text-white shadow-lg p-6 w-150 h-50 mx-auto ml-10 flex items-end justify-center mb-15">
                    <div className="text-9xl font-bold italic">21</div>
                    <div className="text-xl italic">Pts</div>
                    <img src={Corinthians} alt="TimeCampeao" className="w-60 ml-25" />
                  </div>

                </div>
            </div>

            <div>
                 <div className="flex flex-col justify-center items-center gap-5 mb-20">
                    <Link to="/copa/chaveamento" className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] w-50 hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
                    Chaveamento
                    </Link>
                    <Link to="/copa" className="flex justify-center border-2 border-[#EE4D9A] bg-white text-xl p-3 px-10 text-black hover:border-[#3C1A6E] w-50 hover:bg-[#EE4D9A] hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
                    Voltar
                    </Link>
                </div>
            </div>
        </div>
    )
    
}