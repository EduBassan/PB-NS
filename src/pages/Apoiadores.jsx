import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import destaque1 from "../assets/fiapLogo.jpg";
import destaque2 from "../assets/ferrariLogo.jpg";
import destaque3 from "../assets/adidasLogo.jpg";
import destaque4 from "../assets/cbfLogo.PNG"
import destaque5 from "../assets/gatoradeLogo.PNG"
import destaque6 from "../assets/youtubeLogo.PNG"
import destaque7 from "../assets/teslaLogo.PNG"
import destaque8 from "../assets/rbLogo.jpg"


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import AtletasDestaque from "@/components/AtletasDestaque";

const atletas = [
    {
        img: destaque1,
        text: "A FIAP acredita no poder do esporte como ferramenta de transformação social e, por isso, apoia o futebol feminino, promovendo oportunidades para que novas líderes se destaquem dentro e fora dos campos"

    },
    {
        img: destaque2,
        text: "A Ferrari apoia o futebol feminino como forma de incentivar a diversidade e o empoderamento, valorizando a determinação, talento e esforço das atletas em um esporte historicamente dominado por homens."

    },
    {
        img: destaque3,
        text: "A Adidas investe no futebol feminino para inspirar meninas e mulheres em todo o mundo, fortalecendo a presença feminina no esporte e incentivando igualdade de oportunidades em todos os níveis."

    },
    {
        img: destaque4,
        text: "A Confederação Brasileira de Futebol se dedica a desenvolver o futebol feminino no país, promovendo visibilidade, estrutura e programas que ampliam a participação e profissionalização das atletas."

    },
    {
        img: destaque5,
        text: "A Gatorade apoia o futebol feminino para incentivar desempenho, saúde e desenvolvimento atlético, oferecendo suporte às atletas e mostrando que dedicação e treino não têm gênero."

    },
    {
        img: destaque6,
        text: "O YouTube amplia a visibilidade do futebol feminino, conectando fãs e atletas, democratizando o acesso ao esporte e fortalecendo a narrativa das jogadoras em todas as partes do mundo."

    },
    {
        img: destaque7,
        text: "A Tesla acredita em inovação e sustentabilidade também no esporte, apoiando o futebol feminino para incentivar a inclusão, a competitividade e a criação de novas oportunidades para mulheres no esporte."

    },
    {
        img: destaque8,
        text: "A Red Bull investe no futebol feminino para estimular talentos, fomentar competitividade e contar histórias inspiradoras de atletas que desafiam limites e conquistam espaço no esporte."

    }
];


export default function Apoiadores() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="w-full flex justify-center overflow-hidden mr-0 flex-col h-auto">
            <div className="w-full flex justify-center items-center overflow-hidden mr-0 flex-col italic">
                <h1 className="w-full text-center lg:text-left h-auto pl-0 lg:pl-[120px] font-medium text-[50px] bg-white"> Apoiadores </h1>
                <div className="flex justify-center items-center bg-[#3C1A6E] w-full">
                    <div className="w-300 overflow-hidden bg-[#3C1A6E] py-10">
                        <Swiper
                            modules={[Navigation, Pagination, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            spaceBetween={2}
                            navigation
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.realIndex);
                            }}
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
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}

                        >
                            {atletas.map((card, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <div className="mt-5 border-[20px] border-white">
                                        <div className="flex justify-center items-center h-40 bg-black">
                                            <img src={card.img} className="h-auto w-40 " />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <style>
                        {`
                            .swiper-slide {
                                display: flex;
                                transform: scale(0.70) !important;
                                opacity: 0.4 !important;
                                transition: transform 0.5s ease, opacity 0.5s ease;
                            }

                            .swiper-slide-active {
                                transform: scale(1) !important;
                                opacity: 1 !important;
                            }

                            .swiper-slide-next{
                                transform: scale(0.80) !important;
                                opacity: 0.7 !important;

                            }
                            .swiper-slide-prev{
                                transform: scale(0.80) !important;
                                opacity: 0.7 !important;

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
                <div className="flex h-[100%] w-[100%] justify-center items-center p-5 lg:p-10">
                    {atletas.map((card, Index) => (
                        <div
                            key={Index}
                            className="flex items-center justify-center w-[100%] h-[100%"
                            style={{
                                display: activeIndex === Index ? "flex" : "none"
                            }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-4 w-full h-full xl:px-40 gap-5">

                                <div className="flex justify-center flex-wrap">
                                <div className="border-[20px] border-black col-span-1 hidden lg:flex">
                                    <div className="flex justify-center items-center h-full bg-black">
                                        <img src={card.img} className="h-auto w-full bg-black"/>
                                    </div>
                                </div>
                                <div className="h-[5px] w-[90%] bg-[#EE4D9A] lg:mt-2">
                                </div>
                                </div>


                                <div className="w-full h-full col-span-1 lg:col-span-3 xl:px-30">
                                    <div className="flex p-3 justify-center items-center text-center font-medium not-italic w-full h-full bg-[#D9D9D9]">
                                        
                                        <p className="w-full p-3 lg:p-0 lg:w-[80%] text-center text-[20px]">{card.text}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <AtletasDestaque/>
            </div>
        </div>
    );
}