import express, { Request, Response } from "express";
import cors from "cors";
import { dadosUsers, ano, hoje } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

//criar conta do cliente
app.post("/users/cadastra", (req: Request, res: Response) => {
  const { name, cpf, dataNascimento, id } = req.body;

  let dia = dataNascimento.split("/");

  let idade = ano - dia[2];

  console.log(dia);

  try {
    if (idade < 18) {
      res.status(400).send("você não pode se cadastrar");
    }

    const novoUser = {
      id,
      name,
      cpf,
      dataNascimento,
      saldo: 0,
      extrato: [
        {
          valor: 0,
          data: "18/12/2013",
          descricao: "deposito em dinheiro",
        },
      ],
    };

    dadosUsers.push(novoUser);

    res.status(201).send(dadosUsers);
  } catch (error: any) {
    res.status(422).send(error.menssage);
  }
});

//pegar conta do cliente
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

// pegar saldo da conta do cliente
app.get("/balance/:name/:cpf", (req: Request, res: Response) => {
  const { name, cpf } = req.params;
  let errorCode = 400;
  try {
    if (!name || !cpf) {
      errorCode = 422;
      throw new Error("nome ou cpf não passado!");
    }
    // pecorrendo o array procurando o usuario que tem essas informçoes name e cpf
    const user = dadosUsers.find((users) => {
      return users.name === name && users.cpf === Number(cpf);
    });
    // validacao pra ver se foi encontrado algum usuario no array

    if (!user) {
      errorCode = 404;
      throw new Error("Usuario não encotrado");
    }

    console.log(user);

    const pegandoSaldo = user.saldo;

    console.log(pegandoSaldo);

    res.send(pegandoSaldo);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// adicionar saldo em um usuario especifico
app.post("/balance/create", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const { name, cpf, saldo } = req.body;

    if (!name) {
      errorCode = 422;
      throw new Error("Digite um nome");
    }
    if (!cpf) {
      errorCode = 422;
      throw new Error("Digite um cpf");
    }
    if (!saldo) {
      errorCode = 422;
      throw new Error("Digite a saldo");
    }

    const user = dadosUsers.find((users) => {
      return users.name === name && users.cpf === Number(cpf);
    });

    if (!user) {
      errorCode = 404;
      throw new Error("Usuario não encotrado");
    }

    const saldoAntigo = user.saldo;

    const juncaoDeSaldos = saldo + saldoAntigo;

    user.saldo = juncaoDeSaldos;

    res.status(201).send("Usuario adicionado");
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

// parte de transferencia
app.post("/account/transfer", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const { nameOrigem, cpfOrigem, nameDestino, cpfDestino, valor } = req.body;

    if (!cpfOrigem) {
      errorCode = 422;
      throw new Error("Digite CPF do titular da conta de origem.");
    }
    if (!cpfDestino) {
      errorCode = 422;
      throw new Error("Digite CPF do titular da conta de destino.");
    }
    if (!nameOrigem) {
      errorCode = 422;
      throw new Error("Digite nome do titular da conta de origem.");
    }
    if (!nameDestino) {
      errorCode = 422;
      throw new Error("Digite nome do titular da conta de origem.");
    }
    if (!valor) {
      errorCode = 422;
      throw new Error("Digite valor da transferencia");
    }

    const userOrigem = dadosUsers.find(
      (user) => (user.cpf as number) === (cpfOrigem as number)
    );

    if (!userOrigem || userOrigem.name !== nameOrigem) {
      errorCode = 404;
      throw new Error("Conta de origem não encontada");
    }

    userOrigem.extrato.push({
      valor,
      data: new Date().toLocaleDateString(),
      descricao: "Pagamento de conta.",
    });

    if (valor > userOrigem.saldo) {
      errorCode = 401;
      throw new Error("Saldo insuficiente.");
    }

    const userDestino = dadosUsers.find(
      (user) => (user.cpf as number) === (cpfDestino as number)
    );

    if (
      !userDestino ||
      (userDestino.name as string) !== (nameDestino as string)
    ) {
      errorCode = 404;
      throw new Error("Conta de destino não encontada");
    }

    userDestino.extrato.push({
      valor,
      data: new Date().toLocaleDateString(),
      descricao: "Deposito de dinheiro.",
    });

    res.status(201).send("ok");
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.listen(3003, () => console.log("servidor rodando na porta 3003"));
