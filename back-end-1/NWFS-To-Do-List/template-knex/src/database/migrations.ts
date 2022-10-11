import connection from "./connection";

const criarTabelaTodoListUser = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS TodoListUser (
            id VARCHAR(255) NOT NULL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) NOT NULL UNIQUE,
            email VARCHAR(255) NOT NULL UNIQUE
            );
        `)

        console.log("Tabela TodoListUser criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela TodoListUser.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaTodoListUser() {
    try {
        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email)
            VALUES 
            (1, "Mizael", "miza", "miza@gmail.com"),
            (2, "Vinicius", "vini", "vini@gmail.com"),
            (3, "Helany", "nany", "nany@gmail.com");
        `)
        
        console.log("Tabela TodoListUser populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela TodoListUser.")
        console.log(error.sqlMessage)
    }
}

criarTabelaTodoListUser()
.then(() => popularTabelaTodoListUser())
.finally(() => process.exit())