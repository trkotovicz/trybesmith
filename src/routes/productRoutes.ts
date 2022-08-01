import { Router } from 'express';
import productController from '../controllers/productController';

const productRouter = Router();

productRouter.get('/products', productController.getAll);

export default productRouter;