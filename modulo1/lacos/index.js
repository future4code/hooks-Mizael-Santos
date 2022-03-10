//EXERCICIO DE INTERPRETACAO

//1) O que o código abaixo está fazendo? Qual o resultado impresso no console?

//RESPOSTA ABAIXO

//ele está fazendo uma repeticao ate o 5 , incrementando mais. vai aparecer o valor 10.

/*

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

*/


// 2) a) O que vai ser impresso no console?

// RESPOSTA ABAIXO

// vai ser impresso os valores maiores que 18 , no caso o 19 , 21, 23, 25, 27, 30.


//B)Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

//RESPOSTA ABAIXO

//Sim! ,  com index.of() talvez. 

//3) Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// RESPOSTA ABAIXO

// o resultado impresso seria 3.


// EXERCICIO DE ESCRITA 

// 1) 

let nomePet = []

const pergunta = Number(prompt("Quantos bichinhos de estimacao voce tem ?"))

let quantidadeDePets = 0

console.log(quantidadeDePets)

function bichos(){

if(pergunta === 0) {
    console.log("Que pena! Voce pode adotar um pet! ")
}else{
    while(quantidadeDePets < pergunta){

        quantidadeDePets++
        nomePet.push(prompt("Digite um nome")
        )
    }
        console.log(nomePet)
}

}

bichos() 


//2) A)

const arrayOriginal = [10,20,
30,40,50,60,70,80,90,100]

function imprimeValores (){
    for (let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i])
    }
}

imprimeValores(arrayOriginal)

//B)

function divisaoPorDez(){
    for (let i = 0; i < arrayOriginal.length; i++){
        console.log(arrayOriginal[i] /10)
    }
}

divisaoPorDez(arrayOriginal)


//C)

const arrayNovo = []

function numPares (){
    for (const item of arrayOriginal){
        if(item % 2 == 0) {
            arrayNovo.push(item)
        }
    }
    console.log(arrayNovo);
}

numPares(arrayOriginal)


//D)

let informacaoUsuario = []

function imprimeString (array){
    for (let i = 0; i < array.length; i++){
        informacaoUsuario.push(`O elemento do index ${i} é: ${array[i]}`);
        }
    
    console.log(informacaoUsuario);
}

imprimeString(arrayOriginal)

//E)

function imprimarMaiorEMenorNumeros (array) {
    let numMaior = 0;
    let numMenor = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > numMaior) {
            numMaior = array[i];
        } else if (array[i] < numMenor){
            numMenor = array[i];
        }
    }
    console.log(`O maior número é ${numMaior} e o menor é ${numMenor} 
    `)
}

imprimarMaiorEMenorNumeros(arrayOriginal)