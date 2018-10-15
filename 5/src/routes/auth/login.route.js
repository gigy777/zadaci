import { Router } from 'express';
import validate from 'express-validation';
import validations from './validation/login';
import { login } from '../../controllers/auth/login.controller';


const loginRoute = Router();

loginRoute.route('/')
    .post(validate(validations.post), login);

export default () => {
    return loginRoute;
};