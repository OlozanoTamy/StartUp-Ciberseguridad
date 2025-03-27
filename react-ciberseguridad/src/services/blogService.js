const API_URL = "http://localhost:5000/api/blogs";

export const fetchBlogs = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const createBlog = async (blog) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
    });
    return response.json();
};

export const updateBlog = async (id, blog) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
    });
    return response.json();
};

export const deleteBlog = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};