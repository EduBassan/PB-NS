// src/pages/Jogos.jsx
import VideosDestaque from "@/components/VideosDestaque";
import Inicio from "@/copa/Inicio";
import JogosCopa from "@/copa/JogosCopa";
import SegundaSeccao from "@/copa/SegundaSeccao";
import TabelaTimes from "@/copa/TabelasTimes";
import TimesCopa from "@/copa/TimesCopa";

export default function Jogos() {
  return (
    <div>
      <Inicio/>
      <SegundaSeccao/>
      <VideosDestaque/>
      <TimesCopa/>
      <JogosCopa/>
      <TabelaTimes/>
    </div>

  );
}
