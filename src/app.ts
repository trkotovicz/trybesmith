import express from 'express';
import orderRouter from './routes/orderRoutes';
import productRouter from './routes/productRoutes';
import userRouter from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);

export default app;
