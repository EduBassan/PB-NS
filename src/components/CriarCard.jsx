import React, { useState } from "react";

export default function CriarCard() {
            const [novoAtleta, setNovoAtleta] = useState({
        id:"",
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
        id:"",                     
        nome: "",
        sobrenome: "",
        img: "",
        jogos: "",
        gols: "",
        assist: "",
        pos: "",
        time: ""
    });}
    return(

        <div className="flex w-full h-50 bg-[#3c1970] justify-center items-center text-white">
                <div>
                        <input type="text" placeholder="nome" className="bg-white text-black" value={novoAtleta.nome}
                        onChange={e => {
                            setNovoAtleta({ ...novoAtleta, nome: e.target.value })}}
                        />
                        <input type="text" placeholder="imagem" className="bg-white text-black" value={novoAtleta.img}
                        onChange={e => {
                            setNovoAtleta({ ...novoAtleta, img: e.target.value })}}
                        />
                        <input type="text" placeholder="sobrenome" className="bg-white text-black" value={novoAtleta.sobrenome}
                        onChange={e => {
                            setNovoAtleta({ ...novoAtleta, sobrenome: e.target.value })}}
                        />
                        <input type="text" placeholder="jogos" className="bg-white text-black" value={novoAtleta.jogos}
                        onChange={e => {
                            setNovoAtleta({ ...novoAtleta, jogos: e.target.value })}}
                        />
                        <button onClick={adicionarAtleta}>Adicionar</button>
                </div>
            </div>);
}