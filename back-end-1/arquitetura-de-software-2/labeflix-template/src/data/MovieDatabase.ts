import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  get(title: any) {
    throw new Error("Method not implemented.");
  }
  static getAllUsers() {
    throw new Error("Method not implemented.");
  }
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description, duration_in_minutes , year_of_release }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  async getAllMovie(title: string){
    const result = await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
      .select("*")
      .where("title" , "like" , `%${title}%`)
      return result
}
}
