import React, { useEffect, useState } from "react";

export default function TimesCopa() {
  const [tabelaTimes, setTabela] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('times');
    const dados = raw ? JSON.parse(raw) : [];
    setTabela(dados)
  },[]);
  return (
    <section className="bg-purple-800 text-white py-8 px-1">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold uppercase">
          Conheça alguns times da Copa PB
        </h2>
        <p className="text-sm lg:text-xl text-white mt-2">
          Cada equipe carrega talento, garra e a paixão pelo futebol feminino
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        

        <div className="flex gap-8 justify-center items-center flex-wrap">
          {tabelaTimes.filter((time) => time.destaque === true).map((time, index) => (
            <div
              key={index}
              className="bg-white text-black  overflow-hidden shadow-lg w-full max-w-[320px] lg:max-w-[360px] flex flex-col"
            >
              <div className="flex justify-center items-center bg-white py-3 lg:py-7">
                <img
                  src={time.foto}
                  alt={time.nome}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="bg-[#EE4D9A] text-white text-center py-6 flex flex-col gap-2 justify-start items-start">
                <p className="text-xs uppercase tracking-wide ml-6">Aqui é</p>
                <h3 className="text-3xl font-extrabold uppercase ml-6">
                  {time.nome}
                </h3>
                <p className="text-sm text-white uppercase ml-6">
                  Cidade: {time.cidade}
                </p>

                <button className="bg-white border-2 border-white text-[#EE4D9A] text-sm py-2 px-4  mt-3 mx-auto w-[90%] uppercase font-bold hover:bg-[#EE4D9A] hover:text-white transition-all hover:duration-500 cursor-pointer">
                  Instagram
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
