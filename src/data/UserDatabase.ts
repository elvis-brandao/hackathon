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

  public async getAllUsers(): Promise<User[]>{
    try {
      const users =  await BaseDatabase
      .connection('User')
      .select(
        'id', 
        'name_usuario', 
        'email', 
        'photo_usuario', 
        'role')
        
      return users.map((user) => User.toUserModel(user));
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUsers(id: string): Promise<User>{
    try {
      const users: any =  await BaseDatabase
      .connection('User')
      .select()
      .where('id', id)
      return users 
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }
}

