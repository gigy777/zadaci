import * as bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';
const config = require('../configs/config.json');


const createId = (letters) => {
    return letters + (new Date().valueOf()).toString();
}

const createPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const setAuth = (req, res, next) => {

    if (req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization')) {
        try {

            req.user = jwt.verify(req.headers['authorization'], config.JWT_SECRET)['user'];
        } catch (err) {
            return res.status(401).json({
                message: 'Failed to authenticate token!'
            });
        }
    } else {
        return res.status(401).json({
            message: 'No token!'
        });
    }
    next();
    return;
}

export { createId, createPassword, isJson, setAuth };