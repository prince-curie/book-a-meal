import database from '../database/database';
import MealModel from '../models/meals.model';
import functions from '../functions/function';

const { meals } = database;
const { matchMeal } = functions;

const newMealFn = (resetId, meal) => {
  const newMeal = new MealModel();
  newMeal.id = resetId || meal.id;
  newMeal.name = meal.name;
  newMeal.price = meal.price;
  newMeal.size = meal.size;
  newMeal.status = meal.status;
  return newMeal;
};

const mealService = {
  fetchAllMealDB() {
    const resetId = null;
    const allMeals = meals.map(meal => newMealFn(resetId, meal));
    return allMeals;
  },
  addMealDB(req) {
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
  updateMealDB(req) {
    const matchAMeal = matchMeal(req.params);
    const updateAMeal = new MealModel();
    updateAMeal.id = matchAMeal.id;
    updateAMeal.name = req.body.name || matchAMeal.name;
    updateAMeal.size = req.body.size || matchAMeal.size;
    updateAMeal.price = req.body.price || matchAMeal.price;
    updateAMeal.status = req.body.status || matchAMeal.status;
    meals.splice(meals[matchAMeal.id - 1], 1, updateAMeal);
    return updateAMeal;
  },
  deleteMealDB(req) {
    const matchAMeal = matchMeal(req.params);
    meals.splice(meals[matchAMeal.id - 1], 1);
    let resetId = 1;
    meals.forEach((meal) => {
      meal.id = resetId;
      resetId += 1;
    });
    return 'delete successfull';
  },
};

export default mealService;
