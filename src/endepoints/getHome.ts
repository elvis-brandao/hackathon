import { Request, Response } from "express";
import { ProdutosDatabase } from "../data/ProdutosDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getHome(req: Request, res: Response): Promise<void>{

    
    res.status(200).send("ok funcionando")
  
  
}