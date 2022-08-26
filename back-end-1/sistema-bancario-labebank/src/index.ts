import express, { Request, Response } from "express";
import cors from "cors";
import { dadosUsers , ano , hoje } from "./data";
import { extratosUsers } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users/cadastra", (req: Request, res: Response) => {
  const { name, cpf, dataNascimento, id  } = req.body;

  let dia = dataNascimento.split("/")

  let idade = ano - dia[2]

  console.log(dia)

  try {

      if(idade < 18){
        res.status(400).send("você não pode se cadastrar")
      }

    const novoUser = {
      id,
      name,
      cpf,
      dataNascimento,
    };

    dadosUsers.push(novoUser);

    res.status(201).send(dadosUsers);

  } catch (error: any) {
    res.status(422).send(error.menssage);
  }
});

app.get("/users", (req: Request, res: Response) => {
  try {
    if (req.headers.authentication === "mizael-costa") {
      res.send(dadosUsers);
    } else {
      res.send("erro na autorização!");
    }

    dadosUsers.push;

    res.status(200).send(dadosUsers);
  } catch (error: any) {
    res.send(error.menssage);
  }
});


app.listen(3003, () => console.log("servidor rodando na porta 3003"));
