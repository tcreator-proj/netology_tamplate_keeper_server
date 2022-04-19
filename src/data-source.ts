import "reflect-metadata"
import { DataSource } from "typeorm"
import { Expert } from "./entity/Expert"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.PASS,
    database: process.env.DB_DBNAME,
    synchronize: true,
    logging: true,
    entities: [Expert],
    migrations: [],
    subscribers: [],
})
