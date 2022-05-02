import { Request, Response } from "express";
import { ProdutosDatabase } from "../data/ProdutosDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getProdutoId(req: Request, res: Response): Promise<void>{
  try{
    
    const { id }= req.params 


    const produtoDatabase = new ProdutosDatabase();
    const produtos = await produtoDatabase.getProdutosById(id);
    
    res.status(200).send(produtos)
  }
  catch(error: any){

  }
}