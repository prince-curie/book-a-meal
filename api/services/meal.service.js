import database from '../database/database';
import MealModel from '../models/meals.model';

const { meals } = database;

const mealService = {
  fetchAllMealDB() {
    const allMeals = meals.map((meal) => {
      const newMeal = new MealModel();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.price = meal.price;
      newMeal.size = meal.size;
      newMeal.status = meal.status;
      return newMeal;
    });
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
    const matchMealArray = meals.filter(meal => meal.name === req.params.name);
    const matchMeal = matchMealArray.find(meal => meal.size === req.params.size);
    const updateAMeal = new MealModel();
    updateAMeal.id = matchMeal.id;
    updateAMeal.name = req.body.name || matchMeal.name;
    updateAMeal.size = req.body.size || matchMeal.size;
    updateAMeal.price = req.body.price || matchMeal.price;
    updateAMeal.status = req.body.status || matchMeal.status;
    meals.splice(meals[matchMeal.id - 1], 1, updateAMeal);
    return updateAMeal;
  },
};

export default mealService;
