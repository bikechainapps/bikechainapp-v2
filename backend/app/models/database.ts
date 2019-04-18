import { IMain, IDatabase, TConfig, QueryFile } from "pg-promise";
import pgPromise from "pg-promise";

type Database = IDatabase<IMain>;

const DATABASE_CONFIG: TConfig = {
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "root",
  password: "password"
};

const db: Database = pgPromise()(DATABASE_CONFIG);

export default db;
