import SaoPaulo from "../assets/logo-sao-paulo-4096.png"
import Corinthians from "../assets/corinthiansLogo.png"
import Palmeiras from "../assets/logo-palmeiras-4096.png"
import Cruzeiro from "../assets/cruzeiroLogo.png"
import Botafogo from "../assets/logo-botafogo-4096.png"
import Flamengo from "../assets/logo-flamengo-4096.png"

export default function CardJogos(){

    return  (
        <div className="flex justify-center items-center mt-3">
            <div className="flex flex-col gap-15 justify-center items-center">
                <div className="
                bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] 
                shadow-[0_0_50px_-3px_rgba(238,77,154,0.5)]
                 text-white  pt-1 pl-4 pr-4 w-90 md:w-150 h-auto mx-auto
                 hover:outline-4 outline-[#EE4D9A]
                 
                 ">
  
                    <div className="flex justify-between items-center text-xl md:text-4xl">
                        <p className="">COR</p><img src={Corinthians} alt="Time1" className="w-15 md:w-26" /><p className="">1</p>
                        <span className=" font-bold">VS</span>
                        <p className="">2</p><img src={SaoPaulo} alt="Time2" className="w-10 md:w-18" /><p className="">SAO</p>
                    </div>
                    <div className="flex justify-center items-center flex-wrap text-xl md:text:2xl">
                        <p className="w-full text-center">11/09/2025</p>
                        <p className="w-full text-center pb-3">Fase de Grupos</p>
                    </div>
                    
                </div>
                <div className="
                bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] 
                shadow-[0_0_50px_-3px_rgba(238,77,154,0.5)]
                 text-white  pt-1 pl-4 pr-4 w-90 md:w-150 h-auto mx-auto
                 hover:outline-4 outline-[#EE4D9A]
                 
                 ">
  
                    <div className="flex justify-between items-center text-xl md:text-4xl">
                        <p className="">PAL</p><img src={Palmeiras} alt="Time1" className="w-12 md:w-20" /><p className="">3</p>
                        <span className=" font-bold">VS</span>
                        <p className="">2</p><img src={Cruzeiro} alt="Time2" className="w-15 md:w-23" /><p className="">CRU</p>
                    </div>
                    <div className="flex justify-center items-center flex-wrap text-xl md:text:2xl">
                        <p className="w-full text-center">11/09/2025</p>
                        <p className="w-full text-center pb-3">Fase de Grupos</p>
                    </div>
                    
                </div>
                <div className="
                bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] 
                shadow-[0_0_50px_-3px_rgba(238,77,154,0.5)]
                 text-white  pt-1 pl-4 pr-4 w-90 md:w-150 h-auto mx-auto
                 hover:outline-4 outline-[#EE4D9A]
                 
                 ">
  
                    <div className="flex justify-between items-center text-xl md:text-4xl">
                        <p className="">FLA</p><img src={Flamengo} alt="Time1" className="w-10 md:w-18" /><p className="">1</p>
                        <span className=" font-bold">VS</span>
                        <p className="">1</p><img src={Botafogo} alt="Time2" className="w-10 md:w-18" /><p className="">BOT</p>
                    </div>
                    <div className="flex justify-center items-center flex-wrap text-xl md:text:2xl">
                        <p className="w-full text-center">05/09/2025</p>
                        <p className="w-full text-center pb-3">Fase de Grupos</p>
                    </div>
                </div>
            </div>
    </div>
    );
}