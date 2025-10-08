import React, { useState } from "react";
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
import { faUserPen } from "@fortawesome/free-solid-svg-icons";


export default function AtletasDestaque() {
    const destaques = JSON.parse(localStorage.getItem("atletasDestaque"));
    const [atletas, setAtletas] = useState([
        {
            id: 3,
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
            id: 1,
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
            id: 2,
            img: destaque2,
            nome: "Luana",
            sobrenome: "Maluf",
            jogos: "17",
            gols: "3",
            assist: "10",
            pos: "MEI",
            time: "Palmeiras"
        },
    ]);
    const [novoAtleta, setNovoAtleta] = useState({
        id: "",
        nome: "",
        sobrenome: "",
        time: "",
        jogos: "",
        gols: "",
        assist: "",
        pos: "",
        img: ""
    });
    const adicionarAtleta = () => {
        setAtletas([...atletas, novoAtleta]);
        setNovoAtleta({
            id: "",
            nome: "",
            sobrenome: "",
            img: "",
            jogos: "",
            gols: "",
            assist: "",
            pos: "",
            time: ""
        });
    };

    const atualizarAtleta = (novoAtleta) => {
        setAtletas(atletas.map(a => a.id === novoAtleta.id ? novoAtleta : a));
        setNovoAtleta({
            id: "",
            nome: "",
            sobrenome: "",
            img: "",
            jogos: "",
            gols: "",
            assist: "",
            pos: "",
            time: ""
        });
    };
    const deletarAtleta = (id) => {
        setAtletas(atletas.filter(a => a.id !== id));
        setNovoAtleta({
            id: "",
            nome: "",
            sobrenome: "",
            img: "",
            jogos: "",
            gols: "",
            assist: "",
            pos: "",
            time: ""
        });
    };

    return (
        <div className="flex justify-center items-center flex-wrap h-auto bg-white col-span-1 lg:col-span-2 mt-20">
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
                                <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2]  p-3">
                                    <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                        <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3]">
                                            <div className="flex relative z-10 justify-between h-full">
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

                                            <div className="flex relative w-full justify-center items-start left-[0px] bottom-[64px]">
                                                <div className="flex justify-center items-center w-full h-[210px] overflow-hidden">
                                                    <img src={card.img} className="max-h-[210px]" />
                                                </div>
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
                                                        <div>{card.gols} Gols</div>
                                                    </div>
                                                    <div className="flex justify-center items-center text-[16px] w-[100%]">
                                                        <div className="flex justify-end items-center"><img src={waiter} className="w-[22px]" /></div>
                                                        <div className="w-[50px] h-[1px] bg-white m-5"></div>
                                                        <div className="text-[16px]">{card.assist} Ass.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-white text-[10px] leading-0">Nº{card.id}</div>
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

            <div className="w-full">
                <div className="flex w-full h-auto bg-[#3c1970] justify-center items-center text-white p-2 mt-2 mb-2">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-x-1 gap-y-3">
                        <div className="flex items-center justify-center flex-col gap-3 p-2">
                            <span className="font-bold text-[25px] w-full text-center">Faça Parte do Time <FontAwesomeIcon icon={faUserPen} className="text-[22px]" />  </span>
                            <div className="flex w-full gap-3">
                                <input type="text" placeholder="Nome" className="bg-white text-black rounded-[2px] w-full" value={novoAtleta.nome}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, nome: e.target.value })
                                    }}
                                />
                                <input type="text" placeholder="Sobrenome" className="bg-white text-black rounded-[2px] w-full" value={novoAtleta.sobrenome}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, sobrenome: e.target.value })
                                    }}
                                />
                            </div>
                            <div className="flex w-full gap-3">
                                <input type="text" placeholder="Jogos" className="bg-white text-black rounded-[2px] w-full" value={novoAtleta.jogos}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, jogos: e.target.value })
                                    }}
                                />
                                <select className="bg-white text-[13px] text-black rounded-[2px] w-full" value={novoAtleta.pos}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, pos: e.target.value })
                                    }}>
                                    <option selected hidden>
                                    Escolha sua posição
                                    </option>
                                    <option>
                                    ATA
                                    </option>
                                    <option>
                                    MEI
                                    </option>
                                    <option>
                                    ZAG
                                    </option>
                                    <option>
                                    GOL
                                    </option>

                                </select>
                            </div>

                            <div className="flex w-full">
                                <input type="text" placeholder="Time" className="bg-white text-black rounded-[2px] w-full" value={novoAtleta.time}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, time: e.target.value })
                                    }}
                                />
                            </div>
                            <div className="flex w-full">
                                <input type="text" placeholder="URL da Foto" className="bg-white text-black rounded-[2px] w-full" value={novoAtleta.img}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, img: e.target.value })
                                    }}
                                />
                            </div>
                            <div className="flex w-full gap-3">
                                <input type="text" placeholder="Gols" className="bg-white text-black rounded-[2px] w-full" value={novoAtleta.gols}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, gols: e.target.value })
                                    }}
                                />
                                <input type="text" placeholder="Assistências" className="bg-white text-black rounded-[2px] w-full" value={novoAtleta.assist}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, assist: e.target.value })
                                    }}
                                />
                            </div>
                            <div className="w-full hidden">
                                <input type="text" placeholder="ID" className="bg-white text-black rounded-[2px] w-full" value={novoAtleta.id}
                                    onChange={e => {
                                        setNovoAtleta({ ...novoAtleta, id: Number(e.target.value) })
                                    }}
                                />
                            </div>
                            <div className="lg:flex hidden flex-wrap gap-3 w-full justify-center items-center">
                                <button className="w-full p-1 bg-[#EE4D9A] text-medium transition-all hover:translate-y-1 duration-500 transform " onClick={adicionarAtleta}>Adicionar</button>
                                <div className="flex w-full justify-center gap-2">
                                    <button className=" w-full p-1 bg-[#EE4D9A] text-medium transition-all hover:translate-y-1 duration-500 transform " onClick={() => atualizarAtleta(novoAtleta)}>Atualizar</button>
                                    <button className=" w-full p-1 bg-[#EE4D9A] text-medium transition-all hover:translate-y-1 duration-500 transform " onClick={() => deletarAtleta(Number(novoAtleta.id))}>Deletar</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2]  p-3">
                            <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3]">
                                    <div className="flex relative z-10 justify-between h-full">
                                        <div className="w-auto font-medium text-white pt-2 pl-2">
                                            {novoAtleta.time}
                                        </div>

                                        <div className="flex flex-col items-center w-auto text-white pt-4 pr-4">
                                            <div className="font-thin italic leading-none text-[13px]">
                                                Jogos

                                            </div>
                                            <div className="font-bold text-3xl leading-none">
                                                {novoAtleta.jogos}
                                            </div>
                                            <div className="font-thin italic leading-none text-[13px]">
                                                {novoAtleta.pos}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex relative w-full justify-center items-start left-[0px] bottom-[64px]">
                                        <div className="flex justify-center items-center w-full h-[210px] overflow-hidden">
                                            <img src={novoAtleta.img} className="max-h-[210px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[40%] w-full bg-gradient-to-br from-[#EE4D9A] to-[#3c1970] justify-between px-5 pb-5 text-white">
                                    <div className="flex flex-col w-full items-center pt-1">
                                        <div className="leading-none font-medium text-[17px] mt-1">{novoAtleta.nome}</div>
                                        <div className="leading-none italic mb-2">{novoAtleta.sobrenome}</div>
                                        <div className="flex flex-col justify-center items-center  h-full border-2 w-[100%]">
                                            <div className="flex flex-row justify-center items-center">
                                                <div>   <FontAwesomeIcon icon={faFutbol} className="text-[22px]" /> </div>
                                                <div className="w-[50px] h-[1px] bg-white m-5"></div>
                                                <div>{novoAtleta.gols} Gols</div>
                                            </div>
                                            <div className="flex justify-center items-center text-[16px] w-[100%]">
                                                <div className="flex justify-end items-center"><img src={waiter} className="w-[22px]" /></div>
                                                <div className="w-[50px] h-[1px] bg-white m-5"></div>
                                                <div className="text-[16px]">{novoAtleta.assist} Ass.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white text-[10px] leading-0">
                                Nº{novoAtleta.id}
                            </div>

                        </div>
                        <div className="flex lg:hidden flex-wrap gap-3 w-full justify-center items-center">
                            <button className="w-full p-1 bg-[#EE4D9A] text-medium transition-all hover:translate-y-1 duration-500 transform " onClick={adicionarAtleta}>Adicionar</button>
                            <div className="flex w-full justify-center gap-2">
                                <button className=" w-full p-1 border-[#EE4D9A] border-2 text-medium transition-all hover:translate-y-1 duration-500 transform " onClick={() => atualizarAtleta(novoAtleta)}>Atualizar</button>
                                <button className=" w-full p-1 bg-red-600 text-medium transition-all hover:translate-y-1 duration-500 transform " onClick={() => deletarAtleta(Number(novoAtleta.id))}>Deletar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}