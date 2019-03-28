import database from '../database/database';
import MealModel from '../models/meals.model';
import MenuModel from '../models/menu.model';

const { meals } = database;

const functions = {
  matchMeal(which) {
    const matchMealArray = meals.filter(meal => meal.name === which.name);
    return matchMealArray.find(meal => meal.size === which.size);
  },
  controllerReturns(res, statusNo, dataFn) {
    return res.json({
      status: statusNo,
      data: dataFn,
    }).status(statusNo);
  },
  newMealFn(resetId, meal) {
    const newMeal = new MealModel();
    newMeal.id = resetId || meal.id;
    newMeal.name = meal.name;
    newMeal.price = meal.price;
    newMeal.size = meal.size;
    newMeal.status = meal.status;
    return newMeal;
  },
  newMenuFn(resetId, meal) {
    const newMeal = new MenuModel();
    newMeal.id = resetId || meal.id;
    newMeal.name = meal.name;
    newMeal.price = meal.price;
    newMeal.size = meal.size;
    return newMeal;
  },
  fetchAllMealDB(newOne) {
    const resetId = null;
    const allMeals = meals.map(meal => newOne(resetId, meal));
    return allMeals;
  },
  addMeal(req, Model) {
    const oldId = meals.length;
    const newId = oldId + 1;
    const newMeal = new Model();
    newMeal.id = newId;
    newMeal.name = req.body.name;
    newMeal.size = req.body.size;
    newMeal.price = req.body.price;
    newMeal.status = req.body.status;
    meals.push(newMeal);
    return newMeal;
  },
};

export default functions;
