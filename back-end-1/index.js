//REGRA DO NODE:
//PROCESS.ARGV[0] = NODE
//PROCESS.ARGV[1] = O MEU ARQUIVO QUE QUERO RODAR
//PROCESS.ARGV[2 , 3 , 4..... E EM DIANTE] = ONDE EU COLOCO OS VALORES DE ENTRADA



// EXERCICIO 01: como fazemos para acessar os parâmetros passados na linha de comando para o Node?

//RESPOSTA: Tem que utilizar o  process. argv[2].


// // EXERCICIO 01 TAMBEM:

// // A)
// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// const idadeNova = idade + 7


// // B)
// console.log(`Olá , ${nome}! Você tem ${idade} anos`)

// // C)
// console.log(`Olá , ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeNova}`)


//EXERCICIO 02:

// let num1 = Number(process.argv[2])
// let num2 = Number(process.argv[3])

// const add = num1 + num2
// console.log(`A soma dos números é ${add}`)

// const sub = num1 - num2
// console.log(`A subtração dos números é ${sub}`)

// const mult = num1 * num2
// console.log(`A multiplicação dos números é ${mult}`)

// const div = num1 / num2
// console.log(`A divisão dos números é ${div}`)

// EXERCICIO 03


// const tarefas = ["estudar" , "lavar carro" , "treinar"]

// const novaTarefa = process.argv[2]

// tarefas.push(novaTarefa)

// console.table(tarefas)


