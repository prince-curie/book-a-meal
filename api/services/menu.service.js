import database from '../database/database';
import MealModel from '../models/meals.model';

const { meals } = database;

const newMenuFn = (resetId, meal) => {
  const newMeal = new MealModel();
  newMeal.id = resetId || meal.id;
  newMeal.name = meal.name;
  newMeal.price = meal.price;
  newMeal.size = meal.size;
  return newMeal;
};

const menuService = {
  fetchAllMenuDB() {
    const resetId = null;
    const allMeals = meals.map(meal => newMenuFn(resetId, meal));
    return allMeals;
  },
  addMenuDB(req) {
    const oldId = meals.length;
    const newId = oldId + 1;
    const newMeal = new MealModel();
    newMeal.id = newId;
    newMeal.name = req.body.name;
    newMeal.size = req.body.size;
    newMeal.price = req.body.price;
    newMeal.status = req.body.status;
    meals.push(newMeal);
    return newMeal;
  },
};

export default menuService;
