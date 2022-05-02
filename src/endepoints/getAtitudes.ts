import { Request, Response } from "express";
import { AtitudeDatabase} from "../data/AtitudeDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getAtitudesUser(req: Request, res: Response): Promise<void>{
  try{
    
    const { id }= req.params 
    
    const userAtitude = new AtitudeDatabase();
    const atitude = await userAtitude. getAtitudeByUser(id, res);
        
    const result = {
      id: atitude.getId(),
        name_atitude: atitude.getName(),
        photo_atitude: atitude.getPhotoAtitude(),
        legenda_atitude: atitude.getLegendaAtitude(),
        pontos_atitude: atitude.getPontos(),
        id_usuario: atitude.getIdUsuario(),
    }
    
    res.status(200).send({ atitude: result })
  }
  catch(error: any){

  }
}