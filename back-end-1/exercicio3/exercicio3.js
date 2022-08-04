// EXERCICIO 03

const tarefas = ["estudar", "lavar carro", "treinar"];

const novaTarefa = process.argv[2];

tarefas.push(novaTarefa);

console.table(tarefas);
