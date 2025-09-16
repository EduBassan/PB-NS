// src/pages/Jogos.jsx
import CardJogos from "../components/CardJogos";
import { Link } from "react-router-dom"
import bg from "../assets/bgPassaBola.PNG"
import Logo from "../assets/logo-passa-a-bola.png";
import AtletasDestaque from "../components/AtletasDestaque";

export default function Jogos() {
  return (
    <div className="grid grid-cols-1 h-760 md:h-820 lg:grid-cols-2 lg:h-850">
      {/* Foto */}
      <div className="flex justify-center col-span-1 h-80 md:h-150 lg:h-auto lg:pt-5 lg:col-span-1">
        <div>
          <img src={bg} alt="troféu do passa a bola" className="w-180 lg:w-120 xl:w-170 " />
        </div>

      {/*Menu*/}
      </div>
      <div className="flex justify-center items-center flex-wrap h-120 col-span-1 lg:col-span-1">
        {/* Logo */}
        <div className="flex item-center flex-col">
          <div className="block mb-2">
            <img src={Logo} alt="logo-passa-a-bola" className="w-20" />
          </div>

          {/* Texto */}
          <h4 className="leading-none font-semibold">Nosso lema...</h4>
          <p className="block text-[#EE4D9A] font-bold text-[20px] md:text-[30px] xl:text-[40px] leading-none mb-3 -translate-x-[3.5px]">FUTEBOL QUE TRANSFORMA</p>
          <h3 className="mb-3 font-semibold w-75 lg:w-100 xl:w-150">A Copa Passa Bola surge como uma iniciativa que pode mudar o futuro do Futebol Feminino no Brasil.</h3>
          <h3 className="font-bold mb-2 text-[#3C1A6E]">Conheça mais sobre o projeto:</h3>
          {/* Botões */}
        <a
            href="#lance"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("lance").scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-[15px] font-bold text-center bg-white border-2 p-3 w-50
                      text-[#EE4D9A] transition-all hover:translate-x-7 duration-500 transform">
            Lances em destaque
          </a>
          <Link to="/copa/chaveamento" className="font-bold text-center bg-[#EE4D9A] border-2 p-3  w-50
                    hover:translate-x-7 text-white transition-all duration-400">Chavemento</Link>
          <Link to="/copa/tabela" className="text-[15px] font-bold text-center bg-[#3C1A6E] border-2 p-3  w-50
                     text-white transition-all hover:translate-x-7 duration-400">Tabela</Link>
        </div>
      </div>

      {/* Segunda Seção */}
      <AtletasDestaque/>
      <div className="flex justify-center items-center text-5xl flex-wrap font-semibold italic p-20 lg:col-span-2">
        <p className="text-[#EE4D9A] font-bold text-[20px] md:text-[30px] xl:text-[40px] leading-none w-full text-center">Histórico de Partidas</p>
      <CardJogos/>
      </div>
      <div className="flex justify-center items-center text-5xl flex-wrap font-semibold italic p-20 lg:col-span-2">
        <p id="lance"className="text-[#EE4D9A] font-bold text-[20px] md:text-[30px] xl:text-[40px] leading-none mb-2 w-full text-center">Lances em Destaque</p>
        <div className="flex flex-col justify-center items-center gap-10 mt-3">
        <iframe className="w-80 h-45 md:w-120 md:h-65 lg:w-160 lg:h-90" src="https://www.youtube.com/embed/nQrLOmZPb1M?si=Hfp-FJ7agSYOzox4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <iframe className="w-80 h-45 md:w-120 md:h-65 lg:w-160 lg:h-90" src="https://www.youtube.com/embed/dHxBuh6PXoI?si=nvw_pVmYvIQ2YB6-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <iframe className="w-80 h-45 md:w-120 md:h-65 lg:w-160 lg:h-90" src="https://www.youtube.com/embed/P80GjYPabqg?si=5lrhfpowMYDA6Fs5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      </div>

    </div>

  );
}
