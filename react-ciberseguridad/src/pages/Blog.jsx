import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/api/blog')
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error('Error cargando los posts:', error));
    }, []);
  
    return (
      <div className="container">
        <h1>Blog de Ciberseguridad</h1>
        <div className="blog-list">
          {posts.map((post) => (
            <div key={post.id} className="blog-item">
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 100)}...</p>
              <Link to={`/blog/${post.id}`}>Leer más</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Blog;