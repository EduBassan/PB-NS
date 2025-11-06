import React from "react";

const jogos = [
  {
    id: 1,
    data: "Nov 19",
    timeCasa: "SPFC",
    logoCasa: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-4096.png",
    golsCasa: 2,
    timeFora: "SFC",
    logoFora: "https://logodetimes.com/times/santos/logo-santos-1536.png",
    golsFora: 0,
    estadio: "Morumbi",
    hora: "21:30h",
    hashtag: "#ChoqueDeGigantes",
  },
  {
    id: 2,
    data: "Nov 20",
    timeCasa: "Corinthians",
    logoCasa: "https://logodetimes.com/times/corinthians/logo-corinthians-4096.png",
    golsCasa: 3,
    timeFora: "Palmeiras",
    logoFora: "https://imagepng.org/wp-content/uploads/2018/03/escudo-palmeiras.png",
    golsFora: 2,
    estadio: "Neo Química Arena",
    hora: "20:00h",
    hashtag: "#DerbyPaulista",
  },
  {
    id: 3,
    data: "Nov 21",
    timeCasa: "Flamengo",
    logoCasa: "https://th.bing.com/th/id/R.c7f858adcf5c6f5cd97f4b2a263cd5b1?rik=eksXhOCTAYsIrg&pid=ImgRaw&r=0",
    golsCasa: 1,
    timeFora: "Vasco",
    logoFora: "https://tse4.mm.bing.net/th/id/OIP.rnihwMvzGnzLsELBY_PE3wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    golsFora: 1,
    estadio: "Maracanã",
    hora: "18:00h",
    hashtag: "#ClassicoCarioca",
  },
];

export default function JogosCopa() {
  return (
    <section className="bg-white text-black py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-[#EE4D9A] uppercase">
          O Jogo Começa Aqui
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {jogos.map((jogo) => (
            <div
              key={jogo.id}
              className="border border-pink-200 rounded-lg shadow-md w-full max-w-[320px] p-5 flex flex-col items-center"
            >
              <span className="text-xs text-[#EE4D9A] font-semibold border border-pink-300 rounded-full px-3 py-0.5 mb-3">
                {jogo.hashtag}
              </span>

              <div className="bg-[#3C1A6E] text-white px-4 py-1 text-sm font-semibold mb-4">
                {jogo.data}
              </div>

              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="flex flex-col items-center">
                  <img
                    src={jogo.logoCasa}
                    alt={jogo.timeCasa}
                    className="w-12 h-12 object-contain mb-1"
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

              <p className="text-[#EE4D9A] font-semibold text-sm uppercase">
                {jogo.estadio} – {jogo.hora}
              </p>

              <button className="mt-4 bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white w-[95%] font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#EE4D9A] transition-all hover:duration-500">
                VOTAR
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
