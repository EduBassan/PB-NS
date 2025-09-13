import SaoPaulo from "../assets/logo-sao-paulo-4096.png"
import BotaFogo from "../assets/logo-botafogo-4096.png"
import Corinthians from "../assets/logo-corinthians-4096.png"
import Flamengo from "../assets/logo-flamengo-4096.png"
import Gremio from "../assets/logo-gremio-4096.png"
import Palmeiras from "../assets/logo-palmeiras-4096.png"

export default function CardJogos(){

    return  (
        <div>
             <div className="lg:flex flex-row hidden justify-center items-center pb-20">
                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-150 h-70 mx-auto mr-5 ml-5">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-20" />
                        <span className="text-5xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-20" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>

                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-150 h-70 mx-auto mr-5 ml-5">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-20" />
                        <span className="text-5xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-20" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>

                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-150 h-70 mx-auto mr-5 ml-5">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-20" />
                        <span className="text-5xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-20" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>
            </div>

            
        {/* Tamanho SM */}
        <div className="flex flex-col sm:hidden justify-center items-center pb-10">
                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-100 h-70 mx-auto mb-10">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-20" />
                        <span className="text-5xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-20" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>

                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-100 h-70 mx-auto mb-10">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-20" />
                        <span className="text-5xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-20" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>

                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-100 h-70 mx-auto mb-10">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-20" />
                        <span className="text-5xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-20" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>
            </div>

        {/* Tamanho MD */}
        <div className="hidden md:flex lg:hidden justify-center items-center pb-10">
                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-70 h-70 mx-auto mb-10 mr-5 ml-5">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-15" />
                        <span className="text-3xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-15" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>

                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-70 h-70 mx-auto mb-10 mr-5 ml-5">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-15" />
                        <span className="text-3xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-15" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>

                <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 w-70 h-70 mx-auto mb-10 mr-5 ml-5">
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={SaoPaulo} alt="Time1" className="w-15" />
                        <span className="text-3xl font-bold">VS</span>
                        <img src={BotaFogo} alt="Time2" className="w-15" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>
            </div>

    
    </div>
    );
}