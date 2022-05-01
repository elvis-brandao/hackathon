import { Request, Response } from "express";
import { NivelUsuarioDatabase } from "../data/NivelUsuarioDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getNivelUser(req: Request, res: Response): Promise<void>{
  try{
    const token =  req.headers.authorization as string;
    const { id }= req.params 

    if(!token){
      res
      .status(422)
      .send("Esse endpoint exige um token.")
    }

    const authentication = new Authenticator()
        authentication.getTokenData(token)
    
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