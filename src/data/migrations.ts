import { BaseDatabase } from "./BaseDatabase";
import dotenv from "dotenv";


dotenv.config();

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }
console.log(BaseDatabase.connection.client.config);

const createTables = () => BaseDatabase.connection.raw(`

    CREATE TABLE IF NOT EXISTS User (
      id VARCHAR(255) PRIMARY KEY,
      name_usuario VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      photo_usuario VARCHAR(500) NOT NULL,
      role VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS UserCarteira (
      id VARCHAR(255) PRIMARY KEY,
      pontos_usuario INT NOT NULL,
      id_usuario VARCHAR(255) NOT NULL,
      FOREIGN KEY (id_usuario) REFERENCES User(id)
    );

    CREATE TABLE IF NOT EXISTS Atitude (
      id VARCHAR(255) PRIMARY KEY,
      name_atitude VARCHAR(255) NOT NULL,
      photo_atitude VARCHAR(500) NOT NULL,
      legenda_atitude VARCHAR(255) NOT NULL,
      pontos_atitude INT NOT NULL,
      id_usuario VARCHAR(255) NOT NULL,
      FOREIGN KEY (id_usuario) REFERENCES User(id)
    );

    CREATE TABLE IF NOT EXISTS Produtos (
      id VARCHAR(255) PRIMARY KEY,
      pontos_produto INT NOT NULL,
      name_produto VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Troca_Loja (
      id VARCHAR(255) PRIMARY KEY,
      id_usuario VARCHAR(255) NOT NULL,
      id_carteira VARCHAR(255) NOT NULL,
      id_produto VARCHAR(255) NOT NULL,
      quantidade_produtos INT NOT NULL,
      total_de_pontos INT NOT NULL,
      FOREIGN KEY (id_usuario) REFERENCES User(id),
      FOREIGN KEY (id_carteira) REFERENCES UserCarteira(id),
      FOREIGN KEY (id_produto) REFERENCES Produtos(id)
    );

    CREATE TABLE IF NOT EXISTS NivelUsuario (
      id VARCHAR(255) PRIMARY KEY,
      bronze VARCHAR(255) NOT NULL,
      prata VARCHAR(255) NOT NULL,
      ouro VARCHAR(255) NOT NULL,
      id_usuario VARCHAR(255) NOT NULL,
      FOREIGN KEY (id_usuario) REFERENCES User(id)
    );
`)
.then(() => { console.log("Tabelas criadas") })
.catch(printError)


const closeConnection = () => { BaseDatabase.connection.destroy() }

createTables()
  .finally(closeConnection)