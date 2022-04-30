export class TrocaLoja{
  constructor(
    private id: string,
    private id_usuario: string,
    private id_carteira: string,
    private id_produto: string,
    private quantidade_produtos: number,
    private total_de_pontos: number
  ){}
  
  public getIdTrocaLoja = (): string => { 
    return this.id;
  }
  public getIdUsuario = (): string => { 
    return this.id_usuario;
  }
  public getCarteira = (): string => { 
    return this.id_carteira;
  }
  public getIdProduto = (): string => {
    return this.id_produto;
  }
  public getQuantidadeProdutos = (): number => {
    return this.quantidade_produtos;
  }
  public getTotalPontos = (): number => {
    return this.total_de_pontos;
  }
}