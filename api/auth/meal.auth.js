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

const schemaUpdate = {
  name: Joi.string(),
  size: Joi.string(),
  price: Joi.number(),
  status: Joi.string(),
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
  authUpdateAMeal(req, res, next) {
    const matchMealArray = meals.filter(meal => meal.name === req.params.name);
    const matchMeal = matchMealArray.find(meal => meal.size === req.params.size);
    const validate = Joi.validate(req.body, schemaUpdate);
    if (!matchMeal || !matchMealArray) authError(res, 404, 'meal does not exist');
    else if (validate.error) authError(res, 400, validate.error.details[0].message);
    else next();
  },
};

export default mealAuth;
