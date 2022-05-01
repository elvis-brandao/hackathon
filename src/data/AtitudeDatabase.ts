import { Atitude } from "../entities/classAtitude";
import { BaseDatabase } from "./BaseDatabase";
import { Response } from "express";


export class AtitudeDatabase extends BaseDatabase {

    public async createAtitude(atitude: Atitude){
    try{
      await BaseDatabase.connection("Atitude").insert({
        id: atitude.getId(),
        name_atitude: atitude.getName(),
        photo_atitude: atitude.getPhotoAtitude(),
        legenda_atitude: atitude.getLegendaAtitude(),
        pontos_atitude: atitude.getPontos(),
        id_usuario: atitude.getIdUsuario(),
      })

    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAtitudeByUser(id_usuario: string, res?: Response): Promise<Atitude>{
    try {
      const [atitude] =  await BaseDatabase
      .connection('Atitude')
      .select()
      .where('id_usuario', id_usuario)
      if (!atitude) {
        res?.status(404).send({ message: "Essa atitude não existe, informe um id válido" })
    }
      const newAtitude = atitude && Atitude.toAtitudeModel(atitude)
      return newAtitude
      
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getAllAtitude(): Promise<Atitude>{
    try {
      const atitudes: any =  await BaseDatabase
      .connection('Atitude')
      .select()

      return atitudes
        
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

