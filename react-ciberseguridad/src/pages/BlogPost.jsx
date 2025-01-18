import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error cargando el post:', error));
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
