import database from '../database/database';
import MealModel from '../models/meals.model';

const { meals } = database;

const matchMeal = (req) => {
  const matchMealArray = meals.filter(meal => meal.name === req.params.name);
  return matchMealArray.find(meal => meal.size === req.params.size);
};

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
    matchMeal(req);
    const updateAMeal = new MealModel();
    updateAMeal.id = matchMeal.id;
    updateAMeal.name = req.body.name || matchMeal.name;
    updateAMeal.size = req.body.size || matchMeal.size;
    updateAMeal.price = req.body.price || matchMeal.price;
    updateAMeal.status = req.body.status || matchMeal.status;
    meals.splice(meals[matchMeal.id - 1], 1, updateAMeal);
    return updateAMeal;
  },
  deleteMealDB(req) {
    matchMeal(req);
    meals.splice(meals[matchMeal.id - 1], 1);
    let resetId = 1;
    meals.forEach((meal) => {
      meal.id = resetId;
      resetId += 1;
    });
    return 'delete successfull';
  },
};

export default mealService;
