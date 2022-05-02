import { Request, Response } from "express";
import { CarteiraDatabase} from "../data/CarteiraDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getCarteira(req: Request, res: Response): Promise<void>{
  try{

    const { id }= req.params 
    
    const userCarteira = new CarteiraDatabase();
    const carteira = await userCarteira. getCarteiraByUser(id, res);
        
    const result = {
      id: carteira.getIdCarteira(),
      pontos_usuario: carteira.getPontosUsuario(),
      id_usuario: carteira.getIdUsuario()
    }
    
    res.status(200).send({ carteira: result })
  }
  catch(error: any){

  }
}