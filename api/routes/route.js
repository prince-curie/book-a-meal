import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../validators/loginValidator'
import validateSignup from '../validators/signUpValidator';

const router = new Router()
const Controller = new UserController()

router.post('/auth/login', validateLogin, Controller.login)
router.post('/auth/signup', validateSignup, Controller.signUp)

export default router
