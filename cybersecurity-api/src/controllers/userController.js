import pool from "../config/database.js";

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios ORDER BY fecha_creacion DESC');
        res.status(200).json(result.rows); // Devolvemos las filas obtenidas
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    const { nombre, email, contraseña, rol_id } = req.body;
    if (!nombre || !email || !contraseña || !rol_id) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
    try {
        const result = await pool.query(
            'INSERT INTO usuarios (nombre, email, contraseña, rol_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, email, contraseña, rol_id]
        );
        res.status(201).json({ message: 'Usuario creado exitosamente', data: result.rows[0] });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar un usuario
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, contraseña, rol_id } = req.body;
    if (!id) return res.status(400).json({ message: 'El ID del usuario es requerido' });
    else if (!nombre && !email && !contraseña && !rol_id) return res.status(400).json({ message: 'Se requiere al menos un campo para actualizar' });

    try {
        const result = await pool.query(
            'UPDATE usuarios SET nombre = $1, email = $2, contraseña = $3, rol_id = $4 WHERE id_usuario = $5 RETURNING *',
            [nombre, email, contraseña, rol_id, id]
        );
        res.status(200).json({ message: 'Usuario actualizado exitosamente', data: result.rows[0] });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener todos los roles
export const getAllRoles = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM roles');
        res.status(200).json(result.rows); // Devolvemos las filas obtenidas
    } catch (error) {
        console.error('Error al obtener los roles:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Crear un nuevo rol
export const createRole = async (req, res) => {
    const { nombre_rol } = req.body;
    if (!nombre_rol) {
        return res.status(400).json({ message: 'El campo nombre_rol es requerido' });
    }
    try {
        const result = await pool.query(
            'INSERT INTO roles (nombre_rol) VALUES ($1) RETURNING *',
            [nombre_rol]
        );
        res.status(201).json({ message: 'Rol creado exitosamente', data: result.rows[0] });
    } catch (error) {
        console.error('Error al crear el rol:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};