import { Request, Response } from "express";
import { AtitudeDatabase} from "../data/AtitudeDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getAllAtitude(req: Request, res: Response): Promise<void>{
  try{
    
    const userTodasAtitudes = new AtitudeDatabase();
    const totdasAtitudes = await userTodasAtitudes. getAllAtitude();

    res.status(200).send(totdasAtitudes)
  }
  catch(error: any){

  }
}