import { Produtos } from "../entities/classProdutos";
import { BaseDatabase } from "./BaseDatabase";

export class ProdutosDatabase extends BaseDatabase {

  public async createProdutos(produtos: Produtos){
    try{
      await BaseDatabase.connection("Produtos").insert({
        id: produtos.getIdProduto(),
        pontos_produto: produtos.getPontosProduto(),
        name_produto: produtos.getNomeProduto()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }
  public async getProdutos(): Promise<Produtos>{
    try {
      const produtos: any =  await BaseDatabase
      .connection('Produtos')
      .select()
      
      return produtos
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getProdutosById(id:string): Promise<Produtos>{
    try {
      const produto: any =  await BaseDatabase
      .connection('Produtos')
      .select()
      .where('id', id)
      return produto
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

