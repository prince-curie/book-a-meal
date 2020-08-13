import { Router } from 'express';
import UserController from '../api/controllers/user.controller';
import validateLogin from '../api/validators/loginValidator'
import validateSignup from '../api/validators/signUpValidator';

const router = new Router()
const Controller = new UserController()

router.post('/auth/login', validateLogin, Controller.login)
router.post('/auth/signup', validateSignup, Controller.signUp)

export default router
