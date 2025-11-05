import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import waiter from "../assets/waiter.png";

export default function JogadorasDashboard() {

    const [jogadoras, setJogadoras] = useState([]);
    const [init, setInit] = useState(false)

    useEffect(() => {
        const raw = localStorage.getItem("jogadoras");
        const dados = raw ? JSON.parse(raw) : [];
        setJogadoras(dados)
        setInit(true)
    }, []);


    useEffect(() => {
        if (init) {
            localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
        }
    }, [init, jogadoras]);

    const [edit, setEdit] = useState(null)
    const [openModal, setModal] = useState(false)
    useEffect(() => {
        if (edit !== null) {
            setModal(true)
            setNovoAtleta(edit)
        }
    }, [edit]);

    const [novoAtleta, setNovoAtleta] = useState({
        id: "",
        nome: "",
        sobrenome: "",
        time: "",
        jogos: "",
        gols: "",
        assist: "",
        pos: "",
        foto: ""
    });

    const atualizarAtleta = (novoAtleta) => {
        const update = jogadoras.map(a => a.id === novoAtleta.id ? novoAtleta : a);
        setJogadoras(update)
        setNovoAtleta({
            id: edit.id,
            nome: "",
            sobrenome: "",
            foto: "",
            jogos: "",
            gols: "",
            assist: "",
            pos: "",
            time: ""
        });
        setEdit(null);
        setModal(false);
    };

    const destacarAtleta = (card) => {
        card.destaque = !card.destaque
        const update = jogadoras.map(a => a.id === card.id ? card : a );
        setJogadoras(update);}

    return (
        <>
            {
                openModal && (
                    <div className="w-full h-full relative z-20 flex">
                        <div className="flex flex-wrap w-full h-auto justify-center items-center text-white p-2 mt-2 mb-2">

                            <div className="w-full flex">
                                <span className="font-bold text-[25px] text-[#3c1970] w-full text-center">Lembre-se de Salvar as Alterações<FontAwesomeIcon icon={faUserPen} className="text-[22px]" />  </span></div>

                            <div className="w-full flex flex-col lg:flex-row md:max-w-[70%] items-center justify-center gap-12">
                                
                                <div className="flex flex-col gap-3 pt-5">

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
                                                    type="text"
                                                    placeholder="Jogos"
                                                    className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                                                    value={novoAtleta.jogos}
                                                    onChange={e => setNovoAtleta({ ...novoAtleta, jogos: e.target.value })}
                                                />
                                            </div>

                                            <div className="w-full md:w-1/3 px-3 mt-2">
                                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="gols">
                                                    Gols
                                                </label>
                                                <input
                                                    id="gols"
                                                    type="text"
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
                                                    type="text"
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
                                                    type="text"
                                                    placeholder="ID"
                                                    className="appearance-none block w-full bg-[#d1c3e6] text-[#3c1970] border border-[#3c1970]  py-2 px-3 leading-tight"
                                                    disabled
                                                    value={edit.id}
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
                                        </div>
                                         </div>
                                </div>
                                <div className="flex justify-center items-center flex-col mt-4">
                                    <div key={edit.id}>
                                        <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2]  p-3">
                                            <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                                <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] justify-center">
                                                    <div className="flex relative z-10 justify-between">
                                                        <div className="w-auto font-medium text-white pl-2">
                                                            {novoAtleta.possuiTime ? <p>Sem time</p> : <p>Possui time</p>}
                                                        </div>
                                                    </div>
                                                    <div className="flex relative w-full">
                                                        <div className="flex justify-center items-center w-full overflow-hidden">
                                                            <img src={novoAtleta.foto} alt={`${novoAtleta.nome}`} className="w-34 h-34 -full object-cover border-2 rounded-full border-[#EE4D9A] shadow-md" />
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
                                            <div className="text-white text-[10px] leading-0">Nº{edit.id}</div>
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-between mt-5">
                                        <button className="text-[15px] font-bold text-center p-1 w-[49%]
                                                text-white bg-[#EE4D9A] transition-all hover:translate-y-1 duration-500 transform" onClick={() => { atualizarAtleta(novoAtleta); }}>Salvar</button>
                                        <button className="text-[15px] font-bold text-center p-1 w-[49%]
                                                text-white bg-[#f32133] transition-all hover:translate-y-1 duration-500 transform" onClick={() => { setEdit(null); setModal(false); }}>Cancelar</button>
                                    </div></div>
                                    </div></div>


                    </div>
                )}
            <div className="flex justify-center flex-wrap gap-10 p-10">

                    <div className="w-full flex">
                                <span className="font-bold text-[25px] text-[#3c1970] w-full text-center">Atletas da Copa Passa Bola<FontAwesomeIcon icon={faUserPen} className="text-[22px]" />  </span></div>


                {jogadoras.map(card => (
                    <div key={card.id}>

                        {card.destaque ? <div className="w-full text-center"><FontAwesomeIcon icon={faStar}className="text-[22px] text-[#EE4D9A]" /></div> : <div className="h-[25.5px] w-full"></div>}
            
                        
                        <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2] p-3">
                            
                            <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] justify-center">
                                    <div className="flex relative z-10 justify-between">
                                        <div className="w-auto font-medium text-white pl-2">
                                            {card.possuiTime ? <p>Sem time</p> : <p>Possui time</p>}
                                        </div>
                                    </div>
                                    <div className="flex relative w-full">
                                        <div className="flex justify-center items-center w-full overflow-hidden">
                                            <img src={card.foto} alt={`${card.nome}`} className="w-34 h-34 -full object-cover border-2 border-[#EE4D9A] shadow-md rounded-full" />
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
                        <div className="w-full flex">
                        <button className="border-1 bg-[#3c1970] w-[50%] text-white m-1 p-1 text-[15px]" onClick={() => setEdit(card)}><FontAwesomeIcon icon={faPencil} className="text-[17px]" /></button>
                        <button className="border-1 bg-[#713bc2] w-[50%] text-white m-1 p-1 text-[15px]" onClick={() => destacarAtleta(card) }><FontAwesomeIcon icon={faHeart} className="text-[17px]" /></button></div>
                    </div>
                        //lpo 
                ))}
            </div>
        </>
    )
}