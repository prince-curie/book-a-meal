import database from '../database/database';
import MealModel from '../models/meals.model';
import functions from '../functions/function';

const { meals } = database;
const {
  matchMeal, newMealFn, fetchAllMealDB, addMeal,
} = functions;
const fetchAllMeal = () => fetchAllMealDB(newMealFn);

const mealService = {
  fetchAllMeal,
  addMealDB(req) {
    addMeal(req, MealModel);
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
