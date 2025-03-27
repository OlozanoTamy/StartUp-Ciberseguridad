import { useEffect, useState } from "react";

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [usuarioEdit, setUsuarioEdit] = useState({ id: "", email: "", rol_id: 4  });

  // Obtener todos los usuarios
  useEffect(() => {
    fetch("http://localhost:5000/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch(() => setError("Error al cargar usuarios"));
  }, []);


// Eliminar usuario
const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;

    try {
        const response = await fetch(`http://localhost:5000/api/usuarios/${id}`, { method: "DELETE" });

        if (!response.ok) throw new Error("Error al eliminar usuario");

        alert("Usuario eliminado con éxito");

        // Obtener la lista actualizada de usuarios desde el servidor
        const updatedUsuarios = await fetch("http://localhost:5000/api/usuarios").then((res) => res.json());
        setUsuarios(updatedUsuarios); // Actualizar el estado con los datos del servidor
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        setError("Error al eliminar usuario");
    }
};

  // Abrir modal con datos del usuario
  const handleEdit = (usuario) => {
    setUsuarioEdit(usuario);
    setModalOpen(true);
  };



  // Guardar cambios (Actualizar usuario)
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/usuarios/${usuarioEdit.id_usuario}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: usuarioEdit.nombre , email: usuarioEdit.email, id_usuario: parseInt(usuarioEdit.id_usuario), rol_id: parseInt(usuarioEdit.rol_id), contraseña: usuarioEdit.contraseña }),
      });

      if (!response.ok) throw new Error("Error al actualizar usuario");

      alert("Usuario actualizado con éxito");
      // Obtener la lista actualizada de usuarios desde el servidor
      const updatedUsuarios = await fetch("http://localhost:5000/api/usuarios").then((res) => res.json());
      setUsuarios(updatedUsuarios); // Actualizar el estado con los datos del servidor
      setModalOpen(false);
    } catch {
      setError("Error al actualizar usuario");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Administración de Usuarios</h1>
      {error && <p className="text-red-500">{error}</p>}

      <table className="table-auto w-full max-w-4xl bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-3">Nombre</th>
            <th className="p-3">ID</th>
            <th className="p-3">Email</th>
            <th className="p-3">Rol</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} className="border-b border-gray-600">
              <td className="p-3">{usuario.nombre}</td>
              <td className="p-3">{usuario.id_usuario}</td>
              <td className="p-3">{usuario.email}</td>
              <td className="p-3">{usuario.rol_id}</td>
              <td className="p-3 flex space-x-2">
                <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-700" onClick={() => handleEdit(usuario)}>
                  Editar
                </button>
                <button className="bg-red-500 p-2 rounded-lg hover:bg-red-700" onClick={() => handleDelete(parseInt(usuario.id_usuario))}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Edición */}
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-bold mb-4">Editar Usuario</h2>
            <input
              type="text"
              className="w-full p-2 mb-3 bg-gray-700 rounded-lg"
              placeholder="Nombre"
              value={usuarioEdit.nombre}
              onChange={(e) => setUsuarioEdit({ ...usuarioEdit, nombre: e.target.value })}
            />
            <input
              type="email"
              className="w-full p-2 mb-3 bg-gray-700 rounded-lg"
              value={usuarioEdit.email}
              onChange={(e) => setUsuarioEdit({ ...usuarioEdit, email: e.target.value })}
            />
            {/* <input
              type="text"
              className="w-full p-2 mb-3 bg-gray-700 rounded-lg"
              placeholder="Rol ID"
              value={usuarioEdit.rol_id}
              onChange={(e) => setUsuarioEdit({ ...usuarioEdit })}
            /> */}
            <div className="flex justify-between">
              <button className="bg-green-500 p-2 rounded-lg hover:bg-green-700" onClick={handleUpdate}>
                Guardar
              </button>
              <button className="bg-gray-500 p-2 rounded-lg hover:bg-gray-700" onClick={() => setModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsuarios;
