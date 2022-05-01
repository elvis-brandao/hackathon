import { NivelUsuario } from "../entities/classNivelUsuario";
import { BaseDatabase } from "./BaseDatabase";
import { Response } from "express";

export class NivelUsuarioDatabase extends BaseDatabase {

  public async createNivelUsuario(nivel: NivelUsuario){
    try{
      await BaseDatabase.connection("NivelUsuario").insert({
        id: nivel.getIdNivelUsuario(),
        bronze: nivel.getBronze(),
        prata: nivel.getPrata(),
        ouro: nivel.getOuro(),
        id_usuario: nivel.getIdDoUsuario()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }
  public async getNivelUsuario(id_usuario: string,res?: Response ): Promise<NivelUsuario>{
    try {
      const [nivel] =  await BaseDatabase
      .connection('NivelUsuario')
      .select()
      .where('id_usuario', id_usuario)

      if (!nivel) {
        res?.status(404).send({ message: "Informe um id válido" })
    }
      const newNivel = nivel && NivelUsuario.toNivelModel(nivel)
      return newNivel
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}