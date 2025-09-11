import { times } from "./times";

export function carregarTimes () {
    let stored = localStorage.getItem("times");
    return stored ? JSON.parse(stored) : times;
}

export function salvarTimes () {
    localStorage.setItem("times", JSON.stringify(times));
}