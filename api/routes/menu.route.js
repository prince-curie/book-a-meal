import { Router } from 'express';
import menuController from '../controllers/menu.controller';
import menuAuth from '../auth/menu.auth';

const { addMenu, fetchAllMenu } = menuController;
const { authAddMenu } = menuAuth;
const router = Router();

router.post('/menu', authAddMenu, addMenu);

router.get('/menu', fetchAllMenu);

export default router;
