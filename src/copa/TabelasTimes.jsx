import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { json } from "zod";

export default function TabelaTimes() {

  const [tabelaTimes, setTabela] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('times');
    const dados = raw ? JSON.parse(raw) : [];
    setTabela(dados)
  },[]);


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
              {tabelaTimes.sort((a, b) => Number(b.vitorias)*3+Number(b.empates) - Number(a.vitorias)*3+Number(a.empates)).map((time, i) => (
                <tr
                  key={i}
                  className={`border-b border-purple-800 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="text-pink-500 font-bold p-3">{i+1}</td>
                  <td className="flex items-center gap-3 p-3 justify-start font-semibold uppercase">
                    <img
                      src={time.foto}
                      alt={time.nome}
                      className="w-12 h-12 object-contain"
                    />
                    {time.nome}
                  </td>
                  <td className="text-pink-500 font-bold">{(Number(time.vitorias)) + (Number(time.derrotas)) + (Number(time.empates))}</td>
                  <td className="text-pink-500 font-bold">{(Number(time.vitorias)*3) + (Number(time.empates))}</td>
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
          {tabelaTimes.sort((a, b) => Number(b.vitorias)*3+Number(b.empates) - Number(a.vitorias)*3+Number(a.empates)).map((time, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-lg shadow-md p-4 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-pink-500 font-bold text-lg">
                    {i+1}
                  </span>
                  <img
                    src={time.foto}
                    alt={time.nome}
                    className="w-7 h-7 object-contain"
                  />
                  <span className="font-bold uppercase text-sm">
                    {time.nome}
                  </span>
                </div>
                <span className="text-sm text-pink-600 font-bold">
                  {(Number(time.vitorias)*3) + (Number(time.empates))} pts
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
