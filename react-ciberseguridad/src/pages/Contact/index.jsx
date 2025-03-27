import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Contáctanos</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
        <input 
          type="text" name="name" placeholder="Nombre" 
          className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          onChange={handleChange}
        />
        <input 
          type="email" name="email" placeholder="Email" 
          className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          onChange={handleChange}
        />
        <textarea 
          name="message" placeholder="Mensaje" 
          className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-blue-500 p-3 rounded-lg hover:bg-blue-700">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
