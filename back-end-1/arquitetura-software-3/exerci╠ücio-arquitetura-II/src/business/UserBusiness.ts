import { UserDatabase } from "../data/UserDatabase";
import { InvalidEmail } from "../error/invalidEmail";
import { InvalidRequest } from "../error/invalidRequest";
import { InvalidName } from "../error/shortName";
import { generateId } from "../services/generateId";
import { UserImputDTO } from "../types/userDTO";

export class UserBusiness {
  public createUser = async (input: UserImputDTO) => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new InvalidRequest()
      }

      if(!email.includes("@")){
        throw new InvalidEmail()
      }

      if(name.length<3){
        throw new InvalidName()
      }

      const id: string = generateId()

      const userDatabase = new UserDatabase();

      await userDatabase.insertUser({
        id,
        name,
        nickname,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
