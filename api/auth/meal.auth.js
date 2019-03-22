import Joi from 'joi';
import database from '../database/database';

const { meals } = database;

const authError = (res, statusCode, reply) => res.status(statusCode).json({
  status: 'fail',
  data: reply,
});

const matchMeal = (req) => {
  const matchMealArray = meals.filter(meal => meal.name === req.params.name);
  return matchMealArray.find(meal => meal.size === req.params.size);
};

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

const error = (req) => {
  const matchMealNameArray = meals.filter(meal => meal.name === req.body.name);
  return matchMealNameArray.find(match => match.size === req.body.size);
};

const mealAuth = {
  authAddMeal(req, res, next) {
    const validate = Joi.validate(req.body, schema);
    if (validate.error) authError(res, 400, validate.error.details[0].message);
    else if (error(req)) authError(res, 409, 'meal already exist');
    else next();
  },
  authUpdateAMeal(req, res, next) {
    const anError = error(req);
    const matchAMeal = matchMeal(req);
    const validate = Joi.validate(req.body, schemaUpdate);
    if (!matchAMeal) authError(res, 404, 'meal does not exist');
    else if (validate.error) authError(res, 400, validate.error.details[0].message);
    else if (anError) authError(res, 409, 'meal already exist');
    else next();
  },
};

export default mealAuth;
