/*Se usa el estado para modificar el estado de una variable */
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  /*se crea un estado con useState que se inicializa con un arreglo vacío */
  const [posts, setPosts] = useState([]);
  /*se usa useEffect para hacer una petición a la API y obtener los posts */
  useEffect(() => {
    fetch('http://localhost:5000/api/blog')
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((error) => console.error('Error cargando los posts:', error));
    }, []);
  /*se retorna un div con un h1 y un div con un map que recorre los posts y retorna un div con un h2, un p y un Link */
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