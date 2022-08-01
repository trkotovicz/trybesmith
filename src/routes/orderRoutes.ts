import { Router } from 'express';
import orderController from '../controllers/orderControler';

const orderRouter = Router();

orderRouter.get('/orders', orderController.getAll);

export default orderRouter;