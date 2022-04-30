import { Carteira } from "../entities/classCarteira";
import { BaseDatabase } from "./BaseDatabase";

export class CarteiraDatabase extends BaseDatabase {

  public async createCarteira(carteira: Carteira){
    try{
      await BaseDatabase.connection("UserCarteira").insert({
        id: carteira.getIdCarteira(),
        pontos_usuario: carteira.getPontosUsuario(),
        id_usuario: carteira.getIdUsuario()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }
  public async getCarteira(id: string): Promise<Carteira>{
    try {
      const carteira: any =  await BaseDatabase
      .connection('UserCarteira')
      .select('id', 'pontos_usuario', 'id_usuario')
      .where('id', id)
      return carteira
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

