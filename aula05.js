                                                                                                                                               /* Arquivo JS aula 05 Objeto */
//CRIAR OBJETO
let pessoa = {
    nome: 'Allan',
    idade: 34,
    peso: 94,
    altura: 1.86,
    doador: false,

}

let produtos = {
    descricao : ['TV'],
    preco : [' 1000']
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [2020, 2012, 2010]
}


// OPERACAO IMC
//toFixed(x)

let imc = pessoa.peso / (pessoa.altura*pessoa.altura)
console.log("Seu IMC é " + imc.toFixed(2))
console.log(pessoa.peso / (pessoa.altura*pessoa.altura) .toFixed(3))

