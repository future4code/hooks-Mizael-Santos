//EXERCICIO DE INTERPRETACAO

// 1) A) O que vai ser impresso no console?

//RESPOSTA ABAIXO 

/*

0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
2: {nome: 'Letícia Chijo', apelido: 'Chijo'}

*/

//2) A)O que vai ser impresso no console?

//RESPOSTA ABAIXO

//'Amanda Rangel', 'Laís Petra', 'Letícia Chijo'.


//3) A)O que vai ser impresso no console?

//RESPOSTA ABAIXO

//nome: 'Amanda Rangel', apelido: 'Mandi'
//nome: 'Laís Petra', apelido: 'Laura'


//EXERCICIO DE ESCRITA

//1) A)Crie um novo array que contenha apenas o nome dos doguinhos

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomeDoguinhos = pets.map((item) => {
    return item.nome 
})
console.log(nomeDoguinhos)

//B)Crie um novo array apenas com os cachorros salsicha

const dogSalsicha = pets.filter((item) => {
    return item.raca === 'Salsicha'
})
console.log(dogSalsicha)

//C) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const novoArray = pets.filter((item) => {
    return item.raca === "Poodle"
})
const promocao = novoArray.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})

console.log(promocao)

//2) A)Crie um novo array que contenha apenas o nome de cada item

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const nomeProdutos = produtos.map((item) => {
    return item.nome 
})
console.log(nomeProdutos)

//B)Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const novoPreco = produtos.map((item) => {
    return {nome: item.nome, preco: (item.preco)*0.95}
})

console.log(novoPreco)

//C)Crie um novo array que contenha apenas os objetos da categoria Bebidas

const arrayBebidas = produtos.filter((item) => {
    return item.categoria === 'Bebidas'
})
console.log(arrayBebidas)

//D) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const palavraYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(palavraYpe)

//E) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const vendaProduto = palavraYpe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(vendaProduto)

