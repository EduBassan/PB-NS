import { jogadoras } from "./jogadoras";
import { times } from "./times";
import { adm } from "./adm"
import { pedidos } from "./pedidosAtletas";
import { usuarioLogadoInicial } from "./usuarioLogadoInicial";
import { pedidosTimes } from "./pedidosTimes";
import {atletasDestaque} from "./atletasDestaque"



if (!localStorage.getItem("atletasDestaque")) {
  localStorage.setItem("atletasDestaque", JSON.stringify(atletasDestaque))
}

if (!localStorage.getItem("jogadoras")) {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras))
}

if (!localStorage.getItem("times")) {
  localStorage.setItem("times", JSON.stringify(times))
}

if (!localStorage.getItem("adm")) {
  localStorage.setItem("adm", JSON.stringify(adm))
}

if (!localStorage.getItem("pedidosTimes")) {
  localStorage.setItem("pedidosTimes", JSON.stringify(pedidosTimes))
}

if (!localStorage.getItem("pedidos")) {
  localStorage.setItem("pedidos", JSON.stringify(pedidos))
}

if (!localStorage.getItem("usuarioLogado")) {
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogadoInicial))
}

export function carregarJogadoras() {
  const stored = localStorage.getItem("jogadoras");
  return stored ? JSON.parse(stored) : jogadoras;
}

export function carregarTimes() {
  const stored = localStorage.getItem("times");
  return stored ? JSON.parse(stored) : times;
}

export function carregarAdm() {
  const stored = localStorage.getItem("adm");
  return stored ? JSON.parse(stored) : adm
}

export function salvarJogadoras(jogadoras) {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

export function salvarTimes(times) {
  localStorage.setItem("times", JSON.stringify(times));
}

export function salvarAdm(adm) {
  localStorage.setItem("adm", JSON.stringify(adm))
}
