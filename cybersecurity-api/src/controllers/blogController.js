import BlogPost from '../models/blogModel.js';

// Obtener todos los posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find().sort({ createdAt: -1 }); // Ordenar por fecha más reciente
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
import BlogPost from '../models/blogModel.js';

