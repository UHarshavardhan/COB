import React from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader.jsx';
import ScholarshipForm from '../components/ScholarshipForm.jsx';
import Courses from "../components/Courses.jsx";
import Hotels from '../components/hotels.jsx';
import Collegetab from '../components/Colleges.jsx';
import Navigation from '../components/Navigation.jsx';
import { GoSearch } from 'react-icons/go';

function Housing() {
  return (
    <div className="App mb-20">
      <div className="flex flex-col bg-gradient-to-r h-[40vh] lg:h-[60vh] from-[#a1a2f8] to-[#bf90e7] p-4 lg:p-8">
        <Navigation />
        <div className="flex text-xs lg:text-sm text-slate-300 mt-8 justify-start"></div>
        
        <h1 className="text-2xl lg:text-4xl font-bold text-black mt-2 lg:mt-10 text-center">
          Find Student Accommodation That Best Suits You
        </h1>
        
        <div className="flex justify-center">
          <p className="text-sm lg:text-lg text-gray-200 lg:mt-2 text-center">
            On a Budget or something with a view? We've got you!
          </p>
        </div>
        
        <div className="flex items-center justify-center w-full mt-6">
          <span className="pl-3 text-gray-500 relative left-10 lg:left-10 top-4 text-xl">
            <GoSearch />
          </span>
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full lg:w-[900px] h-10 lg:h-[50px] pl-2 pr-4 py-2 focus:outline-none rounded-md mt-7 text-center"
          />
        </div>
      </div>

      <div className="px-4 lg:mx-[3%] lg:mt-9 mt-6">
        <Hotels />
      </div>
    </div>
  );
}

export default Housing;
