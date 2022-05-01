export class Atitude{
  constructor(
    private id: string,
    private name_atitude: string,
    private photo_atitude: string,
    private legenda_atitude: string,
    private pontos_atitude: number,
    private id_usuario: string
  ){}
  public getId = (): string => { 
    return this.id;
  }
  public getName = (): string => { 
    return this.name_atitude;
  }
  public getPhotoAtitude = (): string => { 
    return this.photo_atitude;
  }
  public getLegendaAtitude = (): string => { 
    return this.legenda_atitude;
  }
  public getPontos = (): number => { 
    return this.pontos_atitude;
  }
  public getIdUsuario = (): string => { 
    return this.id_usuario;
  }
  static toAtitudeModel(data: Atitude) {
    return new Atitude(
      data.id, 
      data.name_atitude,
      data.photo_atitude,
      data.legenda_atitude,
      data.pontos_atitude,
      data.id_usuario)
  }
}