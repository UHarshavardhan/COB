import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getnewsPostById } from '../firebase/news'; // Adjust the path as needed

const NewsDetailScreen = () => {
  const { id } = useParams(); // Get news ID from URL params
  const [news, setnews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchnews = async () => {
      try {
        const data = await getnewsPostById(id); // Fetch the news post by ID
        setnews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news details');
      }
    };

    fetchnews();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="max-w-[80%] p-8 rounded-lg bg-[#fdf3ee] shadow-md">
        <img
          src={news.image}
          alt={news.name}
          className="w-full h-34 lg:h-[720px] object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl text-center font-bold mb-4">{news.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{news.writer}</p>
        <p className="text-lg text-gray-800 whitespace-pre-line">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsDetailScreen;
