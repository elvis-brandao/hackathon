import { TrocaLoja } from "../entities/classTrocaLoja";
import { BaseDatabase } from "./BaseDatabase";

export class TrocaLojaDatabase extends BaseDatabase {

  public async createProdutos(trocaLoja: TrocaLoja){
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
  public async getTrocaLoja(id: string): Promise<TrocaLoja>{
    try {
      const trocaLoja: any =  await BaseDatabase
      .connection('Troca_Loja')
      .select('id', 'id_usuario', 'id_carteira', 'id_produto', 'quantidade_produtos', 'total_de_pontos')
      .where('id', id)
      return trocaLoja
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

