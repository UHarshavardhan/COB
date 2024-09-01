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
        title="Find Student Accommodation,That Best Suits You" 
        subtitle="On a Budget or something with a view? We've got you! "
      />
      <div className='lg:mx-[3%] lg:mt-9'>
      <Hotels/>



      </div>
    </div>
  );
}

export default Housing;
