import { sql, poolPromise } from "../config/database.js";

// Obtener todos los posts
export const getAllPosts = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM posts ORDER BY created_at DESC');
        res.status(200).json(result.recordset); // Devolvemos las filas obtenidas
    } catch (error) {
        console.error('Error al obtener los posts:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

