// src/pages/Jogos.jsx
import CardJogos from "../components/CardJogos";
import { EstatisticasVideo } from "../components/EstatiscasVideo";
import VideoFutebol from "../components/VideoFutebol";
import { Link } from "react-router-dom"

export default function Jogos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center text-5xl font-semibold italic p-20 flex-wrap w-200">
        <div>
        <h1 className="hidden md:block">BRASILEIRO FEMININO 2025</h1>
        </div>
      </div>
      <EstatisticasVideo />
      <VideoFutebol />
      <CardJogos />
      <div className="hidden lg:flex flex-row justify-center gap-2 p-5">
          <Link to="/copa/chaveamento" className="flex w-69 border-2 justify-center border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
            Chaveamento
          </Link>
          <Link to="/copa/tabela" className="w-69 flex justify-center border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 px-10 text-white hover:border-[#3C1A6E] hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-300">
            Tabela
          </Link>
        </div>
    </div>
  );
}
