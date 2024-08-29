import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPostById } from './../firebase/blog'; // Adjust the path as needed

const BlogDetailScreen = () => {
  const { id } = useParams(); // Get blog ID from URL params
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogPostById(id); // Fetch the blog post by ID
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to fetch blog details');
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="max-w-[80%] p-8 rounded-lg bg-[#fdf3ee] shadow-md">
        <img
          src={blog.image}
          alt={blog.name}
          className="w-full h-34 lg:h-[720px] object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl text-center font-bold mb-4">{blog.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{blog.writer}</p>
        <p className="text-lg text-gray-800 whitespace-pre-line">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetailScreen;
