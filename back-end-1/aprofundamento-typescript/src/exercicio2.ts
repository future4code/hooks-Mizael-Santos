// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros


// RESPOSTA: AS ENTRADAS SÃO O PARAMETRO DE DENTRO DA FUNCAO . A SAIDA É TUDO QUE VEM DENTRO DAS CHAVES.

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas

// RESPOSTA = A VARIAVEL NUMEROS ORDENADOS , A VARIAVEL SOMA , A VARIAVEL ESTATISTICAS.

function obterEstatisticas(numeros: number[]) {

    type dadosEstatisticas = {
        maior: number,
        menor: number,
        media: number,
    }

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: dadosEstatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type amostraDados = {
    numeros: [10 ,20 ,30 ,40],
    obterEstatisticas: (numeros: number[]) =>{

    }
}
