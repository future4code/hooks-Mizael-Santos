// EXERCICIO 01 // A): como fazemos para acessar os parâmetros passados na linha de comando para o Node?

//RESPOSTA: Tem que utilizar o  process. argv[2].

// EXERCICIO 01 TAMBEM:

// B)
const nome = process.argv[2];
const idade = Number(process.argv[3]);
const idadeNova = idade + 7;

console.log(`Olá , ${nome}! Você tem ${idade} anos`);

// C)
console.log(
  `Olá , ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeNova}`
);
