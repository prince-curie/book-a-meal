import mealService from '../services/meal.service';

const { fetchAllMealDB, addMealDB, updateMealDB } = mealService;

const mealController = {
  fetchAllMeal(req, res) {
    return res.json({
      status: 200,
      data: fetchAllMealDB(),
    }).status(200);
  },
  addMeal(req, res) {
    return res.json({
      status: 201,
      data: [addMealDB(req)],
    }).status(201);
  },
  updateMeal(req, res) {
    return res.json({
      status: 201,
      data: [updateMealDB(req)],
    }).status(201);
  },
};

export default mealController;
