import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setError(null);
      })
      .catch((err) => {
        console.error('Error cargando el post:', err);
        setError('No se pudo cargar el post. Por favor, inténtalo más tarde.');
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>Cargando...</p>;

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h1 style={{ color: '#333' }}>{post.title}</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{post.content}</p>
    </div>
  );
}

export default BlogPost;