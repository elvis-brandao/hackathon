export class NivelUsuario{
  constructor(
    private id: string,
    private bronze: string,
    private prata: string,
    private ouro: string,
    private id_usuario: string,
  ){}
  
  public getIdNivelUsuario = (): string => { 
    return this.id;
  }
  public getBronze = (): string => { 
    return this.bronze;
  }
  public getPrata = (): string => { 
    return this.prata;
  }
  public getOuro = (): string => { 
    return this.ouro;
  }
  public getIdDoUsuario = (): string => { 
    return this.id_usuario;
  }
  static toNivelModel(data: NivelUsuario) {
    return new NivelUsuario(
      data.id, 
      data.bronze, 
      data.prata, 
      data.ouro,
      data.id_usuario)
  }
}