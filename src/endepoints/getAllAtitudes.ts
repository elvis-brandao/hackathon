import { Request, Response } from "express";
import { AtitudeDatabase} from "../data/AtitudeDatabase";
// import { Authenticator } from "../services/Authenticator";

export async function getAllAtitude(req: Request, res: Response): Promise<void>{
  try{
    // const token =  req.headers.authorization as string;


    // if(!token){
    //   res
    //   .status(422)
    //   .send("Esse endpoint exige um token.")
    // }

    // const authentication = new Authenticator()
    //     authentication.getTokenData(token)
    
    const userTodasAtitudes = new AtitudeDatabase();
    const totdasAtitudes = await userTodasAtitudes. getAllAtitude();

    res.status(200).send(totdasAtitudes)
  }
  catch(error: any){

  }
}