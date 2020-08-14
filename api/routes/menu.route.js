import { Router } from 'express';
import menuController from '../api/controllers/menu.controller';
import menuAuth from '../api/auth/menu.auth';

const { addMenu, fetchAllMenu } = menuController;
const { authAddMenu } = menuAuth;
const router = Router();

router.post('/menu', authAddMenu, addMenu);

router.get('/menu', fetchAllMenu);

export default router;
