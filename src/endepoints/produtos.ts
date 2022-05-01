import { Request, Response } from "express";
import { IdGenerator } from '../services/idGenerator';
import { Produtos } from '../entities/classProdutos';
import { ProdutosDatabase } from '../data/ProdutosDatabase';

export async function setProdutos(req: Request, res: Response): Promise<void>{
  try{

    // const token = req.headers.authorization

    // if(!token) {
    //   res
    //     .status(422)
    //     .send("Esse endpoint exige um token.")
    // } 

    const {pontos_produto, name_produto} = req.body;

    if(!pontos_produto || !name_produto){
      res
      .status(422)
      .send("Fill in all data");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()

    const listaDeProduto= new ProdutosDatabase()
    const newProdutos = new Produtos(id, pontos_produto, name_produto)
    await listaDeProduto.createProdutos(newProdutos)

  res.status(201).send({message:'Produto Adicionado'})
  }catch(err: any){ 
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}