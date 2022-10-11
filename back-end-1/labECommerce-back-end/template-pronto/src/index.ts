import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";
import { connection } from "./data/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const { name, email, password } = req.body;

    if (!name) {
      errorCode = 406;
      throw new Error("Insira o nome do usuário");
    }

    if (!email) {
      errorCode = 406;
      throw new Error("Insira o email do usuário");
    }

    if (!password) {
      errorCode = 406;
      throw new Error("Insira o password do usuário");
    }

    let newUser = {
      id: generateId(),
      name,
      email,
      password,
    };

    await connection.raw(`
      INSERT INTO Labecommerce_users(id , name , email , password)
      VALUES("${newUser.id}" , "${newUser.name}" , "${newUser.email}" , "${newUser.password}")
      `);

    res.status(200).send("Usuário criado com sucesso!");
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const user = await connection.raw(`
          SELECT * FROM Labecommerce_users
      `);

    res.status(200).send(user[0]);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/products", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const { name, price, image_url } = req.body;

    if (!name) {
      errorCode = 406;
      throw new Error("Insira o nome do produto");
    }

    if (!price) {
      errorCode = 406;
      throw new Error("Insira o preço do produto");
    }

    if (!image_url) {
      errorCode = 406;
      throw new Error("coloque a url da imagem do produto");
    }

    let newProduct = {
      id: generateId(),
      name,
      price,
      image_url,
    };

    await connection.raw(`
        INSERT INTO labecommerce_products(id , name , price , image_url)
        VALUES("${newProduct.id}" , "${newProduct.name}" , "${newProduct.price}" , "${newProduct.image_url}")
        `);

    res.status(200).send("Produto criado com sucesso!");
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/products", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const user = await connection.raw(`
          SELECT * FROM labecommerce_products
      `);

    res.status(200).send(user[0]);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/purchases", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const user_id = req.body.user_id as string;
    const product_id = req.body.product_id as string;
    const quantity = Number(req.body.quantity);

    if (!user_id) {
      errorCode = 406;
      throw new Error("Insira o user_id");
    }

    if (!product_id) {
      errorCode = 406;
      throw new Error("Insira o product_id");
    }

    if (!quantity) {
      errorCode = 406;
      throw new Error("Insira a quantidade");
    }

    const price_prodcuts = await connection("labecommerce_products")
      .select("price")
      .where("id", "LIKE", `${product_id}`);

    let newPurchases = {
      id: generateId(),
      user_id,
      product_id,
      quantity,
      total_price: quantity * Number(price_prodcuts[0].price),
    };

    await connection.raw(`
        INSERT INTO labecommerce_purchases(id , user_id , product_id , quantity , total_price)
        VALUES("${newPurchases.id}", "${newPurchases.user_id}", "${newPurchases.product_id}", "${newPurchases.quantity}", "${newPurchases.total_price}")
        `);

    res.status(200).send("Compra realizada com sucesso!");
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users/:user_id/purchases", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const user_id = req.params.user_id;
    const purchases = await connection.raw(`
    SELECT u.name as user_name, pr.name as product_name, pu.quantity, pu.total_price FROM labecommerce_purchases as pu 
    JOIN labecommerce_products as pr ON pu.product_id = pr.id
    JOIN Labecommerce_users as u ON pu.user_id = u.id
    WHERE user_id LIKE "${user_id}"
    `);

    if(purchases.length < 1){
      errorCode = 404
      throw new Error("compra não encontrada")
    }

    res.status(200).send(purchases[0])

  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
