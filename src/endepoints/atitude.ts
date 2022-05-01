import { Request, Response } from "express";
import { IdGenerator } from '../services/idGenerator';
import { Atitude } from '../entities/classAtitude';
import { AtitudeDatabase } from '../data/AtitudeDatabase';

export async function setAtitude(req: Request, res: Response): Promise<void>{
  try{

    // const token = req.headers.authorization

    // if(!token) {
    //   res
    //     .status(422)
    //     .send("Esse endpoint exige um token.")
    // } 

    const {name_atitude, photo_atitude, legenda_atitude, pontos_atitude, id_usuario} = req.body;

    if(!name_atitude || !photo_atitude || !legenda_atitude || !pontos_atitude || !id_usuario){
      res
      .status(422)
      .send("Fill in all data");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()

    const atitudeDatabase= new AtitudeDatabase()
    const newAtitude = new Atitude(id, name_atitude, photo_atitude, legenda_atitude, pontos_atitude, id_usuario)
    await atitudeDatabase.createAtitude(newAtitude)

    res.status(201).send({message:'Atitude Adicionada'})
  }catch(err: any){ 
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}