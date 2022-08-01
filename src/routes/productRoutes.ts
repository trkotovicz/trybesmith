import { Router } from 'express';
import productController from '../controllers/productController';

const productRouter = Router();

productRouter.get('/products', productController.getAll);
productRouter.post('/products', productController.create);

export default productRouter;