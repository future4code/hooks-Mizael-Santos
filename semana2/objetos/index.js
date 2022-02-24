// EXERCICIO DE INTERPRETACAO
// 1 - A) O que vai ser impresso no console?

/*
    const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[Matheus Nachtergaele])
console.log(filme.elenco[Virginia Cavendish])
console.log(filme.transmissoesHoje[canal: 'globo' , horario '14h'])

*/


// 2- A)O que vai ser impresso no console?

/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(Juca , idade 3 , raca SRD)
console.log(Juba , idade 3 , raca SRD)
console.log(Jubo , idade 3 , raca SRD)

*/

//2- B) O que faz a sintaxe dos três pontos antes do nome de um objeto? 

// faz o Spread , ele faz uma copia inteira de um objeto para o outro.

// 3-A) O que vai ser impresso no console?

/*

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(false))
console.log(undefined))

*/

//3-B)Explique o valor impresso no console. Você sabe por que isso aconteceu?

// um deu false , por que a pessoa nao e um backender.

// o outro console deu undefined , por que nao existe altura na funcao.

//EXERCICIO DE ESCRITA

//1-A e B)

const pessoa = {
    nome: "Mizael",
    apelidos:["Miza" , "Mimi" , "Zael"]
}
function informacaoPessoa(objeto){
    console.log(`Eu sou ${objeto.nome} , mas pode me chamar de: ${objeto.apelidos}.`)
}

informacaoPessoa(pessoa)

const novaPessoa = { 
    ...pessoa,
    apelidos: ["grandioso", "grande", "pe"]
}

informacaoPessoa(novaPessoa)


//2-A e B)

const pessoa1 = {
    nome:"Levi",
    idade: 20,
    profissao:"medico"
} 

const pessoa2 = {
    nome:"Thor",
    idade: 25,
    profissao:"engenheiro"
}

function minhaFuncao(objeto1 , objeto2){

    const array1 = [objeto1.nome , objeto1.nome.length , objeto1.idade, objeto1.profissao, objeto1.profissao.length]

    const array2 = [objeto2.nome , objeto2.nome.length , objeto2.idade, objeto2.profissao, objeto2.profissao.length]

    return console.log(array1) + console.log(array2)

}

minhaFuncao(pessoa1 , pessoa2)

//3-A a D

const carrinho = []

const fruta1 = {
    nome:"manga",
    disponibilidade: true
}

const fruta2 = {
    nome:"laranja",
    disponibilidade: true
}

const fruta3 = {
    nome:"abacaxi",
    disponibilidade: true
}

function frutas(frutas) {

    return frutas
}

carrinho.push(frutas(fruta1))
carrinho.push(frutas(fruta2))
carrinho.push(frutas(fruta3))

console.log(frutas(fruta1))
console.log(frutas(fruta2))
console.log(frutas(fruta3))

console.log(carrinho)
