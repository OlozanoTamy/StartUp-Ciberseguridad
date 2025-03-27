import { useState, useEffect } from "react";

const BlogForm = ({ onSave, selectedBlog }) => {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [id_usuario, setId] = useState("");

    useEffect(() => {
        if (selectedBlog) {
            setTitulo(selectedBlog.titulo);
            setContenido(selectedBlog.contenido);
            setId(selectedBlog.id_usuario);
        }
    }, [selectedBlog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ titulo, contenido, id_usuario }, selectedBlog?._id);
        setTitulo("");
        setContenido("");
        setId("");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">{selectedBlog ? "Editar Blog" : "Nuevo Blog"}</h2>
            <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}
                className="w-full p-3 border border-gray-600 rounded-lg mb-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <textarea placeholder="Contenido" value={contenido} onChange={(e) => setContenido(e.target.value)}
                className="w-full p-3 border border-gray-600 rounded-lg mb-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <input type="text" placeholder="Autor" value={id_usuario} onChange={(e) => setId(e.target.value)}
                className="w-full p-3 border border-gray-600 rounded-lg mb-3 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <button type="submit" className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg">
                {selectedBlog ? "Actualizar" : "Guardar"}
            </button>
        </form>
    );
};

export default BlogForm;
