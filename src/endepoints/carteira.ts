import { Request, Response } from "express";
import { IdGenerator } from '../services/idGenerator';
import { Carteira } from '../entities/classCarteira';
import { CarteiraDatabase } from '../data/CarteiraDatabase';

export async function setCarteira(req: Request, res: Response): Promise<void>{
  try{

    // const token = req.headers.authorization

    // if(!token) {
    //   res
    //     .status(422)
    //     .send("Esse endpoint exige um token.")
    // } 

    const {pontos_usuario, id_usuario} = req.body;

    if(!pontos_usuario || !id_usuario){
      res
      .status(422)
      .send("Fill in all data");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()

    const carteiraDatabase= new CarteiraDatabase()
    const newCarteira = new Carteira(id, pontos_usuario, id_usuario)
    await carteiraDatabase.createCarteira(newCarteira)

  res.status(201).send({message:'Carteira Adicionada'})
  }catch(err: any){ 
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}