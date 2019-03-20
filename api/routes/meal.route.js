import { Router } from 'express';
import mealController from '../controllers/meal.controller';
import mealAuth from '../auth/meal.auth';

const { fetchAllMeal, addMeal } = mealController;
const { authAddMeal } = mealAuth;
const router = Router();

router.get('/meals', fetchAllMeal);

router.post('/meals', authAddMeal, addMeal);

export default router;
