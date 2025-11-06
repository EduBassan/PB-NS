import React from "react";
import bgImage from "/images/marta01.jpg"; // substitua pelo caminho da sua imagem
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 uppercase">
          Inspire.{" "}
          <span className="bg-clip-text uppercase ">
            Jogue.
          </span>{" "}
          Conquiste.
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
          Faça parte da nova geração do futebol feminino.  
          Onde talento e paixão se encontram.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to='/cadastrar' className="border-1 border-[#EE4D9A] text-[#EE4D9A] pt-2 p-2 pl-7 pr-7 uppercase font-bold text-base hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500">
            Inscreva-se
          </Link>

          <Link to='/apoiadores' className="border-1 border-white text-white pt-2 p-2 pl-7 pr-7 uppercase font-bold text-base hover:bg-white hover:text-[#EE4D9A] hover:transition-all hover:duration-500">
            Apoiadores
          </Link>
        </div>
      </div>
    </section>
  );
}
