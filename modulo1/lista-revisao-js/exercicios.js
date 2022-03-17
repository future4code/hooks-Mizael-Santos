// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
        return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a , b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = array.filter(pares => (pares % 2) === 0)
    return numerosPares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesElevadosADois = [];
    for (let item of array ){
        if (item % 2 === 0){
            numerosParesElevadosADois.push(item ** 2)
        }
    }
    return numerosParesElevadosADois
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
    for (let i  = 0; i < array.length; i++){
        if (array[i] > maiorNumero){
            maiorNumero = array[i];
        }
    }
    return maiorNumero;

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeroMaior;
    let numeroMenor;

    if (num1 > num2){
        numeroMaior = num1;
        numeroMenor = num2;
    }else{
        numeroMaior = num2;
        numeroMenor = num1;
    }

    let numMaiorDivideMenor = numeroMaior % numeroMenor === 0;

    let diferencaEntreNum = numeroMaior - numeroMenor;

    return {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: numMaiorDivideMenor,
        diferenca: diferencaEntreNum
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i += 2){
        numerosPares.push(i);
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let nomeTriangulo = ''

    if (ladoA === ladoB && ladoA === ladoC){
        nomeTriangulo = "Equilátero";
    }else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        nomeTriangulo = "Escaleno";
    }else {
        nomeTriangulo = "Isósceles";
    }
    return nomeTriangulo;

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let segunMaiorESegunMenor  = [];
    const arrayCrescente = array.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
 
        return 0;
    }) 
 
    segunMaiorESegunMenor.push(arrayCrescente[arrayCrescente.length - 2])
    segunMaiorESegunMenor.push(arrayCrescente[1])
 
    return segunMaiorESegunMenor
 
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join([separador = ', '])}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 
 }


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
     
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}