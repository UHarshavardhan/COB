import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader';
import EnquireFormComponent from '../components/EnquireFormComponent';

function EnquireForm() {
  return (
    <div className="App mb-20">
      <ScholarshipHeader 
        breadcrumb="Home &gt; Find Scholarship" 
        title="Scholarships To Apply For" 
        subtitle="Here are some of the best college scholarships with approaching deadlines for high school seniors"
      />
      <EnquireFormComponent />
    </div>
  );
}

export default EnquireForm;
