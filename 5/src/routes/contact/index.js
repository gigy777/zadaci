import { Router } from 'express';
import validate from 'express-validation';
import validations from './validation/contact';
import { create, getOne, list, updateById, deleteById } from '../../controllers/contact/contact.controller';
import { setAuth } from '../../services/common.service';

const contact = Router();
contact
    .post('/', validate(validations.post),setAuth, create)
    .get('/',setAuth, list)
    .get('/:id', getOne)
    .put('/:id', updateById)
    .delete('/:id', deleteById)


export default () => {
    return contact;
};