import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="flex justify-between items-center p-5 bg-black text-white shadow-md"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold">CyberSecurity</h1>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-blue-500">Inicio</Link>
        <Link to="/services" className="hover:text-blue-500">Servicios</Link>
        <Link to="/blog" className="hover:text-blue-500">Blog</Link>
        <Link to="/contact" className="hover:text-blue-500">Contacto</Link>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
