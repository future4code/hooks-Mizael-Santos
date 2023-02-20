import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { MovieDatabase } from "../data/MovieDatabase"

export class MovieBusiness {
  async create({title, description, duration_in_minutes , year_of_release  }: any):Promise<void> {
    if ( !title || !description || !duration_in_minutes ||  !year_of_release ) {
      throw new Error("Dados inválidos (title, description, duration_in_minutes , year_of_release )")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release
    })
  }

  async get(title: string){
    try {
      if (!title) {
        title = "%"
      }
  
      const userDatabase = new UserDatabase()
      const result = userDatabase.getAllUsers(title)
      return result
  
    } catch (error: any) {
      throw new Error(error.message);
    }
}
}