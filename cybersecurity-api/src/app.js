import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors()); // Permitir solicitudes desde diferentes dominios
app.use(express.json()); // Parsear JSON en las solicitudes

// Rutas 
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Cybersecurity');
});

export default app;
