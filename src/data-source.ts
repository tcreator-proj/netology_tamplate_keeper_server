import "reflect-metadata"
import { DataSource } from "typeorm"
import { Expert } from "./entity/Expert"
import 'dotenv/config'
import { Token } from "./entity/Token"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_DBNAME,
    schema: "netology_keeper",
    synchronize: true,
    logging: false,
    entities: [
        Expert, Token
    ],
    migrations: [],
    subscribers: [],
})
