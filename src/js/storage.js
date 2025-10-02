import { jogadoras } from "./jogadoras";
import { times } from "./times";
import { adm } from "./adm"

if (!localStorage.getItem("jogadoras")) {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras))
}

if (!localStorage.getItem("times")) {
  localStorage.setItem("times", JSON.stringify(times))
}

if (!localStorage.getItem("adm")) {
  localStorage.setItem("adm", JSON.stringify(adm))
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