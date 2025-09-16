import { Link } from "react-router-dom"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import destaque1 from "../assets/destaque1.png";
import destaque2 from "../assets/destaque2.png";
import destaque3 from "../assets/destaque3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

const atletas = [
    {
        img: destaque1,
        nome: "Alê Xavier ",
        jogos: "13 Jogos ",
        gols: "9 Gols",
        assist: "1 Assist.",
        pos: "Atacante",
        time: "São Paulo"
    },
    {
        img: destaque2,
        nome: "Luana Maluf",
        jogos: "17 Jogos ",
        gols: "3 Gols ",
        assist: "10 Assist.",
        pos: "Meio-Campo",
        time: "Palmeiras"
    },
    {
        img: destaque3,
        nome: "Marcela Dantas",
        jogos: "15 Jogos ",
        gols: "4 Gols ",
        assist: "8 Assist.",
        pos: "Atacante",
        time: "Palmeiras"
    }
];


export default function AtletasDestaque() {
  return (
  


 <div className="flex justify-center items-center flex-wrap h-150 bg-white col-span-1 lg:col-span-2 mt-20">
                <p className="block text-[#EE4D9A] font-bold text-[50px] leading-none w-full text-center">Atletas em Destaque</p>
                <div className="w-full flex justify-center overflow-hidden mr-0">
                    <div className="w-250 overflow-hidden">
                        <Swiper
                            modules={[Navigation, Pagination, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >

                            {atletas.map((card, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex items-center justify-center shadow-[0_0_50px_-3px_rgba(238,77,154,0.2)]"
                                >
                                    <div className="mt-5">
                                        <p className="w-full justify-center text-[#3C1A6E] font-bold text-[30px] text-center leading-none">{card.nome}</p>
                                        <div className="flex justify-center">
                                            <div className="">
                                                <h2 className="relative z-10 w-full text-center text-[#3C1A6E] fonzt-bold text-xl border border-white font-bold">{card.pos}</h2>
                                                <img
                                                    src={card.img}
                                                    alt={card.nome}
                                                    className="w-full max-w-[250px] md:max-w-[280px] lg:max-w-[300px] border border-white"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-nowrap items-center justify-center gap-1 border border-white">
                                            <div className="flex flex-row justify-start h-full">
                                                <h2 className="text-[#3C1A6E] font-bold text-xl text-center">{card.time}</h2>

                                            </div>
                                            <div className="w-full h-[0.3px] bg-[#3C1A6E]"></div>
                                            <div className="h-full flex flex-row gap-5">
                                                <h2 className="text-[#3C1A6E] font-bold text-xl text-center">{card.gols}</h2>
                                                <h2 className="text-[#3C1A6E] font-bold text-xl text-center">{card.assist}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="w-full flex justify-center overflow-visible">
                        <Link to="/copa" className="text-[12px] font-bold text-center border-[#3C1A6E]  bg-[#3C1A6E] border-2 p-3  w-50
                     text-white transition-all hover:translate-y-0.5 hover:border-[#69489b] duration-400 mt-3">Ver Lances em Destaque</Link>
                     </div>
                    </div>
                    <style>
                        {`
                            .swiper-slide {
                                display: flex;
                                transform: scale(0.89) !important;
                                opacity: 0.8 !important;
                                transition: transform 0.5s ease, opacity 0.5s ease;
                            }

                            .swiper-slide-active {
                                transform: scale(0.99) !important;
                                opacity: 1 !important;
                            }

                            .swiper-button-next,
                            .swiper-button-prev {
                                color: #EE4D9A;
                                width: 40px;
                                height: 40px;
                            }

                            .swiper-button-next:hover,
                            .swiper-button-prev:hover {
                                color: #3C1A6E;
                            }
                        `}
                    </style>
                </div>


            </div>
  );
}