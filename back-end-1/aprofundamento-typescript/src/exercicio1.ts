// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 4 

// RESPOSTA = O tipo 'number' não pode ser atribuído ao tipo 'string'


// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// RESPOSTA = PODEMOS USAR O UNION TYPE E PODEMOS USAR O ANY.

// UNION TYPES:
// const meuNumero: number | string | boolean = ""

// console.log(meuNumero)

// ANY:

// let meuNumero: any
// meuNumero = "oi"
// meuNumero = 4
// meuNumero = true

// console.log(meuNumero)

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

type person = {
    name: string,
    age: number,
    corFavorita: string
}

const pessoa1 : person = {
    name: "mizael",
    age: 19,
    corFavorita: "azul"
}

const pessoa2 : person = {
    name: "Luan",
    age: 28,
    corFavorita: "vermelho"
}

const pessoa3 : person = {
    name: "Nany",
    age: 28,
    corFavorita: "amarelo"
}

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)


// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

enum corFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}

const corEscolhida = {
    cor1: corFavorita.VERMELHO,
    cor2: corFavorita.LARANJA,
    cor3: corFavorita.AMARELA,
    cor4: corFavorita.VERDE,
    cor5: corFavorita.AZUL,
    cor6: corFavorita.AZULESCURO,
    cor7: corFavorita.VIOLETA
}

console.log(corEscolhida)