export class Carteira{
  constructor(
    private id: string,
    private pontos_usuario: number,
    private id_usuario: string
  ){}
  
  public getIdCarteira = (): string => { 
    return this.id;
  }
  public getPontosUsuario = (): number => { 
    return this.pontos_usuario;
  }
  public getIdUsuario = (): string => { 
    return this.id_usuario;
  }

  static toCarteiraModel(data: Carteira) {
    return new Carteira(
      data.id, 
      data.pontos_usuario, 
      data.id_usuario)
  }
}