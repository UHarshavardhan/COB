import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader.jsx';
import ScholarshipForm from '../components/ScholarshipForm.jsx';
import Courses from "../components/Courses.jsx";
import Carrers from '../components/carrers.jsx';

function Popularcareers2() {
  return (
    <div className="App mb-20">
      <ScholarshipHeader 
        breadcrumb="Home &gt; popularcarrers" 
        title="Popular Carrers" 
        subtitle="Explore innovative careers that shape smarter, more efficient electronics for a brighter future"
      />
      <div className='lg:mt-[-80px]'>
       <Carrers/>

      </div>
    </div>
  );
}

export default Popularcareers2;
