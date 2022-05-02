import { Request, Response } from "express";
import { UserDatabase} from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getAllUser(req: Request, res: Response): Promise<void>{
  try{

    const userDatabase = new UserDatabase();
    const users = await userDatabase.getAllUsers();
    
    res.status(200).send(users)
  }
  catch(error: any){

  }
}