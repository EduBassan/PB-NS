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
        img: destaque3,
        nome: "Marcela",
        sobrenome: "Dantas",
        jogos: "15",
        gols: "4",
        assist: "8",
        pos: "ATA",
        time: "Palmeiras",
    },
    {
        img: destaque1,
        nome: "Alê",
        sobrenome: "Xavier ",
        jogos: "13",
        gols: "9",
        assist: "1",
        pos: "ATA",
        time: "São Paulo"
    },
    {
        img: destaque2,
        nome: "Luana",
        sobrenome: "Maluf",
        jogos: "17",
        gols: "3",
        assist: "10",
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


                                <div class="flex h-[395px] w-[291px] bg-[#713bc2]  p-3">
                                    <div class="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1">
                                        <div class="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3]">
                                            <div class="flex relative justify-between h-full">
                                                <div class="w-auto font-medium text-white pt-2 pl-2">
                                                    {card.time}
                                                </div>

                                                <div class="flex flex-col items-center w-auto text-white pt-4 pr-4">
                                                    <div class="font-thin italic leading-none text-[13px]">
                                                        Jogos

                                                    </div>
                                                    <div class="font-bold text-3xl leading-none">
                                                        {card.jogos}
                                                    </div>
                                                    <div class="font-thin italic leading-none text-[13px]">
                                                        {card.pos}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="flex relative w-full overlfow-hidden justify-center items-start left-[0px] bottom-[64px]">
                                                <img src={card.img} class="h-[210px] overlfow-hidden" />
                                            </div>
                                        </div>
                                        <div class="flex h-[40%] w-full bg-gradient-to-br from-[#EE4D9A] to-[#3c1970] justify-between px-5 pb-5 text-white">
                                            <div class="flex flex-col w-full items-center pt-1">
                                                <div class="leading-none font-medium text-[17px] mt-1">{card.nome}</div>
                                                <div class="leading-none italic mb-2">{card.sobrenome}</div>
                                                <div class="flex flex-col justify-center items-center  h-full w-full border-2">
                                                    <div class="flex flex-row justify-center items-center">
                                                        <div>Gols</div>
                                                        <div class="w-[50px] h-[1px] bg-white m-5"></div>
                                                        <div>{card.gols}</div>
                                                    </div>
                                                    <div class="flex justify-center items-center text-[16px]">
                                                        <div>Assist.</div>
                                                        <div class="w-[50px] h-[1px] bg-white m-5"></div>
                                                        <div class="text-[16px]">{card.assist}</div>
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