import express, { Request , Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { v4 as generateid } from 'uuid';
import { Users } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/Users", async (req: Request , res: Response) => {
  let errorCode = 400

  try {
    const user = req.query.user

    if(user){
        const resultado = await connection.raw(` 
         SELECT * FROM Users
         WHERE nome = "${user}"
         `)
      res.status(200).send(resultado[0])
    }``
    const resultado = await connection.raw(`
         SELECT * FROM Users;
    `)
    res.status(200).send(resultado[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/Users" , async (req: Request , res: Response) => {
  let errorCode = 400

  try {
    const {nome , email} = req.body

    if(!nome || !email){
      throw new Error("passe o nome e o email do usuário")
    }

    if(!email.includes("@")){
      throw new Error("coloque o @ no email")
    }

    if(nome.length < 4){
      errorCode = 406
      throw new Error ("O nome deve ter pelo menos 4 caracteres.")
   }

    const novoUsuario = {
      id:generateid(),
      nome: nome,
      email: email
    }
    await connection.raw(`
        INSERT INTO Users(id ,nome , email)
        VALUES("${novoUsuario.id}" , "${novoUsuario.nome}" , "${novoUsuario.email}")
    `)

    res.status(200).send("Usuario criado com sucesso!")


  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/Users/:id", async (req: Request , res: Response) => {
    let errorCode = 400
    try {
      const id = req.params.id
      const email = req.body.email
  
      const Users = await connection.raw(`
         SELECT * FROM Users 
         WHERE id = "${id}";
      `)
  
      if (Users[0].length === 0) {
        throw new Error("Usuário não encontrado")
      }
  
      if (!email) {
        throw new Error("É necessário passar o novo email")
      }

      if(!email.includes("@")){
        throw new Error("coloque o @ no email")
      }

      await connection.raw(`
      UPDATE Users
      SET email = "${email}"
      WHERE id = "${id}";
      `)
  
      res.status(200).send("email alterado")
    } catch (error) {
      res.status(errorCode).send(error.message)
    }
  
  })


  app.delete("/Users/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const id = req.params.id
  
      const Users = await connection.raw(`
      SELECT * FROM Users
      WHERE id = "${id}";
      `)
  
      if (Users[0].length === 0) {
        throw new Error("Usuario não encontrado")
      }
  
      await connection.raw(`
        DELETE FROM Users
        WHERE id = "${id}";
      `)
  
      res.status(200).send("Usuario deletado")
    } catch (error) {
      res.status(errorCode).send(error.message)
    }
  })


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});