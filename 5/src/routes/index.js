import { Router } from 'express';
import  auth  from './auth';
import  contact  from './contact';


const route = Router();
route.use('/auth',auth());
route.use('/contact',contact());



export default () => {
    return route;
};