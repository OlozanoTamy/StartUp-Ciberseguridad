import { motion } from "framer-motion";

const services = [
  { title: "Pentesting", description: "Pruebas de seguridad para detectar vulnerabilidades." },
  { title: "Análisis de malware", description: "Identificación y eliminación de amenazas." },
  { title: "Monitoreo 24/7", description: "Supervisión en tiempo real de ataques." },
];

const Services = () => {
  return (
    <div className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-800 rounded-lg shadow-md text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p className="mt-2 opacity-80">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
