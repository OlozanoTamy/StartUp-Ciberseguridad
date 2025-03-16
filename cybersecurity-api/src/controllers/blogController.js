import pool from "../config/database.js";

// Obtener todos los blogs - READ
export const getAllBlogs = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM blogs');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los blogs:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener un blog por su ID
export const getBlogById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM blogs WHERE id_blog = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener el blog:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }

};

// Crear un nuevo blog - CREATE
export const createBlog = async (req, res) => {
    const { titulo, contenido, id_usuario } = req.body;
    console.log(titulo, contenido, id_usuario);
    try {
        const result = await pool.query(
            'INSERT INTO blogs (titulo, contenido, id_usuario) VALUES ($1, $2, $3) RETURNING *',
            [titulo, contenido, id_usuario]
        );
        res.status(201).json({ message: 'Blog creado exitosamente', data: result.rows[0] });
    } catch (error) {
        console.error('Error al crear el blog:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar un blog - UPDATE
export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { titulo, contenido } = req.body;
    try {
        const result = await pool.query(
            'UPDATE blogs SET titulo = $1, contenido = $2 WHERE id_blog = $3 RETURNING *',
            [titulo, contenido, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.status(200).json({ message: 'Blog actualizado exitosamente', data: result.rows[0] });
    } catch (error) {
        console.error('Error al actualizar el blog:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Eliminar un blog - DELETE
export const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM blogs WHERE id_blog = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.status(200).json({ message: 'Blog eliminado exitosamente', data: result.rows[0] });
    } catch (error) {
        console.error('Error al eliminar el blog:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener todos los comentarios de un blog
export const getCommentsByBlogId = async (req, res) => {
    const { id_blog } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM comentarios WHERE id_blog = $1 ORDER BY fecha_comentario DESC',
            [id_blog]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Crear un nuevo comentario
export const createComment = async (req, res) => {
    const { id_blog, id_usuario, contenido } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO comentarios (id_blog, id_usuario, contenido) VALUES ($1, $2, $3) RETURNING *',
            [id_blog, id_usuario, contenido]
        );
        res.status(201).json({ message: 'Comentario creado exitosamente', data: result.rows[0] });
    } catch (error) {
        console.error('Error al crear el comentario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};