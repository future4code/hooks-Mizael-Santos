//EXERCICIO DE INTERPRETAÇÃO


// 1- A a C

/* 

a) Explique o que o código faz. Qual o teste que ele realiza? 

b) Para que tipos de números ele imprime no console "Passou no teste"? 

c) Para que tipos de números a mensagem é "Não passou no teste"?

*/

// RESPOSTA DA 1)

// A) O CODIGO ESTÁ VENDO SE O NUMERO É PAR OU ÍMPAR.

// B) NUMEROS PARES

// C) NUMEROS ÍMPARES


//2)- A a C

/* 

a) Para que serve o código acima?

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

*/

// RESPOPSTA DA 2 

// A) SERVE PARA SABER O PREÇO DAS FRUTAS QUE O USUARIO PEDIR.

// B) O PREÇO DA FRUTA MAÇÃ É R$2.25

// C) QUE O PREÇO DA PÊRA É 5 , POR QUE NÃO IRIA FREIAR E SIM PASSAR DIRETO.

//3) A a C

/*

a) O que a primeira linha está fazendo?

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

*/

// RESPOSTAS DA 3 

// A) ESTÁ PEDINDO PARA O USUARIO DIGITAR UM NUMERO 

// B) SE FOR O 10 ,  ESSE NUMERO PASSOU NO TESTE ,  SE FOR -10 VAI DA ERRO.

// C) SIM , TEM UM CONSOLE NO ESCOPO GLOBAL PEDINDO PARA IMPRIMIR UMA MENSAGEM QUE ESTÁ NO ESCOPO LOCAL E NÃO TEM COMO.



// EXERCICIO DE ESCRITA

// 1) A a C

const idadeUsuario = Number(prompt("Digite sua idade:"))

if (idadeUsuario >= 18){
    console.log("voce pode dirigir")
}else{ 
    console.log("voce nao pode dirigir")
}
console.log(idadeUsuario)


//2)

const turnos = prompt("Digite uma letra , M para matutino , V para vesperino e N para noturno:")

console.log(turnos)

if (turnos === "M"){
    console.log("Bom dia!")
}else if (turnos === "V"){
    console.log("Boa tarde!")
}else if (turnos === "N"){
    console.log("Boa noite!")
}


//3)
const turnos = prompt("Digite uma letra , M para matutino , V para vesperino e N para noturno:")
switch (turnos) {
    case "M":
        console.log('Matutino')
        break;
    case "V":
        console.log ('Vespertino')    
        break; 
    case "N":
        console.log('Noturno')
        break;    
    default:
        break;
}


//4)  

const filme = prompt("Qual o genero do filme?")

console.log(filme)

const valorDoFilme = Number(prompt("Qual o valor do ingresso?")) 

console.log(valorDoFilme)

if (filme === "fantasia" && valorDoFilme < 15) {
    console.log("Bom filme!")
 }else { 
console.log("Escolha outro filme")}










