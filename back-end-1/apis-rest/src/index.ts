import express, { Request, Response } from "express";
import cors from "cors";
import { users, User, USER_TYPE } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  try {
    if (req.headers.authentication === "nome-sobrenome") {
      res.send(users);
    } else {
      res.send("erro na autorização!");
    }

    users.push;

    res.status(200).send(users);
  } catch (error: any) {
    res.send(error.menssage);
  }
});

// a. Qual método HTTP você deve utilizar para isso?

// usamos o metodo GET

// b. Como você indicaria a entidade que está sendo manipulada?

// a entidade /users

app.get("/users/type", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const type = (req.query.type as string).toUpperCase();

    if ((type !== "ADMIN" && type !== "NORMAL") || !type) {
      errorCode = 422;
      throw new Error("forneça um valor valido!");
    }

    const typeUser = [];

    for (const user of users) {
      if (user.type === type) {
        typeUser.push(user);
      }
    }

    if (!typeUser) {
      errorCode = 404;
      throw new Error("Não encontrado");
    }
    res.status(200).send(typeUser);
  } catch (error: any) {
    res.status(errorCode).send(error.menssage);
  }
});

// a. Como você passou os parâmetros de type para a requisição? Por quê?

// passei por meio de query.params , por que é mais utilizado.

// b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?

// sim , fazendo validações.

app.get("/users/:name", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name = req.params.name;

    let newUsers: User[] = [];

    for (let user of users) {
      if (user.name === name) {
        newUsers.push(user);
      }
    }

    if (newUsers.length === 0) {
      errorCode = 404;
      throw new Error("Usuário não encontrado.");
    }

    res.send(newUsers);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// *a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*

// o paramentro name

// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app.post("/users/create", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const { id, name, email, age } = req.body;
    const type = (req.body.type as string).toUpperCase();

    if (!name) {
      errorCode = 422;
      throw new Error("Digite um nome");
    }
    if (!email) {
      errorCode = 422;
      throw new Error("Digite um email");
    }
    if (!type) {
      errorCode = 422;
      throw new Error("Digite um type");
    }
    if (!age) {
      errorCode = 422;
      throw new Error("Digite a idade");
    }
    if (type !== "ADMIN" && type !== "NORMAL") {
      errorCode = 401;
      throw new Error("Type invalido");
    }

    if (type === "ADMIN") {
      const newUser = {
        id,
        name,
        email,
        type: USER_TYPE.ADMIN,
        age,
      };
      users.push(newUser);
    } else if (type === "NORMAL") {
      const newUser = {
        id,
        name,
        email,
        type: USER_TYPE.NORMAL,
        age,
      };
      users.push(newUser);
    }

    res.status(201).send("Usuario adicionado");
  } catch (error: any) {
    res.status(500).send(error.menssage);
  }
});

// a. Mude o método do endpoint para `PUT`. O que mudou?
// Não mudou nada

// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// Não , por que o metodo put é mais ideal para editar algo do que já ta feito.

app.listen(3003, () => console.log("servidor rodando na porta 3003"));
