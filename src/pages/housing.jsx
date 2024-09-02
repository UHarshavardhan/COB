import React, { useState } from 'react';
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
         <div className=" flex flex-col bg-gradient-to-r h-[40vh] lg:h-[60vh] from-[#a1a2f8] to-[#bf90e7] p-4 lg:p-8">
      <Navigation />
         <div className="flex text-xs lg:text-sm text-slate-300 mt-8 justify-start">
       
      </div>
      <h1 className="flex text-4xl  lg:text-[48px] font-bold text-black mt-2 lg:mt-10 justify-center">
      Find Student Accommodation,That Best Suits You
      </h1>
      <div className='flex justify-center'>
      <p className="flex lg:text-[20px] text-gray-200 lg:mt-2  justify-center">
      On a Budget or something with a view? We've got you!
      </p>
      </div>
      <div class="flex items-center justify-center ">
    <span class="pl-3 text-gray-500 relative left-5 top-4 size-[23px]">
       <GoSearch/>
    </span>
    <input 
        type="text" 
        placeholder="            Search..." 
        class="w-[900px] h-[50px] pl-2 pr-4 py-2 focus:outline-none rounded-md mt-7 text-center"
    />
</div>
    </div>
      <div className='lg:mx-[3%] lg:mt-9'>
      <Hotels/>



      </div>
    </div>
  );
}

export default Housing;
