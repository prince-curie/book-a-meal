import mealService from '../services/meal.service';

const {
  fetchAllMealDB, addMealDB, updateMealDB, deleteMealDB 
} = mealService;

const controllerReturns = (res, statusNo, dataFn) => res.json({
  status: statusNo,
  data: dataFn,
}).status(statusNo);

const mealController = {
  fetchAllMeal(req, res) {
    return controllerReturns(res, 200, fetchAllMealDB());
  },
  addMeal(req, res) {
    return controllerReturns(res, 201, [addMealDB(req)]);
  },
  updateMeal(req, res) {
    return controllerReturns(res, 201, [updateMealDB(req)]);
  },
};

export default mealController;
