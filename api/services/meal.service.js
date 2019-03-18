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
};

export default mealService;
