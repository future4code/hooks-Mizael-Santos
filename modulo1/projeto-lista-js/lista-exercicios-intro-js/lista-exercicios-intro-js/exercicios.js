// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = prompt("Digite a altura de um retangulo:")

  const larguraRetangulo = prompt("Digite a largura de um retangulo:")

  const areaRetangulo = (alturaRetangulo * larguraRetangulo)

  console.log(areaRetangulo)

  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("Digite o ano atual:")

const anoNascimento = prompt("Digite o ano de nascimento:")
 
const idade = (anoAtual - anoNascimento)

console.log(idade)
 
 
 
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
  const calculaIMC = (peso / (altura * altura))

  return(calculaIMC)


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Digite seu nome:")

  const idade = prompt("Digite sua idade:")

  const email = prompt("Digite seu email:")

  const informacoesDoUsuario = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  console.log(informacoesDoUsuario)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const cor1 = prompt("Sua primeira cor favorita:")

    const cor2 = prompt("Sua segunda cor favorita:")

    const cor3 = prompt('Sua terceira cor  favorita:')

    const listaCores = [cor1 , cor2, cor3]

    console.log(listaCores)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  const retornaStringEmMaiuscula = ("oi")

  return (string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   
  const total = (custo/valorIngresso)
  return total

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
      const array0 = array.shift()
      const array999 = array.pop()
      const ultimoParaPrimeiro = array.push(array0)
      const primeiroParaUltimo = array.unshift(array999)

      return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    const padrao1 = string1.toUpperCase()
    const padrao2 = string2.toUpperCase()
    return padrao1 === padrao2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}