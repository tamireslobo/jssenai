 /* Aula 04 !Arquivo JS aula Array */

 let produtos = [ 'arroz', 'feijão', 'leite']
 var codigos = Array(10, 20, 30)
 var test = Array(10)
 test[0] = "Oi"
 test[9] = "Tudo bem?"
 test[10] = "Opa!"
 let meses = ['Jan', 'Fev', 'Mar', 'Abr']
 meses[0] = 'Janeiro'
 meses[1] = 'Fevereiro'
 meses[2] = 'Março'
 meses[3] = 'Abril'
 meses[4] = 'Maio'
 meses[5] = 'Junho'
 meses[6] = 'Julho'
 meses[7] = 'Agosto'
 meses[8] = 'Setembro'
 meses[9] = 'Outubro'
 meses[10] = 'Novembro'
 meses[11] = 'Dezembro'

//ADICIONAR no final push = empurrar
 produtos.push('Açúcar', 'Trigo')
 codigos.push(40, 50, 60, 70)
 meses.push('Mai', 'Jun', 'Jul', 'Ago')
 
//REMOVER do final pop = estourar
//produtos.pop()
codigos.pop()
meses.pop()
meses.pop()
meses.pop()
meses.pop()



//ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maçã')

// ADICIONAR no inicio unshift
produtos.shift()

// REMOVER de uma posição específica slice
// splice = emendar
// posição inicial, quantos remover
codigos.splice(1, 3)

// COPIAR array slice = fatiar porção
// posição inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0, 3)

// VER RAMANHO DO ARRAY length comprimento
meses.length
meses1.length
meses2.length

//spreed operator ... copiar
let teste = [...produtos, 'Ovo', 'Pera']
let teste1 = [...meses, 'Set', 'Out', 'Nov', 'Dez']

//ver indice de um valor no array
//let pos = nome_array.indexOf('Valor')
//let pos = produtos.indexOff('Uva')







