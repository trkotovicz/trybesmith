import { Router } from 'express';
import userController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/users', userController.getAll);
userRouter.post('/users', userController.create);

export default userRouter;