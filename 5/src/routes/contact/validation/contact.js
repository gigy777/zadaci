import  Joi from 'joi';

export default {
  post: {
    body: {
      user_id: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      phone: Joi.string().required()
    }
  }
};