import express from 'express';
import { getAllUsers, createUser, getAllRoles, createRole, deleteUser, updateUser, userExists } from '../controllers/userController.js';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/usuarios', getAllUsers);

// Ruta para crear un nuevo usuario
router.post('/usuarios', createUser);

// Ruta para obtener todos los roles
router.get('/roles', getAllRoles);

//Ruta para obtener un usuario con email y contraseña
router.post('/usuarios/login', userExists);

//Ruta para actualizar un usuario
router.put('/usuarios/:id', updateUser);

// Ruta para crear un nuevo rol
router.post('/roles', createRole);


//Ruta para eliminar un usuario
router.delete('/usuarios/:id', deleteUser);

export default router;