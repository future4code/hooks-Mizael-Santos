import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  static getAllUsers() {
    throw new Error("Method not implemented.");
  }
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  async getAllUsers(name: string){
    const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .select("*")
      .where("name" , "like" , `%${name}%`)
      return result
}
}
