import express from 'express';
import cors from 'cors';
import blogRouter from './routes/blogRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/blog', blogRouter);

export default app;