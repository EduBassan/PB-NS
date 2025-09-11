// src/pages/Jogos.jsx
import CardJogos from "../components/CardJogos";
import { EstatisticasVideo } from "../components/EstatiscasVideo";
import VideoFutebol from "../components/VideoFutebol";
import { Link } from "react-router-dom"

export default function Jogos() {
  return (
    <div>
        <div className="flex justify-center items-center text-5xl font-semibold italic p-20">
            <h1>COPA PASSA A BOLA 2025</h1>
        </div>
      <VideoFutebol />
      <EstatisticasVideo />
      <CardJogos />
        
        <div className="flex flex-row justify-center gap-10 mb-20">
            <Link to="/copa/chaveamento" className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] w-50 hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
            Chaveamento
            </Link>
            <Link to="/copa/tabela" className="flex justify-center border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] w-50 hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
            Tabela
            </Link>
        </div>

    </div>
  );
}
