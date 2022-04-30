import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../entities/classUser";


  export interface AuthenticationData{
    id:string;
    role: USER_ROLES;
  };

  export class Authenticator {
    public generate(input: AuthenticationData): string {

    const token = jwt.sign(input, (process.env.JWT_KEY) as string,
    {
      expiresIn: process.env.EXPIRES_IN,
    }
    );
    return token;
  }
  public getTokenData(token: string): AuthenticationData {
    const data = jwt.verify(token, (process.env.JWT_KEY) as string,)
    return data as AuthenticationData;
  }
}

export interface AuthenticationDatas{
  id:string;
};

export class Authenticators {
  public generate(input: AuthenticationDatas): string {

  const token = jwt.sign(input, (process.env.JWT_KEY) as string,
  {
    expiresIn: process.env.EXPIRES_IN,
  }
  );
  return token;
}
public getTokenData(token: string): AuthenticationDatas {
  const data = jwt.verify(token, (process.env.JWT_KEY) as string,)
  return data as AuthenticationDatas;
}
}