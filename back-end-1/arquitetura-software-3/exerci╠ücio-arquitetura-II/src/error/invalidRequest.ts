import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError{
    constructor(){
        super(400 , "Requisicao invalida , um ou mais campo vazio")
    }
}