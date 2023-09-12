// comentários em linhas

/*
Comentários em Bloco
*/

// criar variáveis use let ou var 
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario
document.write (`Preço Total R$ ${precoTotal} <br>`)
console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))

document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <hr>`) 

// criar constante
const nome = 'Yan Costa'
const peso = 96.5
const altura = 1.86
const imc = peso / (altura*altura)

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = ((nota1 + nota2 + nota3)/3)
document.write("Nota Final " + notaFinal+ `<br>`)

let compra = 1999.99 
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(compraComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})+ '<br>')



document.write(compraComDesconto + '<br>')