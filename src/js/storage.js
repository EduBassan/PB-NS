import { jogadoras } from "./jogadoras";
import { times } from "./times";

if (!localStorage.getItem("jogadoras")) {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras))
}

if (!localStorage.getItem("times")) {
  localStorage.setItem("times", JSON.stringify(times))
}

export function carregarJogadoras() {
  const stored = localStorage.getItem("jogadoras");
  return stored ? JSON.parse(stored) : jogadoras;
}

export function carregarTimes() {
  const stored = localStorage.getItem("times");
  return stored ? JSON.parse(stored) : times;
}

export function salvarJogadoras(jogadoras) {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

export function salvarTimes(times) {
  localStorage.setItem("times", JSON.stringify(times));
}