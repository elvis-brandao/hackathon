import { User } from "../entities/classUser";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  public async createUser(user: User){
    try{
      await BaseDatabase.connection("User").insert({
        id: user.getId(),
        name_usuario: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        photo_usuario: user.getPhoto(),
        role: user.getRole()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

    public async findUserByEmail(email: string): Promise<User> {
    try {
        const user = await BaseDatabase.connection('User')
        .select('*')
        .where({ email })
    return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUser(id: string): Promise<User>{
    try {
      const user: any =  await BaseDatabase
      .connection('User')
      .select('id', 'name_usuario', 'email', 'password', 'photo_usuario', 'role')
      .where('id', id)
      return user
  
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

