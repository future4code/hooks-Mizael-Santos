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
    let obj = {...pessoa , nome: "ANÔNIMO"}
    return obj 

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const altura = 1.5;
    const idadeMinima = 14;
    const idadeMaxima = 60;
 
    let pessoasAutorizar = pessoas.filter((item) => {
        return item.altura >= altura && item.idade > idadeMinima && item.idade < idadeMaxima;
    })
    return pessoasAutorizar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const altura = 1.5;
    const idadeMinima = 14;
    const idadeMaxima = 60;
 
    let pessoasNaoAutorizar = pessoas.filter((item) => {
        return item.altura < altura || item.idade <= idadeMinima || item.idade > idadeMaxima;
    })
    return pessoasNaoAutorizar
 }


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(;;){
        let contador = 0
        if (contador < contas.length){
            let compras = (contas[contador].compras)
            let soma = compras.reduce((prev , compras) => prev+compras,0)

            contas[contador].saldoTotal = contas[contador].saldoTotal - soma
            contas[contador].compras = []
            contador++
        }
        return contas
    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let ordem = consultas.sort((x, y) => {
        return x.nome == y.nome ? 0 : x.nome > y.nome ? 1 : -1
    })
    return ordem

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a, b) => {

        if((a.dataDaConsulta).split('/').reverse().join('-') < (b.dataDaConsulta).split('/').reverse().join('-')){
            return -1
        }
        if((a.dataDaConsulta).split('/').reverse().join('-') > (b.dataDaConsulta).split('/').reverse().join('-')){
            return +1
        }else{
            return 0
        }
   })

}