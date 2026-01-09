import React, { useEffect, useState } from "react";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

export default function JogosCopa() {
  const [jogos, setTimes] = useState([])
  const [anime, setJogoAnime] = useState("")

  useEffect(() => {
  const raw = localStorage.getItem("jogos");
  const dados = raw ? JSON.parse(raw) : [];
  setTimes(dados)
}, [])

  return (
    <section className="bg-white text-black py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-[#EE4D9A] uppercase">
          O Jogo Começa Aqui
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">

        <div className="flex gap-8 justify-center items-center flex-wrap">
          {jogos.filter((a) => a.exibir == true).map((jogo) => (
            <div
              key={jogo.id}
              className={`border border-pink-200 rounded-lg shadow-md w-full max-w-[320px] p-5 flex flex-col items-center ${anime == jogo.id && "transition-all duration-1000 -translate-y-3 border-b-2 border-pink-500 "}`}
            >
              <span className="text-xs md:text-lg text-[#EE4D9A] font-semibold border border-pink-300 rounded-full px-3 py-0.5 mb-3">
                {jogo.hashtag}
              </span>

              <div className="bg-[#3C1A6E] text-white px-4 py-1 text-sm font-semibold mb-4">
                {jogo.dayNumber}  {jogo.dataNumber}
              </div>

              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="flex flex-col items-center">
                  <img
                    src={jogo.logoCasa}
                    alt={jogo.timeCasa}
                    className="w-15 h-15 object-contain mb-1"
                  />
                  <span className="text-lg font-bold">{jogo.golsCasa}</span>
                </div>

                <span className="text-3xl font-extrabold text-gray-800">VS</span>

                <div className="flex flex-col items-center">
                  <img
                    src={jogo.logoFora}
                    alt={jogo.timeFora}
                    className="w-12 h-12 object-contain mb-1"
                  />
                  <span className="text-lg font-bold">{jogo.golsFora}</span>
                </div>
              </div>

              <p className="text-[#EE4D9A] font-semibold text-sm md:text-md uppercase">
                {jogo.estadio} – {jogo.hora}H
              </p>
              
              <button className={`mt-4 bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white w-[70%] font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#EE4D9A] transition-all hover:duration-50 ${anime == jogo.id && "hidden"} `} onClick={() => (setJogoAnime(jogo.id))}>
                VOTAR
              </button>
              
              <button className={`mt-4 bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white font-semibold text-sm py-2 px-6 hover:bg-white w-[70%] hover:text-[#EE4D9A] transition-all hover:duration-50 ${anime != jogo.id && "hidden"} `} onClick={() => (setJogoAnime(jogo.id))}>
                JOGO DO MOMENTO
              </button>
              <button className="text-sm text-pink-500 mt-1">
                {anime == jogo.id ? "1" : "0" } {anime == jogo.id ? "voto" : "votos"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
