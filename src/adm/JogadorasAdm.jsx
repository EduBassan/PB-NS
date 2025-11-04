import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

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

    return (
        <>
            {
                openModal && (
                    <div className="w-full h-full relative justify-center items-center z-20 flex">

                        <div className="flex flex-col gap-5 p-5">
                            <input type="text" placeholder="Nome" className="bg-white text-black" value={novoAtleta.nome}
                                onChange={e => {
                                    setNovoAtleta({ ...novoAtleta, nome: e.target.value })
                                }}
                            />
                            <input type="text" placeholder="URL da Foto" className="bg-white text-black" value={novoAtleta.foto}
                                onChange={e => {
                                    setNovoAtleta({ ...novoAtleta, foto: e.target.value })
                                }}
                            />
                            <input type="text" placeholder="Sobrenome" className="bg-white text-black" value={novoAtleta.sobrenome}
                                onChange={e => {
                                    setNovoAtleta({ ...novoAtleta, sobrenome: e.target.value })
                                }}
                            />
                            <input type="text" placeholder="Jogos" className="bg-white text-black" value={novoAtleta.jogos}
                                onChange={e => {
                                    setNovoAtleta({ ...novoAtleta, jogos: e.target.value })
                                }}
                            />
                            <input type="text" placeholder="Gols" className="bg-white text-black" value={novoAtleta.gols}
                                onChange={e => {
                                    setNovoAtleta({ ...novoAtleta, gols: e.target.value })
                                }}
                            />
                            <input type="text" placeholder="Assistências" className="bg-white text-black" value={novoAtleta.assist}
                                onChange={e => {
                                    setNovoAtleta({ ...novoAtleta, assist: e.target.value })
                                }}
                            />
                            <input type="text" placeholder="Posição" className="bg-white text-black" value={novoAtleta.pos}
                                onChange={e => {
                                    setNovoAtleta({ ...novoAtleta, pos: e.target.value })
                                }}
                            />
                            <input type="text" placeholder="Time" className="bg-white text-black" value={novoAtleta.time}
                                onChange={e => {
                                    setNovoAtleta({ ...novoAtleta, time: e.target.value })
                                }}
                            />
                            <input disabled type="text" placeholder="ID" className="bg-white text-black" value={edit.id}
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col">
                            <h2 className="text-2xl">Lembre de salvar as alterações</h2>
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
                                                    <img src={novoAtleta.foto} alt={`${novoAtleta.nome}`} className="w-34 h-34 rounded-full object-cover border-2 border-[#EE4D9A] shadow-md" />
                                                </div>
                                            </div>
                                            <div className="flex relative z-10 justify-between">
                                                <button className=" border-1 bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] border-[#EE4D9A] text-white m-1 px-3 leading-none text-[15px]" onClick={() => { atualizarAtleta(novoAtleta); }}>Salvar</button>
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
                            </div></div>


                    </div>
                )}
            <div className="flex flex-wrap gap-10 p-10">
                {jogadoras.map(card => (
                    <div key={card.id}>
                        <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2]  p-3">
                            <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] justify-center">
                                    <div className="flex relative z-10 justify-between">
                                        <div className="w-auto font-medium text-white pl-2">
                                            {card.possuiTime ? <p>Sem time</p> : <p>Possui time</p>}
                                        </div>
                                    </div>
                                    <div className="flex relative w-full">
                                        <div className="flex justify-center items-center w-full overflow-hidden">
                                            <img src={card.foto} alt={`${card.nome}`} className="w-34 h-34 rounded-full object-cover border-2 border-[#EE4D9A] shadow-md" />
                                        </div>
                                    </div>
                                    <div className="flex relative z-10 justify-between">
                                        <button className="border-1 bg-gradient-to-br from-[#713bc2] to-[#381966] border-[#EE4D9A] text-white m-1 p-3 text-[15px]" onClick={() => setEdit(card)}><FontAwesomeIcon icon={faPencil} className="text-[17px]" /></button>
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
                    </div>

                ))}
            </div>
        </>
    )
}