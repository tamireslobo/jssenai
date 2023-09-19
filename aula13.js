/* */

let carros = ['fusca', 'Brasilia', 'Gurgel']

/* FOR = para faça */
/* i = interador, interação ou index */

for (let i = 1; i <=5; i++) {
    document.write(i + "")
}

document.write('<br>')

for (let i = 5; i >=1; i--) {
    document.write(i + "")
}

for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
}

/*ForEach = para cada */
let frutas = ['Pera','Uva','Maçã','Banana','Melancia']

frutas.forEach(function(fruta, i) {
document.write(` ${i} ${fruta} <br>`)
})

document.write('<br>')

carros.forEach(function(carro) {
    document.write(` ${carro} <br>`)
    }) 


   /* WHILE enquanto */

//// vriar variável de contador fora do laco
let contador = 0

while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++ // contador +1
}

console.log(contador) // aqui o contador esta com o valor 5


/* DO while faca enquanto */

let iterador = 0

do {
    console.log(carros[iterador])
    iterador++ // contador +1
} while(iterador < carros.length)


console.log(iterador) //aqui o iterador está com o valor 3