export class Produtos{
  constructor(
    private id: string,
    private pontos_produto: number,
    private nome_produto: string
  ){}
  
  public getIdProduto = (): string => { 
    return this.id;
  }
  public getPontosProduto = (): number => { 
    return this.pontos_produto;
  }
  public getNomeProduto = (): string => { 
    return this.nome_produto;
  }
}