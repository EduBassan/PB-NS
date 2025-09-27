import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import destaque1 from "../assets/fiapLogo.jpg";
import destaque2 from "../assets/ferrariLogo.jpg";
import destaque3 from "../assets/adidasLogo.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

const atletas = [
      {
        img: destaque3,

    },
      {
        img: destaque3,

    },
      {
        img: destaque3,

    },
     {
        img: destaque3,

    },
    {
        img: destaque3,

    },
    {
        img: destaque1,

    },
    {
        img: destaque2,
    
    },
     {
        img: destaque2,
    
    }
];


export default function Apoiadores() {
    return (
        <div className="w-full flex justify-center overflow-hidden mr-0 flex-col">
            <div className="w-full flex justify-center items-center overflow-hidden mr-0 flex-col italic">
                <h1 className="w-full h-20 pl-[120px] font-medium text-[50px] bg-white"> Apoiadores </h1>
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
                </div>
                <style>
                    {`
                            .swiper-slide {
                                display: flex;
                                transform: scale(0.50) !important;
                                opacity: 0.6 !important;
                                transition: transform 0.5s ease, opacity 0.5s ease;
                            }

                            .swiper-slide-active {
                                transform: scale(1) !important;
                                opacity: 1 !important;
                            }

                            .swiper-slide-next{
                                transform: scale(0.75) !important;
                                opacity: 0.8 !important;

                            }
                            .swiper-slide-prev{
                                transform: scale(0.75) !important;
                                opacity: 0.8 !important;

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
            <div className="h-150"> </div>
        </div>
    );
}