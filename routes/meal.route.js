import { Router } from 'express';
import mealController from '../api/controllers/meal.controller';
import mealAuth from '../api/auth/meal.auth';

const {
  fetchAllMeal, addMeal, updateMeal, deleteMeal,
} = mealController;
const { authAddMeal, authUpdateAMeal, authDeleteAMeal } = mealAuth;
const router = Router();

router.get('/meals', fetchAllMeal);

router.post('/meals', authAddMeal, addMeal);

router.put('/meals/:name/:size', authUpdateAMeal, updateMeal);

router.delete('/meals/:name/:size', authDeleteAMeal, deleteMeal);

export default router;
