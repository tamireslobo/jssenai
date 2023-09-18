let pessoa = {
    nome:  'Ana',
    idade:  20,
    peso:  70,
    altura:  1.67
}



let imc = pessoa.peso / (pessoa.altura*pessoa.altura)
console.log("Seu IMC é " + imc.toFixed(2) + " e sua idade é " + pessoa.idade + " anos")
