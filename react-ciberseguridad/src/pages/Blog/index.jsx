import { useEffect, useState } from "react";
import { fetchBlogs, createBlog, updateBlog, deleteBlog } from "../../services/blogService";
import BlogCard from "../../components/BlogCard";
import BlogForm from "../../components/BlogForm";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);

    // Carga los blogs al cargar la pagina
    useEffect(() => {
        loadBlogs();
    }, []);

    // Carga los blogs y los ponemos en el estado
    const loadBlogs = async () => {
        const data = await fetchBlogs();
        setBlogs(data);
        console.log(data);
    };

    const handleSave = async (blog, id) => {
        if (id) {
            await updateBlog(id, blog);
        } else {
            await createBlog(blog);
        }
        setSelectedBlog(null);
        loadBlogs();
    };

    const handleDelete = async (id) => {
        await deleteBlog(id);
        loadBlogs();
    };

    const handleEdit = (blog) => {
        setSelectedBlog(blog);
    };

    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-6">
          <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
          <BlogForm onSave={handleSave} selectedBlog={selectedBlog} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {blogs.map((blog) => (
                  <BlogCard  key={blog._id} blog={blog} onDelete={handleDelete} onEdit={handleEdit}/>
              ))}
          </div>
      </div>
  );
};

export default Blog;
