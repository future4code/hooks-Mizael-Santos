import express, { Request, Response } from "express";
import cors from "cors";
import { arrayDeProdutos } from "./data";
import { v4 as generateId } from "uuid";

const app = express();
app.use(express.json());
app.use(cors());

//pegar(get)
app.get("/teste", (req: Request, res: Response) => {
  res.status(200).send("A api está fucionando");
});

//create
app.post("/newProduct/create", (req: Request, res: Response) => {
  const { name, price } = req.body;
  try {
    if (!name || !price) {
      res.status(422).send("nome ou preço não informado");
    }

    if (typeof name !== "string") {
      res.status(422).send("nome escrito de forma invalida");
    }

    if (typeof price !== "number") {
      res.status(422).send("preço escrito de forma invalida");
    }

    if (price <= 0) {
      res.status(422).send("O número deve ser maio que 0");
    }

    const newProduct = {
      id: generateId(),
      name,
      price,
    };

    arrayDeProdutos.push(newProduct);

    res.status(201).send(arrayDeProdutos);
  } catch (error: any) {
    res.status(500).send(error.menssage);
  }
});

//editar
app.put("/product/edit/:id", (req: Request, res: Response) => {
  const editProduct = req.params.id;
  try {
    const product = arrayDeProdutos.find(
      (product) => product.id === editProduct
    );
    if (!product) throw new Error("produto não encontrado");

    if (typeof product.price !== "number") {
      res.status(422).send("preço escrito de forma invalida");
    }

    if (product.price <= 0) {
      res.status(422).send("O número deve ser maio que 0");
    }

    const newPrice = req.body.price;

    if (!newPrice) {
      res.status(422).send("O preço não foi recebido");
    }
    product.price = newPrice;

    res.status(201).send(arrayDeProdutos);
  } catch (error: any) {
    res.status(500).send(error.menssage);
  }
});

//delete
app.delete("/product/del/:id", (req: Request, res: Response) => {
  const productId = req.params.id;

  try {
    const product = arrayDeProdutos.find((product) => product.id === productId);
    if (!product) {
      res.status(404).send("Produto não encontrado");
    }
    if (!productId) {
      res.status(400).send("Id obrigatório");
    }
    const filteredProducts = arrayDeProdutos.filter((product) => {
      if (product.id !== productId) {
        return true;
      }
    });
    res.status(201).send(filteredProducts);
  } catch (error: any) {
    res.status(500).send(error.menssage);
  }
});

app.listen(3003, () => console.log("servidor rodando na porta 3003"));
