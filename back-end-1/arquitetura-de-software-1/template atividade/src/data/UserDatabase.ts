import { User } from "../types/types"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase{
    //01
    public insertUser = async(user:User)=>{
        try {
            await UserDatabase.connection('User_Arq')
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })

        } catch (error) {

        }
    }

    //02
    public getAllUser = async()=>{
        try {

            const result = await UserDatabase.connection("User_Arq")
            .select()

            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    //03
    public deleteUser = async(id: string)=>{
        try {

            await UserDatabase.connection("User_Arq")
            .delete()
            .where({id})

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}