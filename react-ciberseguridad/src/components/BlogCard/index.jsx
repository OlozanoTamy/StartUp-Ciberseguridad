const BlogCard = ({ blog, onDelete, onEdit }) => {

    console.log(blog.id_blog);

    return (
        <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold text-blue-400 ">{blog.titulo}</h2>
            <p className="text-gray-300 mt-2">{blog.contenido}</p>
            <p className="text-sm text-gray-500 mt-2">Por: Usuario <span className="font-semibold text-gray-400">{blog.id_usuario}</span></p>
            <div className="flex gap-2 mt-2">
                <button onClick={() => onEdit(blog)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Editar</button>
                <button onClick={() => onDelete(blog.id_blog)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">Eliminar</button>
            </div>
        </div>
    );
};

export default BlogCard;
