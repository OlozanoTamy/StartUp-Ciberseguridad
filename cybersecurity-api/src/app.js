import express from 'express';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';
const app = express();

// Middlewares
app.use(cors()); // Permitir solicitudes desde diferentes dominios
app.use(express.json()); // Parsear JSON en las solicitudes

// Rutas 
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Cybersecurity');
});

app.use('/api/blog', blogRoutes);

export default app;
