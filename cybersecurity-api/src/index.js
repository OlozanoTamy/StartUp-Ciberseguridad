//Inicializa el servidor
import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './config/database.js';

// Conectar a la base de datos
connectDB();


//Configurar dotenv
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
