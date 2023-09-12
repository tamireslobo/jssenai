/*TAMIRES*/

// Informacoes
const nome = 'Lionel Andrés Messi Cuccitini'
const nacao = 'Argentina'
const idade = 36
const clube = 'Inter Miami'

document.write(`<div class="inform">
                    <div class="dados">
                        <br>
                        <br>
                        <h2> MESSI </h2>
                        <div class="img"><img src="messimiami.jpg" widht=170px height=170px></div>
                    <br>
                        <p>Jogador: ${nome}</p>
                        <p>País: ${nacao}</p>
                        <p>Idade: ${idade}</p>
                        <p>Clube: ${clube}</p>
                        <br>
                        <br>
                    </div>  
                </div>`)    

//frase do dia
var data = new Date();
let frase1 = 'EU'
let frase2 = 'NÃO SOU'
let frase3 = 'SUA QUERIDA'   

document.write(`
                <figure id="container">
                <img src="textura.jpg" />  
                <figcaption> <h1> Frase do Dia </h1
                <br>
            </div>
         
            <div class="date">
                <p>${data.toLocaleDateString('pt-br')}</p>
                <br>
            </div>
            <div class="frases">
                <p>${frase1}</p>
                <p>${frase2}</p>
                <p>${frase3}</p>
                
                <br> </figcaption>
              </figure>
                `)

//array meses do ano
let meses = ['Janeiro', ' Fevereiro', ' Março',' Abril', ' Maio', ' Junho', ' Julho', ' Agosto', ' Setembro', ' Outubro', ' Novembro', ' Dezembro' ]

document.write(`<div class="meses">
                    <div class="title">
                        <h1> Array de Meses do Ano </h1
                        <br>
                    </div>
                    <div class="mes">
                    <br>
                        <p> ${meses} </p>
                        <br>
                        <br>
                    </div>
                </div>`)

//objeto jogo
const jogo = 'Barbie'
const empresa = 'Marvel'
const lancamento = 1900

document.write(`<article>
                <div class="jogoBox">
                <div class="content">        
                    <div class="titleJogo">
                        <h1> Objeto Jogo </h1>
                    </div>
                    <div class="text">
                        <div class="jogo">          
                        <p> Jogo: ${jogo} </p>
                        </div>

                        <div class="empresa">
                        <p> Desenvolvido por: ${empresa} </p>
                        </div>

                        <div class="ano">                      
                        <p> Ano de Lançamento: ${lancamento} </p>
                        </div>
                    </div>
                    <div class="capa">    
                    </div>
                </div>      
                </div>
                </article>`)



                