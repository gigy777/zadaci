import * as mysql from 'mysql';
import config from '../configs/config.json';


class DataBaseService {
    dbConfig = {
        host: config.database.host,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database
    }

    constructor() {
        this.dbPool = mysql.createPool(this.dbConfig);
    }

    query(sql, params) {
        console.log('sql', sql);

        return new Promise((resolve, reject) => {
            this.dbPool.getConnection((error, conn) => {
                if (error) {
                    console.log('conn fall');
                    reject(error);
                }
                else {
                    console.log('conn succes');
                    conn.query(sql, params, (err, result) => {
                        console.log('query succes');
                        if (!err) {
                            resolve(result);
                            return conn.release();
                        }
                        console.log(err);
                        reject(err)
                        conn.release();
                    })
                }
            })
        })

    }
}

export default DataBaseService;


