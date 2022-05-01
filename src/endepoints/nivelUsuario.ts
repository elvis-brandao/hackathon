import { Request, Response } from "express";
import { IdGenerator } from '../services/idGenerator';
import { NivelUsuario } from '../entities/classNivelUsuario';
import { NivelUsuarioDatabase } from '../data/NivelUsuarioDatabase';

export async function setNivelUsuario(req: Request, res: Response): Promise<void>{
  try{

    // const token = req.headers.authorization

    // if(!token) {
    //   res
    //     .status(422)
    //     .send("Esse endpoint exige um token.")
    // } 

    const {bronze, prata, ouro, id_usuario} = req.body;

    if(!bronze || !prata || !ouro || !id_usuario){
      res
      .status(422)
      .send("Fill in all data");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()

    const nivelUsuario= new NivelUsuarioDatabase()
    const newNivelUsuario = new NivelUsuario(id, bronze, prata, ouro, id_usuario)
    await nivelUsuario.createNivelUsuario(newNivelUsuario)

  res.status(201).send({message:'Nível Adicionado'})
  }catch(err: any){ 
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}