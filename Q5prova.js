function minhaProva1 () {
    document.write('Olá mundo sem retorno <br>')
}

minhaProva1()

function minhaProva2 () {

     return 'Olá mundo com retorno <br>'
}

document.write(minhaProva2())



function somar(a, b) {
    document.write((a + b) + "<br>")
}

function subtrair(c, d) {
        
    return c - d
}

somar(10, 5)
document.write(subtrair(5, 3))