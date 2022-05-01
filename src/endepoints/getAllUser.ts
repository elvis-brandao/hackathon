import { Request, Response } from "express";
import { UserDatabase} from "../data/UserDatabase";
// import { Authenticator } from "../services/Authenticator";

export async function getAllUser(req: Request, res: Response): Promise<void>{
  try{
    // const token =  req.headers.authorization as string;

    // if(!token){
    //   res
    //   .status(422)
    //   .send("Esse endpoint exige um token.")
    // }

    // const authentication = new Authenticator()
    //     authentication.getTokenData(token)

    const userDatabase = new UserDatabase();
    const users = await userDatabase.getAllUsers();
    
    res.status(200).send(users)
  }
  catch(error: any){

  }
}