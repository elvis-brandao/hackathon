import { Produtos } from "../entities/classProdutos";
import { BaseDatabase } from "./BaseDatabase";

export class ProdutosDatabase extends BaseDatabase {

  public async createProdutos(produtos: Produtos){
    try{
      await BaseDatabase.connection("Produtos").insert({
        id: produtos.getIdProduto(),
        pontos_produto: produtos.getPontosProduto(),
        nome_produto: produtos.getNomeProduto()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }
  public async getProdutos(id: string): Promise<Produtos>{
    try {
      const produtos: any =  await BaseDatabase
      .connection('Produtos')
      .select('id', 'pontos_produtos', 'nome_produto')
      .where('id', id)
      return produtos
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

