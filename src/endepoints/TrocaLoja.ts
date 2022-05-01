import { Request, Response } from "express";
import { IdGenerator } from '../services/idGenerator';
import { TrocaLoja } from '../entities/classTrocaLoja';
import { TrocaLojaDatabase } from '../data/TrocaLojaDatabase';

export async function setTrocaLoja(req: Request, res: Response): Promise<void>{
  try{

    // const token = req.headers.authorization

    // if(!token) {
    //   res
    //     .status(422)
    //     .send("Esse endpoint exige um token.")
    // } 

    const {id_usuario, id_carteira, id_produto,  quantidade_produtos, total_de_pontos} = req.body;

    if(!id_usuario || !id_carteira || !id_produto || !quantidade_produtos || !total_de_pontos){
      res
      .status(422)
      .send("Fill in all data");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()

    const trocaLojaDatabase= new TrocaLojaDatabase()
    const newTrocaLoja = new TrocaLoja(id, id_usuario, id_carteira, id_produto, quantidade_produtos, total_de_pontos)
    await trocaLojaDatabase.createTrocaLoja(newTrocaLoja)

  res.status(201).send({message:'Troca realizada!'})
  }catch(err: any){ 
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}