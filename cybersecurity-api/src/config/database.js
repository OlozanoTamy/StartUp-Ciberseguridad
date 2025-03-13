import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false }
});

pool.on('connect', () => {
    console.log('Conexión exitosa a la base de datos PostgreSQL');
});

pool.on('error', (err, client) => {
    console.error('Error en la conexión a la base de datos:', err);
});

export default pool;
