const services = [
    { id: 1, name: 'Auditoría de Seguridad', description: 'Evaluación de vulnerabilidades.' },
    { id: 2, name: 'Análisis Forense', description: 'Investigación post-incidentes.' },
];

// Obtener todos los servicios
export const getAllServices = (req, res) => {
    res.status(200).json(services);
};

// Crear un nuevo servicio
export const createService = (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const newService = {
        id: services.length + 1,
        name,
        description,
    };

    services.push(newService);
    res.status(201).json(newService);
};
