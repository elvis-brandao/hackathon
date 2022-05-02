import { Request, Response } from "express";
import { NivelUsuarioDatabase } from "../data/NivelUsuarioDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getNivelUser(req: Request, res: Response): Promise<void>{
  try{
    
    const { id }= req.params 
    
    const userNivel = new NivelUsuarioDatabase();
    const nivel = await userNivel. getNivelUsuario(id, res);
        
    const result = {
        id: nivel.getIdNivelUsuario(),
        bronze: nivel.getBronze(),
        prata: nivel.getPrata(),
        ouro: nivel.getOuro(),
        id_usuario: nivel.getIdDoUsuario()
    }
    
    res.status(200).send({ nivel: result })
  }
  catch(error: any){

  }
}