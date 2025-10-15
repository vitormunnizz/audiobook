const butaopause = document.getElementById("pause")
const butaoplay = document.getElementById("play")
const audio = document.getElementById("audio")
let cpitulo = document.getElementById("capitulo")

let indexAtual = 1;
let totalaudios = 10;

function desativar(){
    if (butaoplay.classList.contains("desativado")){
        butaoplay.classList.remove("desativado")
        butaopause.classList.add("desativado")

    } else if (butaopause.classList.contains("desativado")){
        butaopause.classList.remove("desativado")
        butaoplay.classList.add("desativado")

    } else {
        butaopause.classList.remove("desativado")
        butaoplay.classList.remove("desativado")
    }
}

function tocar(){
    audio.play()
    desativar()
}

function pausar(){
    audio.pause()
    desativar()
}

function passar(){
    indexAtual++
    if (indexAtual > totalaudios){
        indexAtual = 1
    } else{
        indexAtual = indexAtual
    }
    audio.src = `audios/${indexAtual}.mp3`;
}

function voltar(){
    indexAtual--
    if (indexAtual <= 0){
        indexAtual = 10
    } else{
        indexAtual = indexAtual
    }
    audio.src = `audios/${indexAtual}.mp3`;
}