import { Request, Response } from "express";
import { ProdutosDatabase } from "../data/ProdutosDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getProdutos(req: Request, res: Response): Promise<void>{
  try{

    const produtoDatabase = new ProdutosDatabase();
    const produtos = await produtoDatabase.getProdutos();
    
    res.status(200).send(produtos)
  }
  catch(error: any){

  }
}