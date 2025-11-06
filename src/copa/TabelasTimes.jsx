import React from "react";
import { Link } from "react-router-dom";

const tabelaTimes = [
  {
    pos: "01",
    nome: "CORINTHIANS",
    logo: "https://logodetimes.com/times/corinthians/logo-corinthians-4096.png",
    jogos: 7,
    pontos: 19,
    vitorias: 6,
    empates: 1,
    derrotas: 0,
  },
  {
    pos: "02",
    nome: "PALMEIRAS",
    logo: "https://imagepng.org/wp-content/uploads/2018/03/escudo-palmeiras.png",
    jogos: 7,
    pontos: 17,
    vitorias: 5,
    empates: 2,
    derrotas: 0,
  },
  {
    pos: "03",
    nome: "SANTOS",
    logo: "https://logodetimes.com/times/santos/logo-santos-1536.png",
    jogos: 7,
    pontos: 16,
    vitorias: 5,
    empates: 1,
    derrotas: 1,
  },
  {
    pos: "04",
    nome: "SÃO PAULO",
    logo: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-4096.png",
    jogos: 7,
    pontos: 14,
    vitorias: 4,
    empates: 2,
    derrotas: 1,
  },
  {
    pos: "05",
    nome: "GRÊMIO",
    logo: "https://logodetimes.com/times/gremio/logo-gremio-4096.png",
    jogos: 7,
    pontos: 12,
    vitorias: 3,
    empates: 3,
    derrotas: 1,
  },
  {
    pos: "06",
    nome: "FLAMENGO",
    logo: "https://th.bing.com/th/id/R.c7f858adcf5c6f5cd97f4b2a263cd5b1?rik=eksXhOCTAYsIrg&pid=ImgRaw&r=0",
    jogos: 7,
    pontos: 11,
    vitorias: 3,
    empates: 2,
    derrotas: 2,
  },
  {
    pos: "07",
    nome: "MIRASSOL",
    logo: "https://logodetimes.com/times/mirassol/logo-mirassol-atualizado-2048.png",
    jogos: 7,
    pontos: 8,
    vitorias: 2,
    empates: 2,
    derrotas: 3,
  },
  {
    pos: "08",
    nome: "ATLÉTICO MINEIRO",
    logo: "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-4096.png",
    jogos: 7,
    pontos: 4,
    vitorias: 1,
    empates: 1,
    derrotas: 5,
  },
];

export default function TabelaTimes() {
  return (
    <section className="bg-purple-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 uppercase">Tabela</h2>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-center bg-white text-black rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-pink-500 text-white uppercase text-sm">
                <th className="p-3">POS</th>
                <th className="p-3">NOME DO TIME</th>
                <th className="p-3">JOGOS</th>
                <th className="p-3">PONTOS</th>
                <th className="p-3">VITÓRIAS</th>
                <th className="p-3">EMPATES</th>
                <th className="p-3">DERROTAS</th>
              </tr>
            </thead>
            <tbody>
              {tabelaTimes.map((time, i) => (
                <tr
                  key={i}
                  className={`border-b border-purple-800 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="text-pink-500 font-bold p-3">{time.pos}</td>
                  <td className="flex items-center gap-3 p-3 justify-start font-semibold uppercase">
                    <img
                      src={time.logo}
                      alt={time.nome}
                      className="w-12 h-12 object-contain"
                    />
                    {time.nome}
                  </td>
                  <td className="text-pink-500 font-bold">{time.jogos}</td>
                  <td className="text-pink-500 font-bold">{time.pontos}</td>
                  <td className="text-gray-800 font-semibold">
                    {time.vitorias}
                  </td>
                  <td className="text-gray-800 font-semibold">
                    {time.empates}
                  </td>
                  <td className="text-gray-800 font-semibold">
                    {time.derrotas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden flex flex-col gap-4">
          {tabelaTimes.map((time, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-lg shadow-md p-4 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-pink-500 font-bold text-lg">
                    {time.pos}
                  </span>
                  <img
                    src={time.logo}
                    alt={time.nome}
                    className="w-7 h-7 object-contain"
                  />
                  <span className="font-bold uppercase text-sm">
                    {time.nome}
                  </span>
                </div>
                <span className="text-sm text-pink-600 font-bold">
                  {time.pontos} pts
                </span>
              </div>
              <div className="grid grid-cols-3 text-center text-sm mt-2">
                <div>
                  <p className="font-semibold text-gray-700">Vitórias</p>
                  <p>{time.vitorias}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Empates</p>
                  <p>{time.empates}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Derrotas</p>
                  <p>{time.derrotas}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-8">
          <Link to='/cadastrar' className="border-1 border-[#EE4D9A] text-[#EE4D9A] pt-2 p-2 pl-7 pr-7 uppercase font-bold text-base hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500">
            Inscreva-se
          </Link>
        </div>
      </div>
    </section>
  );
}
