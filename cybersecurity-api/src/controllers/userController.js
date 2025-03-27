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
    console.log(req.body);
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


// Eliminar un usuario  - DELETE
export const deleteUser = async (req, res) => {
    const { id } = req.params;  // Obtenemos el ID del usuario a eliminar
    if (!id) return res.status(400).json({ message: 'El ID del usuario es requerido' });    // Validamos que el ID no sea nulo
    try {   // Intentamos eliminar el usuario
        const result = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1 RETURNING *', [id]);
        if (result.rows.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });    // Si no se encontró el usuario, devolvemos un 404          
        res.status(200).json({ message: 'Usuario eliminado exitosamente', data: result.rows[0] });    // Si se eliminó el usuario, devolvemos un 200
    } catch (error) {   // Si hubo un error al eliminar el usuario, devolvemos un 500
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

// Saber si un usuario existe para login y devolver usuario + mensaje
export const userExists = async (req, res) => {
    const { email, contraseña } = req.body;

    if (!email || !contraseña) {
        return res.status(400).json({ message: 'El email y la contraseña son requeridos' });
    }

    try {
        // Consulta para verificar si el usuario existe con el email y contraseña proporcionados
        const result = await pool.query(
            'SELECT id_usuario, nombre, email, rol_id FROM usuarios WHERE email = $1 AND contraseña = $2',
            [email, contraseña]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado o credenciales incorrectas' });
        }

        // Si el usuario existe, devolvemos los datos del usuario y un mensaje
        const user = result.rows[0];
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            user: {
                id: user.id_usuario,
                name: user.nombre,
                email: user.email,
                roleId: user.rol_id,
            },
        });
    } catch (error) {
        console.error('Error al verificar si el usuario existe:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Actualizar un usuario
export const updateUser = async (req, res) => {
    const { id } = req.params; // ID del usuario que se desea actualizar
    const { nombre, email, contraseña, rol_id } = req.body; // Datos a actualizar

    console.log(req.body);

    if (!id) {
        return res.status(400).json({ message: 'El ID del usuario es requerido' });
    }

    if (!nombre && !email && !contraseña && !rol_id) {
        return res.status(400).json({ message: 'Se requiere al menos un campo para actualizar' });
    }

    try {
        const result = await pool.query(
            'UPDATE usuarios SET nombre = $1, email = $2, contraseña = $3, rol_id = $4 WHERE id_usuario = $5 RETURNING *',
            [nombre, email, contraseña, rol_id, id] // Usamos el ID de req.params en la cláusula WHERE
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

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