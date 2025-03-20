import React, { useState } from 'react';
import api from '../utils/api';

const BlogGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await api.post('/blogs/generate', { prompt });
    setBlog(res.data);
    setLoading(false);
  };

  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Generate New Blog</h2>
      <textarea
        className="w-full h-24 border p-2 mb-4"
        placeholder="Enter blog topic..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {blog && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">{blog.title}</h3>
          <p className="mt-2 whitespace-pre-wrap">{blog.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogGenerator;
