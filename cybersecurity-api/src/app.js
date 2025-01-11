import express from 'express';
import cors from 'cors';
import serviceRoutes from './routes/serviceRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/services', serviceRoutes);

export default app;
