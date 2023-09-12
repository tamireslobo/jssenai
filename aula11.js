/* Aula 11 de JS Eventos */

function carregou() {
    console.log('Pagina carregada com sucesso')
 
}

function focou() {
    console.log('Foco no titulo')
 
}
function rolouPagina() {
    console.log('Pagina rolando')
 
}
function focoNoCampo() {
    console.log('Foco no campo de texto')
 
}

function semFocoNoCampo() {
    console.log('Saiu o Foco no campo de texto')
 
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Esta teclando' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1') 
let botao2 = document.querySelector('#btn2') 
let botaoEnviar = document.querySelector('#btn3') 

//mouseovere a seta do mouse esta no element
botao1.addEventListener('mouseover', function () {
    console.log('Foco no botão 1')
})

//focusout no blur quando sai o focu
botao2.addEventListener('blur', function () {
    console.log('Foco no botão 2')
})

// 1 clique do mouse
botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Clicou no botão Enviar')
})