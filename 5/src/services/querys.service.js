import DataBaseService from './database.service';

let dbService = new DataBaseService();


class QuerysSevice{
    constructor() { }
    
    getAllFields(table) {
        return new Promise((resolve, reject) => {
            dbService.query('SELECT * FROM ' + table, []).then((r) => {
                resolve(r);
            })
        })
    }

    getSomeFieldsByField(table, fields, field, value) {
        let _fields = '';
        let _length = fields.length - 1;
        for (let x in fields) {
            if (x == _length) {
                _fields += fields[x];
            }
            else {
                _fields += fields[x] + ',';
            }
        }
        return new Promise((resolve, reject) => {
            dbService.query('SELECT ' + _fields + ' FROM ' + table + ' WHERE ' + field + '="' + value + '"', []).then((r) => {
                console.log(r);
                resolve(r);
            }).catch((r) => {
                reject(r)
            });
        })
    }

    getById(table, id) {
        return new Promise((resolve, reject) => {
            dbService.query('SELECT * FROM ' + table + ' WHERE id="' + id + '"', []).then((r) => {
                resolve(r);
            }).catch((r) => {
                reject(r)
            });
        })
    }

    insertData(table, data) {
        return new Promise((resolve, reject) => {
            dbService.query('INSERT INTO ' + table + ' SET ?', data).then((r) => {
                if (r.insertId = !undefined) {
                    dbService.query('SELECT id FROM ' + table + ' WHERE id=last_insert_id()  ORDER BY created DESC LIMIT 1', []).then((res) => {
                        resolve(res);
                    }).catch((res) => {
                        reject(res);
                    })
                }

            }).catch((r) => {
                reject(r)
            });
        })
    }

    updateData(table, data, id) {
        return new Promise((resolve, reject) => {
            dbService.query('UPDATE ' + table + ' SET ? WHERE id ="' + id + '"', data).then((r) => {
                resolve(r);
            }).catch((r) => {
                reject(r)
            });
        })
    }

    customQuery(query) {
        return new Promise((resolve, reject) => {
            dbService.query(query, []).then((r) => {
                resolve(r);
            }).catch((r) => {
                reject(r)
            });
        })
    }

}

export default QuerysSevice;