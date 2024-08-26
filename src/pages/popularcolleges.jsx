import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader.jsx';
import ScholarshipForm from '../components/ScholarshipForm.jsx';
import Courses from "../components/Courses.jsx";

function Popularcolleges() {
  return (
    <div className="App mb-20">
      <ScholarshipHeader 
        breadcrumb="Home &gt; popularcareers" 
        title="Popular Careers" 
        subtitle="Explore innovative careers that shape smarter, more efficient electronics for a brighter future"
      />
      <div className='lg:mt-[-80px]'>
       <Courses/>

      </div>
    </div>
  );
}

export default Popularcolleges;
