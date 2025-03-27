import { useState } from "react";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "", role: 4 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log(form);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    if (isRegister && form.contraseña !== form.confirmaContraseña) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }
  
    try {
      const endpoint = "http://localhost:5000/api/usuarios";
      const requestData = isRegister
        ? { email: form.email, contraseña: form.contraseña, rol_id: form.role, nombre: form.nombre }
        : { email: form.email, contraseña: form.contraseña };
  
      let response;
      if (isRegister) {
        response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });
      } else {
        response = await fetch("http://localhost:5000/api/usuarios/login", { // Ajusté para que use una ruta de login específica
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });
      }
  
      const data = await response.json();
      setLoading(false);
  
      if (!response.ok) throw new Error(data.message || "Error en la autenticación");
  
      alert(isRegister ? "Usuario registrado con éxito" : "Inicio de sesión exitoso");
      localStorage.setItem("token", data.token);
      window.location.href = "/admin";
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">{isRegister ? "Registrarse" : "Iniciar Sesión"}</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
      <input
          type="text" name="nombre" placeholder="Nombre"
          className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          onChange={handleChange} required
        />
        <input
          type="email" name="email" placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          onChange={handleChange} required
        />
        <input
          type="password" name="contraseña" placeholder="Contraseña"
          className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          onChange={handleChange} required
        />
        {isRegister && (
          <>
            <input
              type="password" name="confirmaContraseña" placeholder="Confirmar Contraseña"
              className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
              onChange={handleChange} required
            />
            <select name="role" className="w-full p-3 mb-4 bg-gray-700 rounded-lg" onChange={handleChange} required>
              <option value={5}>Usuario</option>
              <option value={4}>Administrador</option>
            </select>
          </>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          type="submit" className="w-full bg-blue-500 p-3 rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Procesando..." : isRegister ? "Registrarse" : "Entrar"}
        </button>
        <p className="text-center mt-4">
          {isRegister ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
          <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Inicia sesión" : "Regístrate"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
