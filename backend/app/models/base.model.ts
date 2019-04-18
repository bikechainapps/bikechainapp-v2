import { QueryFile } from "pg-promise";
import path from "path";

import db from './database';

export default class BaseModel {
    constructor() {

    }

    public initializeTable(generateTableSqlFileName: string) {
        let queryFile: QueryFile = this.getSqlFile(`resources/sql/${generateTableSqlFileName}`);

        db.none(queryFile).catch(() => {
            throw new Error("Could not initialize table using file: " + generateTableSqlFileName);
        });
    }

    private getSqlFile(sqlFilePath: string): QueryFile {
        let filePath: string = path.join(__dirname, sqlFilePath);
        return new QueryFile(filePath, { minify: true });
    }
}