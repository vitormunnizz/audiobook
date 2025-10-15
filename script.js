const butaopause = document.getElementById("pause");
const butaoplay = document.getElementById("play");
const audio = document.getElementById("audio");
let capitulo = document.getElementById("capitulo");

let indexAtual = 1;
let totalaudios = 10;

function mudarbutaoplay() {
    butaoplay.classList.add("desativado");
    butaopause.classList.remove("desativado");
}

function mudarbutaopause() {
    butaopause.classList.add("desativado");
    butaoplay.classList.remove("desativado");
}

function tocar() {
    audio.play();
    mudarbutaoplay();
}

function pausar() {
    audio.pause();
    mudarbutaopause();
}

function passar() {
    indexAtual++;
    if (indexAtual > totalaudios) indexAtual = 1;
    audio.src = `audios/${indexAtual}.mp3`;
    mudarcapitulo();
    audio.play();
    tocar();
}

function voltar() {
    indexAtual--;
    if (indexAtual <= 0) indexAtual = totalaudios;
    audio.src = `audios/${indexAtual}.mp3`;
    mudarcapitulo();
    audio.play();
    tocar();
}

function mudarcapitulo() {
    capitulo.innerHTML = `Capítulo ${indexAtual}`;
}