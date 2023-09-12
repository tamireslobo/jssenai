/* Aula 10 funções ou métodos no JS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll

/* Funções em parametros e sem retorno (procedura)*/
function olaMundo() {
    document.write('Ola Mundo sem retorno<br>')
}

/* Funções em parametros e com retorno (funciton)*/
function olaMundo2() {
    
    return 'Ola Mundo com retorno<br>'
}
// Chamar a função = Executar
olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Se vira aí'

/* Funções em parametros e sem retorno (procedura)*/
function somar(a, b) {
    document.write((a + b) + "<br>")
}

/* Funções em parametros e com retorno (funciton)*/
function somar2(c, d) {

    return c + d
}

/* Chamar a função = Executar */
somar(x, y)
somar2(10, 2)
document.write(somar2(10, 5))

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

/* Função anônima = não tem nome, pode ou não ter parâmetros,
pode ou não ter retorno */

titulo.addEventListener('click', function() {
    console.log('Clicou no titulo')
}) // Da linha 50 à 52 Você consegue visualizar os cliques no título no console

/* Arrow Functions E56 2015 em diante*/

const olaMundoArrow = () => document.write("Olá Mundo!!!!")

// não precisar usar a palavra function
// nao precisa usar a palavra return
// nao se usa nome nas funções
// nao precisa colocar { } se for uma instrucçao

const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>'

olaMundoArrow()
document.write(olaMundo2Arrow())
