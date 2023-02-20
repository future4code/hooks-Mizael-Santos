import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserImputDTO } from "../types/userDTO";

export class UserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password } = req.body;

      const input: UserImputDTO = {
        name,
        nickname,
        email,
        password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
