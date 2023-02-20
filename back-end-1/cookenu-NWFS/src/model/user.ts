export enum UserRoles {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type user = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: UserRoles;
};

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}


export interface AuthenticationData {
  id: string;
  role: string;
}

export interface GetMyProfileInputDTO {
  token: string
}

export interface GetOtherProfileInputDTO {
  id: string,
  token: string
}

export interface FollowUserInputDTO {
  userToFollowId: string,
  token: string
}
----------------------------------------------------------------------------------------------
services
Authenticator.ts
import { Unauthorized } from './../error/customError';
import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/user"


export class Authenticator {
    public generateToken = ({ id }: AuthenticationData): string => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "1min" }
        )
        return token
    }

    public getTokenData =(token:string):AuthenticationData =>{
        try {
            const payload = jwt.verify(token,process.env.JWT_KEY as string) as AuthenticationData
            return payload
        } catch (error:any) {
            console.log(error.message)
            throw new Unauthorized()
        }
    }
}