import Flamengo from "../assets/logo-flamengo-4096.png"
import BotaFogo from "../assets/logo-botafogo-4096.png"

export function EstatisticasVideo() {
    return (
        <div className="flex justify-center ">
            <div className="bg-[#3C1A6E] text-white rounded-xl shadow-lg p-6 flex items-center justify-center gap-4 w-220 mb-10">
                <img src={Flamengo} alt="Flamengo" className="w-20"/>
                <span className="text-5xl font-extrabold">0 x 1</span>
                <span className="text-5xl font-extrabold">|</span>
                <span className="text-5xl font-extrabold">44 min</span>
                <img src={BotaFogo} alt="Botafogo" className="w-20"/>
            </div>
        </div>
    );
}
