import express from 'express';
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog, getCommentsByBlogId, createComment } from '../controllers/blogController.js';

const router = express.Router();

// Ruta para obtener todos los posts
router.get('/blogs', getAllBlogs);

router.get('/blogs/:id', getBlogById);

router.post('/blogs', createBlog);

router.put('/blogs/:id', updateBlog);

router.delete('/blogs/:id', deleteBlog);

router.get('/blogs/:id/comments', getCommentsByBlogId);

router.post('/blogs/:id/comments', createComment);

export default router;