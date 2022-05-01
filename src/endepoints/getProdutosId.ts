import { Request, Response } from "express";
import { ProdutosDatabase } from "../data/ProdutosDatabase";
// import { Authenticator } from "../services/Authenticator";

export async function getProdutoId(req: Request, res: Response): Promise<void>{
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

    const produtoDatabase = new ProdutosDatabase();
    const produtos = await produtoDatabase.getProdutosById(id);
    
    res.status(200).send(produtos)
  }
  catch(error: any){

  }
}