

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'
import AOS from 'aos';
import 'aos/dist/aos.css';
import curve from '../images/curve.png'
import { getAllnewsPosts } from './../firebase/news'; // Adjust the path to your blogService

const colours = ['white'];

const PAGE_SIZE = 3; // Number of images per page

const LatestNews = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigator = useNavigate();

  // Fetch blog data from Supabase
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllnewsPosts(); // Fetch all blogs
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const totalPages = Math.ceil(blogs.length / PAGE_SIZE);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBlogClick = (id) => {
    navigator(`/news/${id}`);
  };

  const startIndex = currentPage * PAGE_SIZE;
  const selectedBlogs = blogs.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div id="blogs" className="flex bg-gradient-to-b from-purple-100 to-purple-200  flex-col  justify-center  max-w-fit  ">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-left text-[#2E3192] mt-10 font-pop">Latest News</h1>
      <p className="mb-8 text-left lg:text-xl text-[#6E7C91] font-pop">Catch the Latest Career & Education-Related Headlines! <br/>
      We deliver up-to-the-minute happenings in the job market and exciting career opportunities</p>
      
      {/* Mobile View */}
      <div className="w-full md:hidden overflow-x-auto">
        <div className="flex space-x-4 mx-4 snap-x snap-mandatory">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 scroll-container bg-white rounded-lg shadow-md snap-center"
              onClick={() => handleBlogClick(blog.id)}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered effect for mobile view
            >
              <img src={blog.image} alt={`Blog Image ${index + 1}`} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg  font-semibold mb-1">{blog.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{blog.writer}</p>
                  {/* <button className="text-blue-600 text-lg font-bold">+</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block h-[500px] px-8">
        <div className="flex flex-wrap justify-center mx-[3%] gap-8">
          {selectedBlogs.map((blog, index) => (
            <div
              key={index}
              style={{ backgroundColor: colours[index % colours.length] }}
              className="rounded-lg shadow-md h-[460px] w-full md:w-[30%]"
              onClick={() => handleBlogClick(blog.id)}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered effect for desktop view
            >
              <img src={blog.image} alt={`Blog Image ${index + 1}`} className="w-full h-42 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg text-black font-semibold mb-1">{blog.writer}</h3>
                <p className="text-2xl  font-bold mb-4">{blog.name}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">.</p>
                  {/* <button className="text-white text-lg font-bold">+</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-8 justify-center">
          {/* <button
            onClick={handlePreviousPage}
            className={`p-2 rounded-full ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            disabled={currentPage === 0}
          >
            &lt;
          </button>
          <span className="text-xl">{currentPage + 1} / {totalPages}</span>
          <button
            onClick={handleNextPage}
            className={`p-2 rounded-full ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200'}`}
            disabled={currentPage === totalPages - 1}
          >
            &gt;
          </button> */}
          
        </div>
        
      </div>
      <div clas>
          <img src={curve} className='w-[1906px] h-[100px] max-w-full'/>
        </div>
    </div>
    
  );
};
export default LatestNews;


