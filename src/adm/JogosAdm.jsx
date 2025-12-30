import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function JogosAdm() {

    const isVoid = () => {
        console.log(novoJogo.id)
            if(novoJogo.id.trim() == ""){
                alert("Preencha o ID do jogo para continuar")
                return false
            }
            if(dayNumber == ""){
                alert("Preencha a data do jogo para continuar")
                return false
            }
            if(dataNumber == ""){
                alert("Preencha a data do jogo para continuar")
                return false
            }
             if(novoJogo.timeCasa.trim() == ""){
                alert("Preencha o time mandante para continuar")
                return false
            }
            if(novoJogo.timeFora.trim() == ""){
                alert("Preencha o time visitante para continuar")
                return false
            }
            if(novoJogo.hora.trim() == ""){
                alert("Preencha o horário do jogo para continuar")
                return false
            }
            if(novoJogo.estadio.trim() == ""){
                alert("Preencha o nome do estádio para continuar")
                return false
            }
            if(novoJogo.hashtag.trim() == ""){
                alert("Preencha o nome do confronto para continuar")
                return false
            }
            return true
        }

    const [times, setTimes] = useState([])

    useEffect(() => {
        const raw = localStorage.getItem("times");
        const dados = JSON.parse(raw);
        setTimes(dados);
    }, []);


    const [init, setInit] = useState(false)
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        const raw = localStorage.getItem("jogos")
        const dados = raw ? JSON.parse(raw) : []
        setJogos(dados)
        setInit(true)
    }, [])

    useEffect(() => {
        if (init) {
            localStorage.setItem('jogos', JSON.stringify(jogos))
        }
    })
    const [novoJogo, setNovoJogo] = useState(
        {
            id: " ",
            dayNumber: "",
            dataNumber: "",
            timeCasa: "",
            logoCasa: "",
            golsCasa: "",
            timeFora: "",
            logoFora: "",
            golsFora: "",
            estadio: "",
            hora: "",
            hashtag: "",
            futuro: false
        }
    );

    const atualizarJogos = (jogo) => {
        const update = jogos.map((a) => jogo.id === a.id ? jogo : a);
        setJogos(update);
        setNovoJogo(
            {
                id: "",
                dayNumber: "",
                dataNumber: "",
                timeCasa: "", 
                logoCasa: "",
                golsCasa: "",
                timeFora: "",
                logoFora: "",
                golsFora: "",
                estadio: "",
                hora: "",
                hashtag: "",
                futuro: true
            }
        );
        setModal(null)
    };
    const adicionarJogo = (jogo) => {
        const update = [jogo, ...jogos]
        setJogos(update);
        setNovoJogo(
            {
                id: "",
                dayNumber: "",
                dataNumber: "",
                timeCasa: "",
                logoCasa: "",
                golsCasa: "",
                timeFora: "",
                logoFora: "",
                golsFora: "",
                estadio: "",
                hora: "",
                hashtag: "",
                futuro: true
            }
        );
        setModal(null)
    };

    const months = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    const days = Array.from({ length: 31 }, (_, i) => String(i + 1))

    const [modal, setModal] = useState(null);
    const [modalNovo, setModalNovo] = useState(false)

    const abrirModal = (jogo, novo) => {
        setNovoJogo(
            {
                id: "",
                dayNumber: "",
                dataNumber: "",
                timeCasa: "",
                logoCasa: "",
                golsCasa: "",
                timeFora: "",
                logoFora: "",
                golsFora: "",
                estadio: "",
                hora: "",
                hashtag: "",
                futuro: true
            })
        novo ? setModalNovo(true) : setModalNovo(false)
        setNovoJogo(jogo)
        setModal(jogo)
    };


    const alteraEstado = (jogo) => {
        setNovoJogo({ ...jogo, futuro: !jogo.futuro })
    }

    const alteraExibicao = (jogo) => {
        jogo.exibir = !jogo.exibir
        const update = jogos.map((a) => a.id === jogo.id ? jogo : a)
        setJogos(update)
    }

    return (<><div className="flex my-10 justify-center items-center flex-wrap gap-7">

        <div className="flex w-full justify-center">


            {!modal ? <div id="modalTop"></div> : (
                <div id="modalTop" className="flex w-full flex-wrap-reverse gap-4 justify-center items-end">
                    <div className="">
                        <div className="w-full flex flex-col">
                            <div className="w-full px-3 mb-3">
                                <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="hashtag">
                                    Hashtag
                                </label>
                                <input
                                    id="hashtag"
                                    type="text"
                                    placeholder="Nome do Confronto"
                                    className="appearance-none block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                    value={novoJogo.hashtag}
                                    onChange={e => setNovoJogo({ ...novoJogo, hashtag: e.target.value })}
                                />
                            </div>
                            <div className="w-full px-3 mb-3">
                                <p className="text-[#3c1970] text-xs font-bold ">Qual estado da partida?</p>
                                <button className={novoJogo.futuro ? "mt-1 w-full bg-[#3C1A6E] border-2 border-[#3C1A6E] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#3C1A6E] transition-all hover:duration-500" : "mt-1 bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#EE4D9A] transition-all hover:duration-500 w-full"} onClick={() => { alteraEstado(novoJogo) }}>
                                    {novoJogo.futuro ? "Agendada" : "Finalizada"}
                                </button></div>
                            <div className="flex flex-row flex-nowrap">

<div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="matchDate">
                                        Dia da Partida
                                    </label>
                                    <select
                                        id="matchDate"
                                        type="number"
                                        placeholder="Nome do Confronto"
                                        className="block w-[100%] bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                        value={novoJogo.dayNumber}
                                        onChange= {e => {setNovoJogo({...novoJogo,dayNumber: e.target.value})}}
                                    >
                                        {days.map(a => <option value={a}>{a}</option>)}
                                    </select>
                                    
                                    
                                    
                                </div>

                                <div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="matchDate">
                                        Mês da Partida
                                    </label>
                                    <select
                                        id="matchDate"
                                        type="number"
                                        placeholder="Nome do Confronto"
                                        className="block w-[100%] bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                        value={novoJogo.dataNumber}
                                        onChange= {e => {setNovoJogo({...novoJogo, dataNumber: e.target.value})}}
                                    >
                                        {months.map(a => <option value={a}>{a}</option>)}
                                    </select>
                                    
                                    
                                    
                                </div>
                                
                                <div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="id">
                                        Id
                                    </label>
                                    <input
                                        id="id"
                                        type="number"
                                        placeholder="Número da Partida"
                                        className="appearance-none block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                        value={novoJogo.id}
                                        onChange={e => setNovoJogo({ ...novoJogo, id: e.target.value })}
                                    />
                                </div>
                            </div>

                            {modalNovo ? (

                            <div className="flex flex-row flex-nowrap">
                                <div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="timeM">
                                        Time Mandante
                                    </label>
                                    <select className="block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]" onChange={(e) => setNovoJogo({...novoJogo,timeCasa: e.target.value.split("|")[1], logoCasa: e.target.value.split("|")[0] }) }>
                                        <option disabled selected>Escolha um time</option>
                                        {times.map((a) => (<option value={`${a.foto} | ${a.nome}`}>{a.nome}</option>))}
                                    </select>
                                </div>
                                <div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="timeVG">
                                        Time Visitante
                                    </label>
                                    <select className="block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]" onChange={(e) => setNovoJogo({...novoJogo,timeFora: e.target.value.split("|")[1], logoFora:e.target.value.split("|")[0] }) }>
                                        <option disabled selected>Escolha um time</option>
                                        {times.map((a) => (<option value={`${a.foto} | ${a.nome}`}>{a.nome}</option>))}
                                    </select>
                                </div>
                            </div>) : ""}


                            
                            <div className="flex flex-row flex-nowrap">
                                <div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="timeMG">
                                        Gols do Time Mandante
                                    </label>
                                    <input
                                        id="timeMG"
                                        type="number"
                                        placeholder="Quantidade de Gols"
                                        className="appearance-none block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                        value={novoJogo.golsCasa}
                                        onChange={e => setNovoJogo({ ...novoJogo, golsCasa: e.target.value })}
                                    />
                                </div>
                                <div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="timeVG">
                                        Gols do Time Visitante
                                    </label>
                                    <input
                                        id="timeVG"
                                        type="number"
                                        placeholder="Quantidade de Gols"
                                        className="appearance-none block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                        value={novoJogo.golsFora}
                                        onChange={e => setNovoJogo({ ...novoJogo, golsFora: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row flex-nowrap">

                                <div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="estadio">
                                        Local do jogo
                                    </label>
                                    <input
                                        id="estadio"
                                        type="text"
                                        placeholder="Nome do Estádio"
                                        className="appearance-none block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                        value={novoJogo.estadio}
                                        onChange={e => setNovoJogo({ ...novoJogo, estadio: e.target.value })}
                                    />
                                </div>
                                <div className="w-full px-3 mb-3">
                                    <label className="block text-[#3c1970] text-xs font-bold mb-2" htmlFor="timeVG">
                                        Horário da Partida
                                    </label>
                                    <input
                                        id="horario"
                                        type="time"
                                        placeholder="Horário da Partida"
                                        className="appearance-none block w-full bg-white text-black p-2 leading-tight focus:outline-none focus:ring-2 border border-[#3c1970] focus:ring-[#713bc2]"
                                        value={novoJogo.hora}
                                        min={"00:00"}
                                        max={"23:59"}
                                        onChange={e => setNovoJogo({ ...novoJogo, hora: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-nowrap gap-2">
                                {modalNovo ? (
                                    <button className="w-[100%] mt-2 bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#EE4D9A] transition-all hover:duration-500" onClick={() => {isVoid() && adicionarJogo(novoJogo)}}>
                                        Criar Novo
                                    </button>) : ""}
                                {!modalNovo ? (
                                    <button className="w-[100%] mt-2 bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#EE4D9A] transition-all hover:duration-500" onClick={() => { atualizarJogos(novoJogo) }}>
                                        Atualizar
                                    </button>) : ""}

                                <button className="w-[100%] mt-2 bg-[#3C1A6E] border-2 border-[#3C1A6E] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#3C1A6E] transition-all hover:duration-500" onClick={() => {
                                    setModal(null); setNovoJogo(
                                        {
                                            id: "",
                                            dayNumber: "",
                                            dataNumber: "",
                                            timeCasa: "",
                                            logoCasa: "",
                                            golsCasa: "",
                                            timeFora: "",
                                            logoFora: "",
                                            golsFora: "",
                                            estadio: "",
                                            hora: "",
                                            hashtag: "",
                                            futuro: true
                                        }
                                    );
                                }}>
                                    Cancelar
                                </button>
                            </div>
                        </div>

                    </div>

                    <div
                        key={novoJogo.id}
                        className="border border-pink-200 rounded-lg shadow-md w-full max-w-[320px] p-5 flex flex-col items-center"
                    >
                        <span className="text-xs text-[#EE4D9A] font-semibold border border-pink-300 rounded-full px-3 py-0.5 mb-3">
                            {novoJogo.hashtag}
                        </span>

                        <div className="bg-[#3C1A6E] text-white px-4 py-1 text-sm font-semibold mb-4">
                            {`${novoJogo.dayNumber} ${novoJogo.dataNumber}`}
                        </div>

                        <div className="flex items-center justify-center gap-4 mb-3">
                            <div className="flex flex-col items-center">
                                <img
                                    src={novoJogo.logoCasa}
                                    alt={novoJogo.timeCasa}
                                    className="w-22 h-22 object-contain mb-1"
                                />
                                <span className="text-lg font-bold">{novoJogo.futuro ? "" : novoJogo.golsCasa}</span>
                            </div>

                            <span className="text-3xl font-extrabold text-gray-800">VS</span>

                            <div className="flex flex-col items-center">
                                <img
                                    src={novoJogo.logoFora}
                                    alt={novoJogo.timeFora}
                                    className="w-22 h-22 object-contain mb-1"
                                />
                                <span className="text-lg font-bold">{novoJogo.futuro ? "" : novoJogo.golsFora}</span>
                            </div>
                        </div>

                        <p className="text-[#EE4D9A] font-semibold text-sm uppercase">
                            {novoJogo.estadio} – {novoJogo.hora}H
                        </p>
                    </div></div>)}
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-2">
            <span className="font-bold text-[25px] text-[#3c1970] w-full text-center">Jogos da Copa Passa Bola<FontAwesomeIcon icon={faFutbol} className="text-[22px]" /> </span>
            <button className="w-auto mt-2 bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#EE4D9A] transition-all hover:duration-500" onClick={() => abrirModal(novoJogo, true)}>
                Criar Novo Jogo <span className="font-extrabold text-xl leading-none">+</span>
            </button>
        </div>
        {jogos.map((jogo) => (
            <div
                key={jogo.id}
                className="border border-pink-200 rounded-lg shadow-md w-full max-w-[320px] p-5 flex flex-col items-center"
            >
                <span className="text-xs text-[#EE4D9A] font-semibold border border-pink-300 rounded-full px-3 py-0.5 mb-3">
                    {jogo.hashtag}
                </span>

                <div className="bg-[#3C1A6E] text-white px-4 py-1 text-sm font-semibold mb-4">
                   {`${jogo.dayNumber} ${jogo.dataNumber}`}
                </div>

                <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="flex flex-col items-center">
                        <img
                            src={jogo.logoCasa}
                            alt={jogo.timeCasa}
                            className="w-22 h-22 object-contain mb-1"
                        />
                        <span className="text-lg font-bold">{jogo.futuro ? "" : jogo.golsCasa}</span>
                    </div>

                    <span className="text-3xl font-extrabold text-gray-800">VS</span>

                    <div className="flex flex-col items-center">
                        <img
                            src={jogo.logoFora}
                            alt={jogo.timeFora}
                            className="w-22 h-22 object-contain mb-1"
                        />
                        <span className="text-lg font-bold">{jogo.futuro ? "" : jogo.golsFora}</span>
                    </div>
                </div>

                <p className="text-[#EE4D9A] font-semibold text-sm uppercase">
                    {jogo.estadio} – {jogo.hora}h
                </p>

                <div className="w-full flex flex-nowrap gap-2">
                    <button className={!jogo.exibir ? "mt-4 w-full bg-[#3C1A6E] border-2 border-[#3C1A6E] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#3C1A6E] transition-all hover:duration-500" : "mt-4 w-full bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#EE4D9A] transition-all hover:duration-500"} onClick={() => { alteraExibicao(jogo) }}>
                        {!jogo.exibir ? <FontAwesomeIcon icon={faEyeSlash} className="text-[17px]" /> : <FontAwesomeIcon icon={faEye} className="text-[17px]" />}
                    </button>
                    <button className="w-full mt-4 bg-[#EE4D9A] border-2 border-[#EE4D9A] text-white font-semibold text-sm py-2 px-6 hover:bg-white hover:text-[#EE4D9A] transition-all hover:duration-500" onClick={() => { document.getElementById('modalTop').scrollIntoView(); abrirModal(jogo, false) }}>
                        <FontAwesomeIcon icon={faPencil} className="text-[17px]" />
                    </button>
                </div>
            </div>
        ))}



    </div>
    </>)
};