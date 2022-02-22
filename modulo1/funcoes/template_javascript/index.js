// exercicio de interpretacao

//1- a)oq vai ser impresso no console ?

/*

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

RESPOSTA ABAIXO:

vai ser impresso no primeiro console.log 2 * 5 = 10

vai ser impresso no segundo console.log
10 * 5 = 50

*/


//1- b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

//RESPOSTA ABAIXO:

//Se retirar os console.log vai da erro de sitaxe.


//2- a)  Explique o que essa função faz e qual é sua utilidade

//RESPOSTA ABAIXO:

//essa funcao ela pede uma informacao ao usuario , depois disso ele pega e transforma todas as strings em minusculas , depois ela ver se é verdadeiro ou falso , depois ele imprime no console a resposta da juncao da informacao do usuario e a utilidade da funcao.

//2- b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:

//i. Eu gosto de cenoura = true
//ii.CENOURA é bom pra vista = true
//iii.Cenouras crescem na terra = true



//EXERCICIO DE ESCRITA DE CODIGO

//1- a)

function informacoes () {
        console.log(`Eu sou Mizael , tenho 19  anos , moro em imperatriz , e sou estudante `)
     
}

informacoes()


//1-b)

function informacaoUsuario(){

const nome = prompt("Qual o seu nome?")
const idade = Number(prompt("Qual a sua idade?"))
const cidade = prompt("Onde voce mora?")
const profissao = prompt("Qual a sua profissao?") 
        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}. `)

}

informacaoUsuario()


//2- a)

function numeros (){

    const numero1 = Number(prompt("Digite um numero:"))

    const numero2 = Number(prompt("Digite outro numero:"))

    const soma = (numero1 + numero2)
    

    return soma

}

console.log(numeros)

numeros()


//2- b) 

function outrosNumeros(){

    const num1 = Number(prompt("Digite um numero:"))

    const num2 = Number(prompt("Digite outro numero:"))

    return num1 >= num2 

}

console.log(outrosNumeros)

outrosNumeros()


//2- c)

function numeroParOuNao() {

    const numeroPar = Number(prompt("Digite um numero:"))
    return numeroPar % 2 === 0
}

console.log(numeroParOuNao())


//2- d)

function menssagem(){

    const menssagem1 = prompt("Digite alguma coisa:")

    console.log(menssagem1.toUpperCase())
    console.log(menssagem1.length) 

}

menssagem()


//3-

const numer1 = Number(prompt("Digite o primeiro numero:"))

const numer2 = Number(prompt("Digite o segundo numero:"))


function somar(numer1 , numer2){

return numer1 + numer2

}

function subtrair(numer1 , numer2){

    return numer1 - numer2
} 

function multiplicar(numer1 , numer2){

    return numer1 * numer2
}

function dividir(numer1 , numer2){

    return numer1 / numer2
}

console.log(somar(numer1 , numer2))
console.log(subtrair(numer1 , numer2))
console.log(multiplicar(numer1 , numer2))
console.log(dividir(numer1 , numer2))



