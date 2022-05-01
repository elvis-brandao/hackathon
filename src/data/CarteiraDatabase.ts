import { Carteira } from "../entities/classCarteira";
import { BaseDatabase } from "./BaseDatabase";
import { Response } from "express";

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

  public async getCarteiraByUser(id_usuario: string, res?: Response): Promise<Carteira>{
    try {
      const [carteira] =  await BaseDatabase
      .connection('UserCarteira')
      .select()
      .where('id_usuario', id_usuario)
      if (!carteira) {
        res?.status(404).send({ message: "Essa carteira não existe, informe um id válido" })
    }
      const newCarteira = carteira && Carteira.toCarteiraModel(carteira)
      return newCarteira
      
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}