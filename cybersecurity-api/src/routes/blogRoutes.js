import express from 'express';
import { getAllPosts } from '../controllers/blogController.js';

const router = express.Router();

// Ruta para obtener todos los posts
router.get('/', getAllPosts);

export default router;