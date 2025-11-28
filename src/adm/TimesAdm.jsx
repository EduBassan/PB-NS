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
  const [init, setInit] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem('times');
    const dados = raw ? JSON.parse(raw) : [];
    setTabela(dados)
    setInit(true)
  }, []);

  useEffect(() => {
    if (init) {
      localStorage.setItem('times', JSON.stringify(tabelaTimes))
    }
  }, [init, tabelaTimes])

  const [edit, setEdit] = useState(null)
  const [openModal, setModal] = useState(false)

  useEffect(() => {
    if (edit != null) {
      setModal(true)
      setNovoTime(edit)
    }
  }, [edit])


  const [novoTime, setNovoTime] = useState({
    id: "",
    nome: "",
    senha: "",
    cidade: "",
    responsavel: "",
    email: "",
    telefone: "",
    numero: "",
    foto: "",
    jogadoras: "",
    candidatas: "",
    tipo: "",
    pos: "",
    jogos: "",
    pontos: "",
    vitorias: "",
    empates: "",
    derrotas: "",
    destaque: ""
  });

  const atualizarTime = (novoTime) => {
    const update = tabelaTimes.map(a => a.id == novoTime.id ? novoTime : a);
    setTabela(update)
    setNovoTime({
      id: "",
      nome: "",
      senha: "",
      cidade: "",
      responsavel: "",
      email: "",
      telefone: "",
      numero: "",
      foto: "",
      jogadoras: "",
      candidatas: "",
      tipo: "",
      pos: "",
      jogos: "",
      pontos: "",
      vitorias: "",
      empates: "",
      derrotas: "",
      destaque: ""
    });
    setEdit(null);
    setModal(false);
  };

  const destacarTime = (card) => {
    card.destaque = !card.destaque
    const update = tabelaTimes.map(a => a.id === card.id ? card : a);
    setTabela(update);
  }

  return (
    <div className="col w-full h-full justify-center items-center"> 
      {
        openModal ? (
          <div className="w-full relative z-20 flex justify-center items-center">
            <div className="flex flex-wrap w-full h-auto justify-center items-center text-white p-2 mt-2 mb-2">

              <div id='editTop' className="w-full flex">
                <span className="font-bold text-[25px] text-[#3c1970] w-full text-center">Lembre-se de Salvar as Alterações<FontAwesomeIcon icon={faSave} className="text-[22px]" />  </span></div>

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
                            value={novoTime.nome}
                            onChange={e => setNovoTime({ ...novoTime, nome: e.target.value })}
                          />
                        </div>
                        <div className="w-full px-3">
                          <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="Posição">
                            Posição
                          </label>
                          <input
                            id="posicao"
                            type="number"
                            min="0"
                            placeholder="Posição do Time"
                            className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                            value={novoTime.pos}
                            onInput={e => (setNovoTime({ ...novoTime, pos: e.target.value }))}
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
                          value={novoTime.foto}
                          onChange={e => setNovoTime({ ...novoTime, foto: e.target.value })}
                        />
                      </div>

                      <div className="w-full md:w-1/3 px-3 3">
                        <label className="block text-[#3c1970] text-xs font-bold mt-2 mb-2" htmlFor="vitórias">
                          Vitórias
                        </label>
                        <input
                          id="vitórias"
                          type="number"
                          min="0"
                          placeholder="V"
                          className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                          value={novoTime.vitorias}
                          onChange={e => setNovoTime({ ...novoTime, vitorias: e.target.value })}
                        />
                      </div>

                      <div className="w-full md:w-1/3 px-3 mt-2">
                        <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="empates">
                          Empates
                        </label>
                        <input
                          id="empates"
                          type="number"
                          min="0"
                          placeholder="E"
                          className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                          value={novoTime.empates}
                          onChange={e => setNovoTime({ ...novoTime, empates: e.target.value })}
                        />
                      </div>

                      <div className="w-full md:w-1/3 px-3 mt-2 ">
                        <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="derrotas">
                          Derrotas
                        </label>
                        <input
                          id="derrotas"
                          type="number"
                          min="0"
                          placeholder="D"
                          className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                          value={novoTime.derrotas}
                          onChange={e => setNovoTime({ ...novoTime, derrotas: e.target.value })}
                        />
                      </div>
                      <div className="w-full px-3 mt-2 ">
                        <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="jogos">
                          Jogos
                        </label>
                        <input
                          id="jogos"
                          type="number"
                          min="0"
                          placeholder="Jogos"
                          className="appearance-none block w-full bg-white text-black border border-[#3c1970]  py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#713bc2]"
                          value={novoTime.jogos}
                          onChange={e => setNovoTime({ ...novoTime, jogos: e.target.value })}
                        />
                      </div>
                      <div className="w-full px-3 mt-2">
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
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col mt-4">
                  <div key={edit.id}>
                    <div className="flex flex-col items-center h-[395px] w-[291px] bg-[#713bc2] p-3">

                      <div className="flex flex-wrap h-full w-full bg-[#EE4D9A] p-1 justify-center">
                        <div className="flex flex-col h-[60%] w-full  bg-gradient-to-br from-[#713bc2] via-[#3c1970] to-[#5927a3] justify-center">
                          <div className="mt-5 flex relative w-full">
                            <div className="flex justify-center items-center w-full overflow-hidden">
                              <img src={novoTime.foto} alt={`${edit.nome}`} className="w-34 h-34 -full object-cover rounded-full" />
                            </div>
                          </div>
                          <div className="flex relative z-10 justify-between">

                            <div className="flex flex-col items-center w-auto text-white pr-4">
                              <div className="font-thin italic leading-none text-[13px] pl-3">
                                Posição
                              </div>
                              <div className="font-bold text-3xl leading-none pl-3">
                                {novoTime.pos}º
                              </div>

                            </div>

                            <div className="flex flex-col items-center w-auto text-white pr-4">
                              <div className="font-thin italic leading-none text-[13px]">
                                Pontos
                              </div>
                              <div className="font-bold text-3xl leading-none">
                                {novoTime.pontos}
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="flex h-[40%] w-full bg-gradient-to-br from-[#EE4D9A] to-[#3c1970] justify-between px-5 pb-5 text-white">
                          <div className="flex flex-col w-full items-center pt-1">
                            <div className="leading-none font-medium text-[17px] mt-1 mb-[0.5px] ">{novoTime.nome}</div>
                            <div className="mb-1">{novoTime.jogos} Jogos</div>
                            <div className="flex flex-col justify-center items-center  h-full border-2 w-[100%]">
                              <div>{novoTime.vitorias} -  Vitória{Number(novoTime.vitorias) > 1 ? "s" : ""}</div>
                              <div>{novoTime.empates} - Empate{Number(novoTime.empates) > 1 ? "s" : ""} </div>
                              <div>{novoTime.derrotas} - Derrota{Number(novoTime.derrotas) > 1 ? "s" : ""} </div>

                            </div>
                          </div>

                        </div>

                      </div>
                      <div className="text-white text-[10px] leading-0">Nº{edit.id}</div>
                    </div>

                  </div>
                  <div className="flex w-full justify-between mt-5">
                    <button className="text-[15px] font-bold text-center p-1 w-[49%]
                                                      text-white bg-[#EE4D9A] transition-all hover:translate-y-1 duration-500 transform" onClick={() => {

                        if(novoTime.pos == ""){
                          alert("Não esqueça de preencher mais tarde ou o time não aparecerá na tabela")
                          atualizarTime(novoTime);
                        }
                        else{
                        if (tabelaTimes.some(a => a.pos === novoTime.pos && a.pos != edit.pos)) {
                          alert("Já existe um time ocupando esta posição");
                        } else {
                          atualizarTime(novoTime);
                        }}
                      }
                      }>Salvar</button>
                    <button className="text-[15px] font-bold text-center p-1 w-[49%]
                                                      text-white bg-[#f32133] transition-all hover:translate-y-1 duration-500 transform" onClick={() => { setEdit(null); setModal(false); }}>Cancelar</button>
                  </div></div>
              </div></div>


          </div>
        ) : <div id='editTop' className=""> </div>}


      <div className="flex flex-wrap justify-center items-center gap-12">
        <div className="w-full flex pt-10">
          <span className="font-bold text-[25px] text-[#3c1970] w-full text-center">Times da Copa Passa Bola<FontAwesomeIcon icon={faUserPen} className="text-[22px]" /> </span>
        </div>
        <div className="flex w-full justify-center items-center gap-2">
          <FontAwesomeIcon icon={faSearch} className="text-[22px]" />
          <input id="timeSearch"
            value={name}
            type="text"
            placeholder="Pesquise um time pelo nome..."
            className="appearance-none block w-[71%] bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]" onChange={(e) => setName(e.target.value)}></input>
        </div>
        {tabelaTimes.sort((a, b) => a.pos - b.pos).filter((time) => time.nome.toLowerCase().includes(name.toLowerCase())).map((card) => (
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
                    <div className="leading-none font-medium text-[17px] mt-1 mb-[0.5px] ">{card.nome}</div>
                    <div className="mb-1">{card.jogos} Jogos</div>
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
              <button className="border-1 bg-[#713bc2] w-[50%] text-white m-1 p-1 text-[15px]" onClick={() => destacarTime(card)}><FontAwesomeIcon icon={faHeart} className="text-[17px]" /></button></div></div>

        ))
        }
      </div>
    </div>
  )

}

