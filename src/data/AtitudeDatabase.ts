import { Atitude } from "../entities/classAtitude";
import { BaseDatabase } from "./BaseDatabase";


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

  public async getAtitude(id: string): Promise<Atitude>{
    try {
      const atitude: any =  await BaseDatabase
      .connection('Atitude')
      .select('id', 'name_atitude', 'photo_atitude', 'legenda_atitude', 'pontos_atitude', 'id_usuario')
      .where('id', id)
      return atitude
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

