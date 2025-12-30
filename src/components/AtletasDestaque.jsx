import React, { use, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import waiter from "../assets/waiter.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

export default function AtletasDestaque() {
    const [atletas, setAtletas] = useState([]);
    const [cartaCriada, setCriacao] = useState(false);
    
        useEffect(() => {
            const raw = localStorage.getItem("jogadoras");
            const dados = raw ? JSON.parse(raw) : [];
            setAtletas(dados)
        }, []);

    const generateId = () => Math.floor(Math.random() * 9999);

    const isVoid = () => {
            console.log(document.getElementById('id').value)

            if(novoAtleta.nome.trim() == ""){
                alert("Preencha o nome da sua carta para continuar")
                return false
            }
            if(novoAtleta.sobrenome.trim() == ""){
                alert("Preencha o sobrenome da sua carta para continuar")
                return false
            }
             if(novoAtleta.pos.trim() == ""){
                alert("Preencha a posição da sua carta para continuar")
                return false
            }
            if(novoAtleta.foto.trim() == ""){
                alert("Preencha a URL da foto da sua carta para continuar")
                return false
            }
            if(novoAtleta.jogos.trim() == ""){
                alert("Preencha a quantidade de jogos da sua carta para continuar")
                return false
            }
            if(novoAtleta.gols.trim() == ""){
                alert("Preencha a quantidade de gols da sua carta para continuar")
                return false
            }
            if(novoAtleta.assist.trim() == ""){
                alert("Preencha a quantidade de assistências da sua carta para continuar")
                return false
            }
            return true
        }


    const [novoAtleta, setNovoAtleta] = useState({
        id: generateId(),
        nome:"",
        sobrenome:"",
        posicao:"",
        foto:"",
        jogos: "",
        gols: "",
        assist: "",
        pos: "",
        time: "",
        destaque: true
    });


    const adicionarAtleta = () => {
        setAtletas([...atletas, novoAtleta]);
        setNovoAtleta({
        id: generateId(),
        nome:"",
        sobrenome:"",
        posicao:"",
        foto:"",
        jogos: "",
        gols: "",
        assist: "",
        pos: "",
        time: "",
        destaque: true
        });
    };

    const [openModal, setModal] = useState(false)

    return (
        <>
        <div className="flex justify-center items-center flex-wrap h-auto bg-white col-span-1 lg:col-span-2 mt-20">
            <div id="cards" className="scroll-mt-7"></div>
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
                        {atletas.filter(card => card.destaque == true ).map((card, index) => (
                            <SwiperSlide
                                key={card.id}
                                className="flex items-center justify-center"
                            >
                                <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2]  p-3">
                                                                    <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                                                        <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] justify-center">
                                                                              <div className="flex relative z-10 justify-between">
                                                                                <div className="w-auto font-medium text-white pl-2">
                                                                                    {card.time}
                                                                                </div>
                                                                                </div>
                                                                            <div className="flex relative w-full">
                                                                                <div className="flex justify-center items-center w-full overflow-hidden">
                                                                                    <img src={card.foto} alt={`${card.nome}`} className="w-34 h-34 rounded-full object-cover border-2 border-[#EE4D9A] shadow-md" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex relative z-10 justify-end">
                                                                                <div className="flex flex-col items-center w-auto text-white pr-4">
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
                    <div className="w-full flex justify-center gap-3">
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


                       {!cartaCriada ? <button className=" text-[15px] font-bold text-center p-3 w-50
                      text-white bg-[#3c1970] transition-all hover:translate-y-1 duration-500 transform mt-5" onClick={() => {setModal(!openModal); !openModal ? document.getElementById('editEnd').scrollIntoView() : document.getElementById('cards').scrollIntoView()}}>Crie sua Carta</button> : <div> </div>}


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

            {openModal && (<div className="w-full">
                <div className="flex w-full h-auto justify-center items-center text-white p-2 mt-2 mb-2">
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-x-1 gap-y-3">
                        <div className="flex w-full lg:w-[30%]  items-center justify-center flex-col gap-3 p-2">
                             <div className="w-full flex">
                                        <div className="w-full flex flex-wrap mb-2">
                                            <div className="w-full flex">
                                            <div className="w-full px-3 mb-3">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="nome">
                                                    Nome
                                                </label>
                                                <input
                                                    id="nome"
                                                    type="text"
                                                    placeholder="Nome"
                                                    className="appearance-none block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                                    value={novoAtleta.nome}
                                                    onChange={e => setNovoAtleta({ ...novoAtleta, nome: e.target.value })}
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="sobrenome">
                                                    Sobrenome
                                                </label>
                                                <input
                                                    id="sobrenome"
                                                    type="text"
                                                    placeholder="Sobrenome"
                                                    className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                                                    value={novoAtleta.sobrenome}
                                                    onChange={e => setNovoAtleta({ ...novoAtleta, sobrenome: e.target.value })}
                                                />
                                            </div></div>

                                            <div className="w-full px-3 mt-3">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="foto">
                                                    URL da Foto
                                                </label>
                                                <input
                                                    id="foto"
                                                    type="text"
                                                    placeholder="URL da Foto"
                                                    className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                                                    value={novoAtleta.foto}
                                                    onChange={e => setNovoAtleta({ ...novoAtleta, foto: e.target.value })}
                                                />
                                            </div>

                                            <div className="w-full md:w-1/3 px-3 3">
                                                <label className="block text-[#3c1970] text-xs font-bold mt-2 mb-2" htmlFor="jogos">
                                                    Jogos
                                                </label>
                                                <input
                                                    id="jogos"
                                                    type="number"
                                                    placeholder="Jogos"
                                                    className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                                                    value={novoAtleta.jogos}
                                                    onChange={e => {setNovoAtleta({ ...novoAtleta, jogos: e.target.value })}}
                                                />
                                            </div>

                                            <div className="w-full md:w-1/3 px-3 mt-2">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="gols">
                                                    Gols
                                                </label>
                                                <input
                                                    id="gols"
                                                    type="number"
                                                    placeholder="Gols"
                                                    className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                                                    value={novoAtleta.gols}
                                                    onChange={e => setNovoAtleta({ ...novoAtleta, gols: e.target.value })}
                                                />
                                            </div>

                                            <div className="w-full md:w-1/3 px-3 mt-2 ">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="assist">
                                                    Assistências
                                                </label>
                                                <input
                                                    id="assist"
                                                    type="number"
                                                    placeholder="Assistências"
                                                    className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                                                    value={novoAtleta.assist}
                                                    onChange={e => setNovoAtleta({ ...novoAtleta, assist: e.target.value })}
                                                />
                                            </div>

                                            <div className="w-full md:w-1/2 px-3 mt-2">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="time">
                                                    Time
                                                </label>
                                                <input
                                                    id="time"
                                                    type="text"
                                                    placeholder="Time"
                                                    className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                                                    value={novoAtleta.time}
                                                    onChange={e => setNovoAtleta({ ...novoAtleta, time: e.target.value })}
                                                />
                                            </div>
                                            
                                            <div className="w-full md:w-1/2 px-3 mt-2">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="id">
                                                    ID
                                                </label>
                                                <input
                                                    id="id"
                                                    disabled
                                                    type="text"
                                                    placeholder="ID"
                                                    className="appearance-none block w-full bg-[#d1c3e6] text-[#3c1970] border border-[#3c1970]  py-2 px-3 leading-tight"
                                                    value={novoAtleta.id}
                                                />
                                                
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2 mt-2" htmlFor="pos">
                                                    Posição
                                                </label>
                                                <select
                                                    id="pos"
                                                    className="block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                                                    value={novoAtleta.pos}
                                                    onChange={e => setNovoAtleta({ ...novoAtleta, pos: e.target.value })}
                                                >
                                                    <option hidden>Escolha sua posição</option>
                                                    <option>ATA</option>
                                                    <option>MEI</option>
                                                    <option>ZAG</option>
                                                    <option>GOL</option>
                                                </select>
                                            </div>
                                            </div></div>
                            <div className="flex  flex-wrap gap-3 w-full justify-center items-center">
                                <button className="w-full p-1 bg-[#EE4D9A] text-medium transition-all hover:translate-y-1 duration-500 transform " onClick={() => {isVoid() ? (adicionarAtleta(), setCriacao(true), setModal(false), document.getElementById('cards').scrollIntoView()) : pass }}>Adicionar</button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2] p-3">
                                                    
                                                    <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                                        <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] justify-center">
                                                            <div className="flex relative z-10 justify-between">
                                                                <div className="w-auto font-medium text-white pl-2">
                                                                    {novoAtleta.possuiTime ? <p>Sem time</p> : <p>Possui time</p>}
                                                                </div>
                                                            </div>
                                                            <div className="flex relative w-full">
                                                                <div className="flex justify-center items-center w-full overflow-hidden">
                                                                    <img src={novoAtleta.foto ? novoAtleta.foto : "https://th.bing.com/th/id/OIP.vmoycMUOmbcs0Vw-1iIdVAHaHa?w=154&h=180&c=7&r=0&o=7&pid=1.7&rm=3"  } alt={`${novoAtleta.nome}`} className="w-34 h-34 -full object-cover border-2 border-[#EE4D9A] shadow-md rounded-full" />
                                                                </div>
                                                            </div>
                                                            <div className="flex relative z-10 justify-end">
                                                                <div className="flex flex-col items-center w-auto text-white pr-4">
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
                                                    <div className="text-white text-[10px] leading-0">Nº{novoAtleta.id}</div>
                                                </div>
                    </div>
                </div>
            </div>)}
        </div>
        <div id="editEnd" className=""></div></>
    );
}