function Services() {
    const services = [
      { id: 1, name: 'Auditorías de Seguridad', description: 'Identificación de vulnerabilidades.' },
      { id: 2, name: 'Análisis Forense', description: 'Investigación post-incidentes.' },
      { id: 3, name: 'Protección de Datos', description: 'Cumplimiento de normativas legales.' },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Nuestros Servicios</h1>
        <ul className="space-y-4">
          {services.map(service => (
            <li key={service.id} className="p-4 border rounded shadow-md">
              <h2 className="font-bold text-lg">{service.name}</h2>
              <p className="text-gray-600">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Services;