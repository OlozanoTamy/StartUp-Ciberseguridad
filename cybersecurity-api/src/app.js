import express from 'express';
import cors from 'cors';
import blogRouter from './routes/blogRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', blogRouter);
app.use('/api', userRouter);

export default app;