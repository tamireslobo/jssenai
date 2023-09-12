let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'jsteste.jpg')
imagem.setAttribute('width', '280px')

/* Manipular CSS */

titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625em";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute("class", 'escura')
box[0].removeAttribute('class')

///////////////////  MODOS DE COR  /////////////////////

let tela = document.querySelector('main')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    console.log('modo dark');
    tela.classList.add("dark");
    tela.classList.remove("light");
}
function modoLight() {
    console.log('modo light');
    tela.classList.remove("dark");
    tela.classList.add("light");
}