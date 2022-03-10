/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Boas vindas ao jogo de Blackjack!")

function pergunta() {
   if(confirm("Quer iniciar uma nova rodada?")){
   console.log( "inicair um novo jogo")
   }else{
   console.log( "O jogo acabou")
   }}

pergunta()   

const CartaUsuario1 = comprarCarta()
const CartaUsuario2 = comprarCarta()
const cartaComputador1 = comprarCarta()
const cartaComputador2 = comprarCarta()

const pontosUsuario = CartaUsuario1.valor + CartaUsuario2.valor 

const pontosComputador = cartaComputador1.valor + cartaComputador2.valor

console.log(`Usuário - cartas: ${CartaUsuario1.texto} ${CartaUsuario2.texto} - ${pontosUsuario}`)

console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${pontosComputador}`)

if (pontosUsuario > pontosComputador) {
   console.log("O usuário ganhou!")
} else if (pontosComputador > pontosUsuario) {
   console.log("O computador ganhou!")
} else if (pontosUsuario === pontosComputador) {
   console.log("Empate!")
}


//POSSO FAZER SEM FUNÇAO DO JEITO QUE ESTA ACIMA SÓ COM "COMFIRM" E COM FUNÇAO IGUAL ABAIXO.

/*console.log("Boas vindas ao jogo de Blackjack!")

function pergunta() {
if(confirm("Quer iniciar uma nova rodada?")){
   console.log( "inicair um novo jogo")
}else{
   console.log( "O jogo acabou")
}
}

pergunta() 

*/



