import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader.jsx';
import ScholarshipForm from '../components/ScholarshipForm.jsx';
import Courses from "../components/Courses.jsx";
import Hotels from '../components/hotels.jsx';
import Collegetab from '../components/Colleges.jsx';
import Navigation from '../components/Navigation.jsx';
import { GoSearch } from "react-icons/go";
import { useParams, useNavigate } from 'react-router-dom';


function Topcolleges() {
  const { category } = useParams();
  return (
    <div className="App mb-20">
      <div className=" flex flex-col bg-gradient-to-r h-[40vh] lg:h-[60vh] from-[#a1a2f8] to-[#bf90e7] p-4 lg:p-8">
      <Navigation />
         <div className="flex text-xs lg:text-sm text-slate-300 mt-8 justify-start">
       
      </div>
      <h1 className="flex text-4xl  lg:text-[48px] font-bold text-black mt-2 lg:mt-10 justify-center">
      {category}
      </h1>
      <div className='flex justify-center'>
      <p className="flex lg:text-[20px] text-gray-200 lg:mt-2  justify-center">
      Colleges of {category}
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
      <div className='lg:mt-[-80px] lg:mx-[3%]'>
     <Collegetab/>


      </div>
    </div>
  );
}

export default Topcolleges;
