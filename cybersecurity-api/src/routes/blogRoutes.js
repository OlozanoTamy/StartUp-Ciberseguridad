import express from 'express';
import { getAllBlogs } from '../controllers/blogController.js';

const router = express.Router();

// Ruta para obtener todos los posts
router.get('/blogs', getAllBlogs);

export default router;