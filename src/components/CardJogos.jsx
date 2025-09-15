import SaoPaulo from "../assets/logo-sao-paulo-4096.png"
import Corinthians from "../assets/corinthiansLogo.png"
import Palmeiras from "../assets/logo-palmeiras-4096.png"
import Cruzeiro from "../assets/cruzeiroLogo.png"

export default function CardJogos(){

    return  (
        <div>
             <div className="lg:flex flex-row hidden justify-center items-center">
                <div className="bg-[#3C1A6E] text-white shadow-lg p-6 w-150 h-70 mx-auto mr-5 ml-5">
                    <div className="flex justify-between items-center text-sm font-bold">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={Corinthians} alt="Time1" className="w-20" />
                        <span className="text-5xl font-bold">VS</span>
                        <img src={SaoPaulo} alt="Time2" className="w-20" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>

                <div className="bg-[#3C1A6E] text-white shadow-lg p-6 w-150 h-70 mx-auto">
                    <div className="flex justify-between items-center text-sm font-bold">
                        <span className="border-b border-white text-2xl">Time1</span>
                        <span className="border-b border-white text-2xl">Time2</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={Cruzeiro} alt="Time1" className="w-20" />
                        <span className="text-5xl font-bold">VS</span>
                        <img src={Palmeiras} alt="Time2" className="w-20" />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <span className="text-6xl font-extrabold">0 x 0</span>
                    </div>
                </div>
            </div>
    </div>
    );
}