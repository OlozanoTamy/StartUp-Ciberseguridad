import express from 'express';
import { getAllPosts } from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getAllPosts);

export default router;
