import Joi from 'joi';
import functions from '../functions/function';

const { matchMeal } = functions;

const authError = (res, statusCode, reply) => res.status(statusCode).json({
  status: 'fail',
  data: reply,
});

const schema = {
  name: Joi.string().required(),
  size: Joi.string().required(),
  price: Joi.number().required(),
};

const menuAuth = {
  authAddMenu(req, res, next) {
    const validate = Joi.validate(req.body, schema);
    if (validate.error) authError(res, 400, validate.error.details[0].message);
    else if (matchMeal(req.body)) authError(res, 409, 'menu already exist');
    else next();
  },
};

export default menuAuth;
