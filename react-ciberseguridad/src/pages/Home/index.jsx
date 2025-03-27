import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Protege tu negocio con expertos en ciberseguridad
      </motion.h1>
      <p className="mt-4 text-lg opacity-80">
        Soluciones avanzadas para garantizar la seguridad de tu información.
      </p>
      <Link to="/services">
        <motion.button 
          className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
        >
          Ver Servicios
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
