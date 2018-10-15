
import QueryService from './querys.service';

const querys = new QueryService();

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        querys.customQuery(
            'select id, user_name, first_name,' +
            'last_name, phone, created ' +
            'from users ' +
            'where id="' + id + '"'
        ).then((result) => {
            resolve(result[0])
        }).catch((err) => {
            reject(err)
        })
    })
}

const getUserData = (user_name) => {
    return new Promise((resolve, reject) => {
        querys.getSomeFieldsByField('users',
            ['id', 'user_name', 'first_name', 'last_name', 'phone'],
            'user_name', user_name)
            .then((result) => {
                resolve(result[0]);

            }).catch((err) => {
                reject(err)
            })
    })
}

export { getUserById, getUserData }


