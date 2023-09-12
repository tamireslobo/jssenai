let titulo = document.querySelector('h1')

titulo.textContent = 'DOM'

let testando = document.querySelectorAll('.box')

document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
//testando[0].textContent = 'texto qualquer'

let testTag = document.getElementsByTagName('div')
console.log(testTag)

let testId = document.getElementById('testando')

let testClass = document.getElementsByClassName('box')