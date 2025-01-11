function Contact() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input type="text" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Correo</label>
            <input type="email" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Mensaje</label>
            <textarea className="w-full border rounded p-2" rows="4"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Enviar
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  