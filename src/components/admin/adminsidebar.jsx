import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../../images/logo.png';

const Sidebar = ({ onSelect }) => {
  const [selected, setSelected] = useState('Courses');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('login') == null) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSelect = (section) => {
    setSelected(section);
    onSelect(section);
  };

  return (
    <div className="flex  flex-col w-64 h-screen bg-gradient-to-r  from-[#a1a2f8] to-[#bf90e7] shadow-md">
      <div className="flex items-center justify-center p-4">
        <img src= {logo} alt="Logo" className="w-16 h-16" />
      </div>
      <nav className="flex flex-col   space-y-4 mt-4">
        <button
          className={`flex items-center p-2 mx-4 rounded-md ${selected === 'Responses' ? 'text-white bg-[#00008B] ' : 'text-black hover:bg-gray-200'}`}
          onClick={() => handleSelect('Responses')}
        >
          <span className="flex-1">Responses</span>
        </button>
        <button
          className={`flex items-center p-2 mx-4 rounded-md ${selected === 'Scholarships' ? 'text-white bg-[#00008B] ' : 'text-black hover:bg-gray-200'}`}
          onClick={() => handleSelect('Scholarships')}
        >
          <span className="flex-1">Scholarships</span>
        </button>
        <button
          className={`flex items-center p-2 mx-4 rounded-md ${selected === 'ScholarshipEnquiry' ? 'text-white bg-[#00008B] ' : 'text-black hover:bg-gray-200'}`}
          onClick={() => handleSelect('ScholarshipEnquiry')}
        >
          <span className="flex-1">Scholarships Enquiry</span>
        </button>
        <button
          className={`flex items-center p-2 mx-4 rounded-md ${selected === 'AccommodationAdmin' ? 'text-white bg-[#00008B] ' : 'text-black hover:bg-gray-200'}`}
          onClick={() => handleSelect('AccommodationAdmin')}
        >
          <span className="flex-1">Accommodation</span>
        </button>
        <button
          className={`flex items-center p-2 mx-4 rounded-md ${selected === 'Colleges' ? 'text-white bg-[#00008B] ' : 'text-black hover:bg-gray-200'}`}
          onClick={() => handleSelect('Colleges')}
        >
          <span className="flex-1">Colleges</span>
        </button>
        {/* <button
          className={`flex items-center p-2 mx-4 rounded-md ${selected === 'Accommodations' ? 'text-white bg-[#00008B] ' : 'text-black hover:bg-gray-200'}`}
          onClick={() => handleSelect('Accommodations')}
        >
          <span className="flex-1">Accommodations</span>
        </button> */}
       
     
      
      </nav>
    </div>
  );
};

export default Sidebar;
