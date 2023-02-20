import { CustomError } from "./CustomError";

export class InvalidName extends CustomError{
    constructor(){
        super(406 , "Nome precisa pelo menos de 3 caractere")
    }
}