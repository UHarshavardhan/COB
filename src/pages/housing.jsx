import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader.jsx';
import ScholarshipForm from '../components/ScholarshipForm.jsx';
import Courses from "../components/Courses.jsx";
import Hotels from '../components/hotels.jsx';
import Collegetab from '../components/Colleges.jsx';

function Housing() {
  return (
    <div className="App mb-20">
      <ScholarshipHeader 
        breadcrumb="Home &gt; Top Colleges" 
        title="Top Colleges" 
        subtitle="Engineering minds for a sustainable tomorrow "
      />
      <div className='lg:mt-[-80px] lg:mx-[3%]'>
      <Hotels/>



      </div>
    </div>
  );
}

export default Housing;
