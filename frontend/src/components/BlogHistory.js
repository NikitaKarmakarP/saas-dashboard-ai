import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const BlogHistory = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await api.get('/blogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Blog History</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="mb-6 border p-4 rounded bg-white">
          <h3 className="font-bold text-lg">{blog.title}</h3>
          <p className="mt-2 whitespace-pre-wrap">{blog.content}</p>
          <p className="text-sm text-gray-500 mt-1">{new Date(blog.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogHistory;
