import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import destaque1 from "../assets/destaque1.png";
import destaque2 from "../assets/destaque2.png";
import destaque3 from "../assets/destaque3.png";
import waiter from "../assets/waiter.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";



const atletas = [
    {
        img: destaque3,
        nome: "Marcela",
        sobrenome: "Dantas",
        jogos: "15",
        gols: "4 Gols",
        assist: "8 Ass.",
        pos: "ATA",
        time: "Palmeiras",
    },
    {
        img: destaque1,
        nome: "Alê",
        sobrenome: "Xavier ",
        jogos: "13",
        gols: "9 Gols",
        assist: "1 Ass.",
        pos: "ATA",
        time: "São Paulo"
    },
    {
        img: destaque2,
        nome: "Luana",
        sobrenome: "Maluf",
        jogos: "17",
        gols: "3 Gols",
        assist: "10 Ass.",
        pos: "MEI",
        time: "Palmeiras"
    }
];


export default function AtletasDestaque() {
    return (



        <div className="flex justify-center items-center flex-wrap h-150 bg-white col-span-1 lg:col-span-2 mt-20">
            <p className="block text-[#EE4D9A] font-bold text-[30px] lg:text-[50px] leading-none w-full text-center mb-5">Atletas em Destaque</p>
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
                                className="flex items-center justify-center"
                            >


                                <div className="flex h-[395px] w-[291px] bg-[#713bc2]  p-3">
                                    <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1">
                                        <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3]">
                                            <div className="flex relative justify-between h-full">
                                                <div className="w-auto font-medium text-white pt-2 pl-2">
                                                    {card.time}
                                                </div>

                                                <div className="flex flex-col items-center w-auto text-white pt-4 pr-4">
                                                    <div className="font-thin italic leading-none text-[13px]">
                                                        Jogos

                                                    </div>
                                                    <div className="font-bold text-3xl leading-none">
                                                        {card.jogos}
                                                    </div>
                                                    <div className="font-thin italic leading-none text-[13px]">
                                                        {card.pos}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex relative w-full overlfow-hidden justify-center items-start left-[0px] bottom-[64px]">
                                                <img src={card.img} className="h-[210px] overlfow-hidden" />
                                            </div>
                                        </div>
                                        <div className="flex h-[40%] w-full bg-gradient-to-br from-[#EE4D9A] to-[#3c1970] justify-between px-5 pb-5 text-white">
                                            <div className="flex flex-col w-full items-center pt-1">
                                                <div className="leading-none font-medium text-[17px] mt-1">{card.nome}</div>
                                                <div className="leading-none italic mb-2">{card.sobrenome}</div>
                                                <div className="flex flex-col justify-center items-center  h-full border-2 w-[100%]">
                                                    <div className="flex flex-row justify-center items-center">
                                                        <div>   <FontAwesomeIcon icon={faFutbol} className="text-[22px]" /> </div>
                                                        <div className="w-[50px] h-[1px] bg-white m-5"></div>
                                                        <div>{card.gols}</div>
                                                    </div>
                                                    <div className="flex justify-center items-center text-[16px] w-[100%]">
                                                        <div className="flex justify-end items-center"><img src={waiter} className="w-[22px]"/></div>
                                                        <div className="w-[50px] h-[1px] bg-white m-5"></div>
                                                        <div className="text-[16px]">{card.assist}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="w-full flex justify-center overflow-visible">
                        <a
                            href="#lance"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("lance").scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            className="text-[15px] font-bold text-center p-3 w-50
                      text-white bg-[#EE4D9A] transition-all hover:translate-y-1 duration-500 transform mt-5">
                            Lances em destaque
                        </a>
                    </div>
                </div>
                <style>
                    {`
                            .swiper-slide {
                                display: flex;
                                transform: scale(0.85) !important;
                                opacity: 0.7 !important;
                                transition: transform 0.5s ease, opacity 0.5s ease;
                            }

                            .swiper-slide-active {
                                transform: scale(1) !important;
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