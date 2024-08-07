import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const BlogDetailScreen = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        console.error('Error fetching blog:', error);
      } else {
        setBlog(data);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="max-w-[80%] p-8 rounded-lg bg-[#fdf3ee] shadow-md">
        <img
          src={blog.image}
          alt={`Blog Image`}
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
