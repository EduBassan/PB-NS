import atletasDisputa from "../assets/atletas_disputa.png"
import trofeu from "../assets/trofeuPassaBola.PNG"
import staff from "../assets/staffPassaBola.PNG"
import equipe from "../assets/equipePassaBola.png"
import Logo from "../assets/logo-passa-a-bola.png";
import { Link } from "react-router-dom"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import destaque1 from "../assets/destaque1.png";
import destaque2 from "../assets/destaque2.png";
import destaque3 from "../assets/destaque3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const atletas = [
    {
        img:destaque1,
        nome: "Alê Xavier ",
        jogos: "13 Jogos ",
        gols: "9 Gols",
        assist: "1 Assistência",
        pos: "Atacante",
        time: "São Paulo"
    },
    {
        img:destaque2,
        nome: "Luana Maluf",
        jogos: "17 Jogos ",
        gols: "3 Gols ",
        assist: "10 Assistências",
        pos: "Meio-Campo",
        time: "Palmeiras"
    },
    {
        img:destaque3,
        nome: "Marcela Dantas",
        jogos: "15 Jogos ",
        gols: "4 Gols ",
        assist: "8 Assistências",
        pos: "Atacante",
        time: "Palmeiras"
    }
];

export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-520">
            <div className="md:hidden justify-center h-90 flex ">
                <div >
                    <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-100" />
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap h-120">

                <div className="flex item-left flex-col flex pl-10 md:pl-40">
                    <div className="block mb-2">
                        <img src={Logo} alt="logo-passa-a-bola" className="w-20" />
                    </div>

                    <h4 className="leading-none">Futebol de verdade</h4>

                    <p className="block text-[#EE4D9A] font-bold text-[50px] leading-none mb-3 -translate-x-[3.5px]">FEITO POR ELAS</p>

                    <h3 className="font-bold mb-3">Passa a Bola conecta meninas, times e comunidades para criar campeonatos acessíveis, divertidos e profissionais.</h3>
                    <Link to="/cadastrar" className="font-bold text-center bg-[#EE4D9A] border-2 p-3  w-50
                           hover:translate-x-7 text-white transition-all duration-400">Inscreva seu time</Link>
                    <Link to="/copa" className="text-[12px] font-bold text-center bg-[#3C1A6E] border-2 p-3  w-50
                            text-white transition-all hover:translate-x-7 duration-400">Ver programação da COPA PB </Link>

                </div>
            </div>
            <div className="md:flex justify-center pt-5 h-120 hidden ">
                <div >
                    <img src={atletasDisputa} alt="jogadoras disputando a bola" className="w-100 pt-8" />
                </div>
            </div>



            <div className="flex justify-center items-center flex-wrap h-100 bg-[#3C1A6E] col-span-1 md:col-span-2">
                <div>
                    <h2 className="inline-block text-white font-bold text-[40px] leading-none mb-3 w-full text-center">Por que o Passa a Bola?</h2>
                    <h2 className="inline-block text-white font-bold text-[18px] leading-none w-full text-center">O campeonato amador que apresenta uma solução para cada dificuldade do Futebol Feminino</h2>
                </div>
                <div className="grid grid-cols-10 bg-white p-5 justify-center items-center">
                    <div className="h-full col-span-3">
                        <img src={equipe} alt="equipe da primeira edição da Copa Passa Bola" className="w-70" />
                    </div>
                    <div className="col-span-7 flex justify-center flex-col items-center">
                        <p className="">Falta de oportunidades...</p>
                        <h2 className="block text-[#EE4D9A] font-bold text-[40px] leading-none">→ Plataforma de inscrição simples.</h2>
                    </div>
                </div>
            </div>

            {/* as duas próximas seções precisam ser ajustadas após definirmos com vai ser a exibição em sm */}

            {/* <div className="flex justify-center items-center flex-wrap h-60 bg-white col-span-2">
                <div className="grid grid-cols-10 bg-white p-10 justify-center items-center">
                    <div className="h-full w-41 col-span-2">
                        <img src={staff} alt="jogadoras disputando a bola" className="w-50" />
                    </div>
                    <div className="col-span-8 flex justify-center flex-col items-center">
                        <p className="">Pouca visibilidade...</p>
                        <h2 className="block text-[#EE4D9A] font-bold text-[40px] leading-none">→ Cobertura, vitrine de atletas.</h2>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center flex-wrap h-100 bg-[#3C1A6E] col-span-2">
                <div className="grid grid-cols-10 bg-white p-10 justify-center items-center">
                    <div className="h-full w-41 col-span-2">
                        <img src={trofeu} alt="jogadoras disputando a bola" className="w-50" />
                    </div>
                    <div className="col-span-8 flex justify-center flex-col items-center">
                        <p className="">Chaveamento confuso...</p>
                        <h2 className="block text-[#EE4D9A] font-bold text-[40px] leading-none">→ Chave visual + notificações.</h2>
                    </div>
                </div>
            </div> */}


            <div className="flex justify-center items-center flex-wrap h-200 bg-white col-span-1 md:col-span-2">
                <p className="block text-[#EE4D9A] font-bold text-[50px] leading-none w-full text-center">Atletas em Destaque</p>
                <div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    navigation
                >
                    {atletas.map((card, index) => (
                        <SwiperSlide key={index} className="flex flex-col items-center justify-center p-5 shadow-lg bg-[#EE4D9A]">
                            <div className="flex justify-center items-center bg-[#3C1A6E]">
                            <img src={card.img} alt={card.nome} className="w-70" />
                            </div>
                            <p className="text-white font-bold text-[30px] text-center">{card.nome}</p>
                            <h2 className="text-white font-bold text-xl text-center">{card.jogos}</h2>
                            <h2 className="text-white font-bold text-xl text-center">{card.gols}</h2>
                            <h2 className="text-white font-bold text-xl text-center">{card.assist}</h2>
                            <h2 className="text-white font-bold text-xl text-center">{card.time}</h2>
                            <h2 className="text-white font-bold text-xl text-center">{card.pos}</h2>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
                <style>
                    {`
                        .swiper-slide {
                            transform: scale(0.9) !important;
                            opacity: 0.4 !important;
                            transition: transform 0.5s ease, opacity 0.5s ease;
                        }

                        .swiper-slide-active {
                            transform: scale(1) !important;
                            opacity: 1 !important;
                        }
                         .swiper-button-next, .swiper-button-prev {
                            color: #EE4D9A;
                            background-color: rgba(255,255,255,0.2);
                            width: 40px;
                            height: 40px;
                        }

                        .swiper-button-next:hover, .swiper-button-prev:hover {
                            color: #3C1A6E;
                        } 
                        `}
                </style>
                </div>
            </div>



    )
}