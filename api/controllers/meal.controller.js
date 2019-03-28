import mealService from '../services/meal.service';
import functions from '../functions/function';

const {
  fetchAllMeal, addMealDB, updateMealDB, deleteMealDB,
} = mealService;

const { controllerReturns } = functions;

const mealController = {
  fetchAllMeal(req, res) {
    return controllerReturns(res, 200, fetchAllMeal());
  },
  addMeal(req, res) {
    return controllerReturns(res, 201, [addMealDB(req)]);
  },
  updateMeal(req, res) {
    return controllerReturns(res, 201, [updateMealDB(req)]);
  },
  deleteMeal(req, res) {
    return controllerReturns(res, 200, [deleteMealDB(req)]);
  },
};

export default mealController;
