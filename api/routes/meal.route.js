import { Router } from 'express';
import mealController from '../controllers/meal.controller'

const { fetchAllMeal } = mealController;
const router = Router();

router.get('/meals', fetchAllMeal);

export default router;
