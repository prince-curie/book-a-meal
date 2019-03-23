import database from '../database/database';

const { meals } = database;

const functions = {
  matchMeal(which) {
    const matchMealArray = meals.filter(meal => meal.name === which.name);
    return matchMealArray.find(meal => meal.size === which.size);
  },
};

export default functions;
