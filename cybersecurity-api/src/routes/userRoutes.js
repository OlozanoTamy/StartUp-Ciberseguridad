import express from 'express';
import { getAllUsers, createUser, getAllRoles, createRole } from '../controllers/userController.js';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/usuarios', getAllUsers);

// Ruta para crear un nuevo usuario
router.post('/usuarios', createUser);

// Ruta para obtener todos los roles
router.get('/roles', getAllRoles);

// Ruta para crear un nuevo rol
router.post('/roles', createRole);

export default router;