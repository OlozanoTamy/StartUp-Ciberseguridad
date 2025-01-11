import Card from '../components/Card';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Bienvenido a CyberSecurity</h1>
      <p className="text-center text-gray-600 mb-8">
        Protegiendo tus datos y sistemas con soluciones de última generación.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Consultoría" description="Soluciones personalizadas en ciberseguridad." />
        <Card title="Software" description="Herramientas avanzadas para proteger tu negocio." />
        <Card title="Capacitaciones" description="Entrenamiento en seguridad informática." />
      </div>
    </div>
  );
}

export default Home;
