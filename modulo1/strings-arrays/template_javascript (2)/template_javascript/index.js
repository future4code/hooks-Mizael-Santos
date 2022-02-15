
//EXERCICIO 1

// a. console.log(undefined , array)

// b. console.log(null , array)

// c. console.log(11 , array.length)

// d. console.log(3 , array[i])

// e. console.log(11 , [3, 19 , 5, 6, 7, 8, 9, 10, 11, 12, 13])

// f. console.log(9 , valor)


//EXERCICIO 2

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)*/

//RESPOSTA ABAIXO

//SUBI NUM ONIBUS EM MIRROCOS

const nomeDoUsuario = prompt("Digite seu nome:")

const emailDoUsuario = prompt("Digite seu email:")

console.log `O e-mail ${emailDoUsuario} foi cadastrado com sucesso`

console.log `Seja bem-vinda(o), ${nomeDoUsuario}!`


const comidasPreferidas = ["pudin" , "lasanha" , "arroz" , "carne" , "ovo"]

console.log(comidasPreferidas)

console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const usuarioComida = prompt("qual a sua comida preferida ?")


comidasPreferidas[1] = usuarioComida

console.log(comidasPreferidas)


const listaDeTarefas = [tarefa1 ,tarefa2 , tarefa3]

const tarefa1 = prompt("primeira tarefa que voce faz no dia")

const tarefa2 = prompt("segunda tarefa que voce faz no dia")

const tarefa3 = prompt("terceira tarefa que voce faz no dia")

console.log(listaDeTarefas)

const indice = prompt("digite um indice de 0 a 2:")

listaDeTarefas.splice(indice , 1)

console.log(listaDeTarefas)









