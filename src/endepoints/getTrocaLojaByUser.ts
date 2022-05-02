import { Request, Response } from "express";
import { TrocaLojaDatabase } from "../data/TrocaLojaDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getTrocaLojaByUser(req: Request, res: Response): Promise<void>{
  try{
    
    const { id }= req.params 

    const userTrocaLoja = new TrocaLojaDatabase();
    const trocaLoja = await userTrocaLoja.getTrocaLoja(id, res);

    const result = {
        id: trocaLoja.getIdTrocaLoja(),
        id_usuario: trocaLoja.getIdUsuario(),
        id_carteira: trocaLoja.getCarteira(),
        id_produto: trocaLoja.getIdProduto(),
        
        quantidade_produtos: trocaLoja.getQuantidadeProdutos(),
        total_de_pontos: trocaLoja.getTotalPontos()
    }
    
    res.status(200).send({ trocaLoja: result })
  }
  catch(error: any){

  }
}