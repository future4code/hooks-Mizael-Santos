type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?

// RESPOSTA = eu usaria o script  "start": "tsc && node ./build/exercicio4.js"



// c) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.

// RESPOSTA = ACHO QUE SIM , POR QUE SE ELE ESTIVESSE NA PASTA SRC , ACHO QUE DEVERIAMOS USAR OUTRO SCRIPT , ESSE AQUI "START": TSC INDEX.TS && NODE ./BUILD/INDEX.JS


// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// RESPOSTA = PODEMOS FAZER ASSIM , TSC EXERCICIO1.TS EXERCICIO2.TS EXERCICIO3.TS


