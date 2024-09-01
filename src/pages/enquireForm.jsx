import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader';
import EnquireFormComponent from '../components/EnquireFormComponent';

function EnquireForm() {
  return (
    <div className="App mb-20">
      <ScholarshipHeader 
        breadcrumb="Home &gt; Find Scholarship" 
        title="Your Path to Your Dream University Starts Here!" 
        subtitle="Fill in your details and express interest in a free education assessment, where you can get all your questions answered."
      />
      <EnquireFormComponent />
    </div>
  );
}

export default EnquireForm;
