import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";


export default function TimesAdm() {
  const [tabelaTimes, setTabela] = useState([])
   const [name, setName] = useState("")

  useEffect(() => {
    const raw = localStorage.getItem('times');
    const dados = raw ? JSON.parse(raw) : [];
    setTabela(dados)
  }, []);

  const [novoTime, setNovoAtleta] = useState({
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
        const update = jogadoras.map(a => a.id === card.id ? card : a);
        setTime(update);
    }

  return (
    <div className="flex flex-wrap justify-center items-center gap-12">
      <div className="w-full flex pt-10">
                          <span className="font-bold text-[25px] text-[#3c1970] w-full text-center">Times da Copa Passa Bola<FontAwesomeIcon icon={faUserPen} className="text-[22px]" /> </span>
                      </div>
      <div className="flex w-full justify-center items-center gap-2">
                      <FontAwesomeIcon icon={faSearch} className="text-[22px]" /> 
                      <input id="atletasSearch"
                          value={name}
                          type="text"
                          placeholder="Pesquise uma atleta pelo nome..."
                          className="appearance-none block w-[71%] bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]" onChange={(e) => setName(e.target.value)}></input>
                      </div>
      {tabelaTimes.filter((time) => time.nome.toLowerCase().includes(name.toLowerCase())).map((card) => (
        <div key={card.id}>
        
                                {card.destaque ? <div className="w-full text-center"><FontAwesomeIcon icon={faStar} className="text-[22px] text-[#EE4D9A]" /></div> : <div className="h-[25.5px] w-full"></div>}
        
                                <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2] p-3">
        
                                    <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                                        <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] justify-center">
                                            <div className="mt-5 flex relative w-full">
                                                <div className="flex justify-center items-center w-full overflow-hidden">
                                                    <img src={card.foto} alt={`${card.nome}`} className="w-34 h-34 -full object-cover   rounded-full" />
                                                </div>
                                            </div>
                                            <div className="flex relative z-10 justify-between">
                                              
                                              <div className="flex flex-col items-center w-auto text-white pr-4">
                                                    <div className="font-thin italic leading-none text-[13px] pl-3">
                                                        Posição
                                                    </div>
                                                    <div className="font-bold text-3xl leading-none pl-3">
                                                       {card.pos}º
                                                    </div>
                                                    
                                                </div>
                                    
                                                <div className="flex flex-col items-center w-auto text-white pr-4">
                                                    <div className="font-thin italic leading-none text-[13px]">
                                                        Pontos
                                                    </div>
                                                    <div className="font-bold text-3xl leading-none">
                                                        {card.pontos}
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex h-[40%] w-full bg-gradient-to-br from-[#EE4D9A] to-[#3c1970] justify-between px-5 pb-5 text-white">
                                            <div className="flex flex-col w-full items-center pt-1">
                                                <div className="leading-none font-medium text-[17px] mt-1">{card.nome}</div>
                                                <div className="leading-none italic mb-2">{card.sobrenome}</div>
                                                <div className="flex flex-col justify-center items-center  h-full border-2 w-[100%]">
                                                  <div>{card.vitorias} -  Vitória{Number(card.vitorias) > 1 ? "s" : ""}</div>
                                                  <div>{card.empates} - Empate{Number(card.empates) > 1 ? "s" : ""} </div>
                                                  <div>{card.derrotas} - Derrota{Number(card.derrotas) > 1 ? "s" : ""} </div>
                                                    
                                                </div>
                                            </div>
        
                                        </div>
        
                                    </div>
                                    <div className="text-white text-[10px] leading-0">Nº{card.id}</div>
                                </div>
                                <div className="w-full flex">
                                    <button className="border-1 bg-[#3c1970] w-[50%] text-white m-1 p-1 text-[15px]" onClick={() => { setEdit(card); document.getElementById('editTop').scrollIntoView() }}><FontAwesomeIcon icon={faPencil} className="text-[17px]" /></button>
                                    <button className="border-1 bg-[#713bc2] w-[50%] text-white m-1 p-1 text-[15px]" onClick={() => destacarAtleta(card)}><FontAwesomeIcon icon={faHeart} className="text-[17px]" /></button></div></div>
      
      ))
      }
    </div>
  )

}

const treino = {
  segunda:{
    peito:{
      flyer:{
        repetições: 4x12
        obs: "aqueleQueFazAssim"
      }
      supinoInclinado:{
        repetições: 4x12
      }
      supinoReto:{
        repetições: 4x12
      }

    }
    triceps:{
      tricepsPararela:{
        repetições: 4x12
      }
      tricepsCorda:{
        repetições: 4x12
      }
    }
  }
  terca:{
    costas:{
      puxadaAltaBarraReta:{
        repetições: 4x12
      }
      puxadaAltaTriangulo:{
        repetições: 4x12
      }
      remadaNaMáquina:{
        repetições: 4x12
      }

    }
    biceps:{
      martelinho:{
        repetições: 4x12
      }
      bicepsRoscaDiretaCotoveloIsolado:{
        repetições: 4x12
      }
    }
  }
  quarta:{
    perna:{
      cadeiraExtensora:{
        repetições: 4x12
      }
      cadeiraFlexora:{
        repetições: 4x12
      }
      legPress:{
        repetições: 4x12
      }

    }
    panturrila:{
      cadeira:{
        repetições: 4x12
      }
      emPé:{
        repetições: 4x12
      }
    }
  }
   quinta:{
    ombro:{
      desenvolvimentoHalter:{
        repetições: 4x12
      }
      elevaçãoLateral:{
        repetições: 4x12
      }
      elevaçãoFrontal:{
        repetições: 4x12
      }

    }
    extras:{
      antebraço:{
        repetições: 4x12
      }
      trapézio:{
        repetições: 4x12
      }
    }
  }
  
}

