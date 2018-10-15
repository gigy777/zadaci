import { Router } from 'express';
import  login  from './login.route';
import  register  from './register.route';

const auth = Router();
auth.use('/login',login());
auth.use('/register',register());


export default () => {
    return auth;
};