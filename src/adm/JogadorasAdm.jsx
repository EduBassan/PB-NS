import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

import waiter from "../assets/waiter.png";

export default function JogadorasDashboard() {
  const [jogadoras, setJogadoras] = useState([]);
  useEffect(() => {
    const raw = localStorage.getItem("jogadoras");
    const dados = raw ? JSON.parse(raw) : [];
    setJogadoras(dados)
    console.log(dados)
  }, []);
  

return(
  <>
  <div  className="flex flex-wrap gap-10 p-10">
  {jogadoras.map(card => (
    <div key={card.id}>
     <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2]  p-3">
                                    <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                        <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] justify-center">
                                              <div className="flex relative z-10 justify-between">
                                                <div className="w-auto font-medium text-white pl-2">
                                                    {card.possuiTime ? <p>Sem time</p> : <p>Possui time</p> }
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
                                </div>
                                
  ))}
  </div>
  </>
  )
}