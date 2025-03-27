import { useState } from "react";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "", role: "user" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isRegister && form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    try {
      const endpoint = isRegister ? "http://localhost:4000/api/usuarios" : "http://localhost:4000/api/usuarios/login";
      const requestData = isRegister
        ? { email: form.email, password: form.password, role: form.role }
        : { email: form.email, password: form.password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) throw new Error(data.message || "Error en la autenticación");

      alert(isRegister ? "Usuario registrado con éxito" : "Inicio de sesión exitoso");
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
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
          type="email" name="email" placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          onChange={handleChange} required
        />
        <input
          type="password" name="password" placeholder="Contraseña"
          className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
          onChange={handleChange} required
        />
        {isRegister && (
          <>
            <input
              type="password" name="confirmPassword" placeholder="Confirmar Contraseña"
              className="w-full p-3 mb-4 bg-gray-700 rounded-lg"
              onChange={handleChange} required
            />
            <select name="role" className="w-full p-3 mb-4 bg-gray-700 rounded-lg" onChange={handleChange} required>
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
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
