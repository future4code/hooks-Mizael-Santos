import { Request, Response } from "express";
import { connection } from "../data/connection";


export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  let statusCode = 400;
  try {
    let name = req.query.name as string
    let type = req.params.type as string
    let sort = req.query.sort as string
    let order = req.query.order as string
    let size = Number(req.query.size)
    let page = Number(req.query.page)
    
    if (!name) {
      name = "%";
    }

    let offset = size * (page - 1) 


    const result = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)
      .where("type", "LIKE", `%${type}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)
  
    if (!result.length) {
      throw new Error("Usuário não encontrado");
    }
    return result;


  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
};
