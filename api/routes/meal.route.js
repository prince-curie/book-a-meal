import { Router } from 'express';
import mealController from '../controllers/meal.controller';
import mealAuth from '../auth/meal.auth';

const { fetchAllMeal, addMeal, updateMeal } = mealController;
const { authAddMeal, authUpdateAMeal } = mealAuth;
const router = Router();

router.get('/meals', fetchAllMeal);

router.post('/meals', authAddMeal, addMeal);

router.put('/meals/:name/:size', authUpdateAMeal, updateMeal);

export default router;
