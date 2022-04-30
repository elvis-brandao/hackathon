import knex from "knex";
import {Knex} from "knex";
import dotenv from "dotenv";

//require('dotenv').config({path:'../env'})


dotenv.config();

export class BaseDatabase {
static connection: Knex = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true,
    },   
  });
    
};

