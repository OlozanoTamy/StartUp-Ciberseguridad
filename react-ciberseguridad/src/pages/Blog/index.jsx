import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos (luego se conectará con el backend)
    setTimeout(() => {
      setPosts([
        { id: 1, title: "Protegiendo tu negocio", summary: "Consejos para mejorar la seguridad digital." },
        { id: 2, title: "Ciberataques comunes", summary: "Tipos de amenazas y cómo evitarlas." },
      ]);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Blog de Ciberseguridad</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <motion.div 
            key={post.id} 
            className="p-6 bg-gray-800 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="mt-2 opacity-80">{post.summary}</p>
            <button className="mt-4 text-blue-500 hover:underline">Leer más</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
