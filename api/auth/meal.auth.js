import Joi from 'joi';
import database from '../database/database';

const { meals } = database;

const authError = (res, statusCode, reply) => res.status(statusCode).json({
  status: 'fail',
  data: reply,
});

const schema = {
  name: Joi.string().required(),
  size: Joi.string().required(),
  price: Joi.number().required(),
  status: Joi.string().required(),
};

const mealAuth = {
  authAddMeal(req, res, next) {
    const validate = Joi.validate(req.body, schema);
    const matchMeal = meals.filter(meal => meal.name === req.body.name);
    const error = matchMeal.find(match => match.size === req.body.size);
    if (validate.error) authError(res, 400, validate.error.details[0].message);
    else if (error) authError(res, 409, 'meal already exist');
    else next();
  },
};

export default mealAuth;
