/*Aplicação Calculadora de Media */
//Questão 1: Selecione abaixo as tags html.

let aviso = document.querySelector('') //tag correspondente
let formulario = document.querySelector('form') //tag correspondente

let btnCalcular = document.querySelector('#btnCalcular') //tag correspondente
let btnLimpar = document.querySelector('#btnLimpar')//tag correspondente

// selecionar caixas de texto por id
let cxNota1 = document.querySelector('#nota1')//tag correspondente
let cxNota2 = document.querySelector('#nota2')//tag correspondente
let cxMedia = document.querySelector('#media')//tag correspondente
let cxSituacao = document.querySelector('#situacao')//tag correspondente

let n1 = cxNota1.value
let n2 = cxNota2.value

// Questão 2: CALCULAR MEDIA
function calcularMedia(n1, n2) {
    return ((n1 + n2) / 2)//formula para média
}

// Questão 3: DEFINIR SITUACAO FINAL COM BASE NA MEDIA
function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
    
    if (calcularMedia >= 7  &&  calcularMedia <= 10) { // Fórmula para aprovado
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal >= 3 && calcularMedia <= 6.9 ) { // Fórmula para reprovado
        situacaoFinal = 'Reprovado(a)'
    } else if (calcularMedia <= 3) {
        /* Para recuperação */situacaoFinal = 'Recuperação'
    } else { situacaoFinal = 'Não foi possível calcular'}
    return situacaoFinal
}

// Questão 4: FORMATAR A CAIXA DE SITUACAO FINAL
function formatarSituacao(situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado') //Complete
            console.log('adicionar class aprovado')
            break
        
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')  // Complete
            cxSituacao.classList.remove('recuperacao') // Complete
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado') // Complete "..."
            break
        
        case 'Recuperação':
            cxSituacao.classList.remove('aprovado') // Complete
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao') // Complete
            console.log('adicionar class recuperacao')
                break

        default:
            console.log('Situação Indefinida')
    } /* fim do switch case */

}

// Questão 5: VALIDAR E GERAR FLASH MESSAGE. Sabendo que a cada 1000 temos 1 segundo.
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset('form') /* limpar form */
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 3000); // modifique para 3 segundos.
    }
}

// Questão 6: CALCULAR A MEDIA APOS O CLICK NO BOTAO
btnCalcular.addEventListener('', function(e) { //Add o evento correspondente na linha 83, '' .
    console.log('Calcular Média') 

    /* pegar o valor que esta dentro das caixas
    usar metodo parseFloat p converter string p float */

    let nota1 = parseFloat(cxNota1.value) // salve o valor digitado no input em "cxNota1".
    let nota2 = parseFloat(cxNota2) // salve o valor digitado no input em "cxNota2".
    let media = calcularMedia(nota1, nota2 / 2) // salve o valor digitado no input em "cxMedia.
    
    console.log(nota1)
    console.log(nota2)
    console.log(media)

    if(isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.value = '---'
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()  // adicione à essa linha "105" uma prevenção de submit de sua página.
})

// Questão 7:  APOS LIMPAR TIRAR AS CLASS DA CX SITUACAO 
btnLimpar.addEventListener('click', function() { // adicione a função anônima. Ps: Parâmetro vazio.
    cxSituacao.classList.remove('#nota1') // complete
    cxSituacao.classList.remove('#nota2') // complete
    cxSituacao.classList.remove('#media') //complete
})