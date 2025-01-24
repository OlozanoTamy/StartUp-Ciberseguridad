import app from './app.js';
import dotenv from 'dotenv';
import { poolPromise } from './config/database.js'; // Importa poolPromise

// Configurar dotenv
dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await poolPromise; // Inicializar la base de datos
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
};

startServer();