/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", false)

resultado = bool1 && bool2 && bool3 
console.log("b. ", false) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", true)

console.log("d. ", typeof boolean)

*/

/*

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) //converti string para number usando const x = Number(prompt("...")) 

*/

const idade =Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo =Number(prompt("Qual a sua idade amigo?"))
const idadeMaior = (idade > idadeMelhorAmigo)
console.log(idade)
console.log(idadeMelhorAmigo)
console.log("Sua idade e maior do que a do seu melhor amigo ? " , idadeMaior )
console.log(idade - idadeMelhorAmigo)



const numeroPar = Number(prompt("insira um numero par:"))
const restoDaDivisao = numeroPar % 2
console.log(restoDaDivisao)

// sempre deu o resto 0 , por que e um numro par.

//se inserir um numero impar vai ser o resto 1.




const idadeEmAnos = Number(prompt("Qual a sua idade em anos ?"))

console.log(idadeEmAnos * 12)

// acima esta a idade em meses.

console.log(idadeEmAnos * 365)

// acima esta a idade em dias.

console.log(idadeEmAnos * 8760 )

//acima esta a idade em horas.


const primeiroNumero = Number(prompt("digite um numero:"))

const segundoNumero = Number(prompt("digite outro numero:"))

const comparar = primeiroNumero > segundoNumero
const igual = primeiroNumero === segundoNumero
const divisivel = (primeiroNumero % segundoNumero) === 0
const segundoDivisivel = (segundoNumero %  primeiroNumero) === 0

console.log("o" , primeiroNumero , "e maior que" , segundoNumero , "?" , comparar) 

console.log("o", primeiroNumero, "e igual ao ",
segundoNumero , "?" , igual)

console.log("o" , primeiroNumero , " e divisivel pelo " , segundoNumero , "?" , divisivel)

console.log("o" , segundoNumero ,"e divisivel pelo" , primeiroNumero , "?" , segundoDivisivel)



