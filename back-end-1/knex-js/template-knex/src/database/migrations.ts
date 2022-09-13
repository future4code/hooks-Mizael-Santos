import connection from "./connection";

const createTatbleUsers = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Users (
            id BIGINT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR (255) NOT NULL UNIQUE            
            );
        `)    


        console.log("Tabela Users criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela de usuários.")
        console.log(error.sqlMessage)
    }
}

async function populateTableUsers() {
    try {
        await connection.raw(`
            INSERT INTO Users (id, nome, email)
            VALUES 
            (10, "Mariah Carey", "mariah@gmail.com"),
            (2, "John Travolta", "john@gmail.com"),
            (3, "Harry Styles", "harrys@gmail.com"),
            (4, "Avril Lavigne", "avril@gmail.com"),
            (5, "Bruno Mars",  "bruno@gmail.com");
        `)

       
        
        console.log("Usuarios criados com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela Users.")
        console.log(error.sqlMessage)
    }
}

createTatbleUsers()
.then(() => populateTableUsers())
.finally(() => process.exit())