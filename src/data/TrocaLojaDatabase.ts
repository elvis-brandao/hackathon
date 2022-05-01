import { TrocaLoja } from "../entities/classTrocaLoja";
import { BaseDatabase } from "./BaseDatabase";
import { Response } from "express"

export class TrocaLojaDatabase extends BaseDatabase {

  public async createTrocaLoja(trocaLoja: TrocaLoja){
    try{
      await BaseDatabase.connection("Troca_Loja").insert({
        id: trocaLoja.getIdTrocaLoja(),
        id_usuario: trocaLoja.getIdUsuario(),
        id_carteira: trocaLoja.getCarteira(),
        id_produto: trocaLoja.getIdProduto(),
        
        quantidade_produtos: trocaLoja.getQuantidadeProdutos(),
        total_de_pontos: trocaLoja.getTotalPontos()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }
  public async getTrocaLoja(id_usuario: string, res?: Response): Promise<TrocaLoja>{
    try {
      const [trocaLoja] =  await BaseDatabase
      .connection('Troca_Loja')
      .select()
      .where('id_usuario', id_usuario)
      if (!trocaLoja) {
        res?.status(404).send({ message: "Essa compra não existe, informe um id válido" })
    }
      const newTrocaLoja = trocaLoja && TrocaLoja.toTrocaLojaModel(trocaLoja)
      return newTrocaLoja
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

