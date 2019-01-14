import path from "path";
import { IMain, IDatabase, TConfig, QueryFile } from "pg-promise";
import pgPromise from "pg-promise";

const DATABASE_CONFIG: TConfig = {
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "root",
  password: "password"
};

class DatabaseProvider {
  public db: IDatabase<IMain>;

  constructor() {
    const databaseBuilder: IMain = pgPromise();
    this.db = databaseBuilder(DATABASE_CONFIG);
  }

  public initializeDatabase() {
    let queryFile: QueryFile = this.getSqlFile("resources/initDatabase.sql");

    this.db
      .none(queryFile)
      .then(() => {
        console.log("initialized db successfully");

        this.db
          .any("SELECT * FROM status")
          .then(rows => {
            if (rows.length == 0) {
              // status table is empty, initialize it
              let queryFile: QueryFile = this.getSqlFile(
                "resources/initStatusTable.sql"
              );

              this.db
                .none(queryFile)
                .then(() => {
                  console.log("initialized status table with data");
                })
                .catch(error => {
                  console.error(
                    "could not input data into status table",
                    error
                  );
                });
            }
          })
          .catch(error => {
            console.error("failed to make query", error);
          });
      })
      .catch(error => {
        console.error("could not initialize db", error);
      });
  }

  private getSqlFile(sqlFilePath: string): QueryFile {
    const filePath: string = path.join(__dirname, sqlFilePath);
    return new QueryFile(filePath, {
      minify: true
    });
  }
}

export default DatabaseProvider;
