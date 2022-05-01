import { Request, Response } from "express";
import { UserDatabase} from "../data/UserDatabase";
// import { Authenticator } from "../services/Authenticator";

export async function getUser(req: Request, res: Response): Promise<void>{
  try{
    // const token =  req.headers.authorization as string;
    const { id }= req.params 

    // if(!token){
    //   res
    //   .status(422)
    //   .send("Esse endpoint exige um token.")
    // }

    // const authentication = new Authenticator()
    //     authentication.getTokenData(token)

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUsers(id);
    
    res.status(200).send(user)
  }
  catch(error: any){

  }
}