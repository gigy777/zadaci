import { Router } from 'express';
import validate from 'express-validation';
import validations from './validation/register';
import { register } from '../../controllers/auth/register.controller';


const registerRoute = Router();

registerRoute.route('/')
    .post(validate(validations.post), register);


export default () => {
    return registerRoute;
};