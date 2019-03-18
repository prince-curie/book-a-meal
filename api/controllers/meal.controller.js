import mealService from '../services/meal.service';

const { fetchAllMealDB } = mealService;

const mealController = {
  fetchAllMeal(req, res) {
    return res.json({
      status: 200,
      data: fetchAllMealDB(),
    }).status(200);
  },
};

export default mealController;
