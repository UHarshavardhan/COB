import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader';
import ScholarshipForm from '../components/ScholarshipForm';

function ScholarshipFormScreen() {
  return (
    <div className="App mb-20">
      <ScholarshipHeader 
        breadcrumb="Home &gt; Find Scholarship" 
        title="Scholarships To Apply For" 
        subtitle="Here are some of the best college scholarships with approaching deadlines for high school seniors"
      />
      <ScholarshipForm />
    </div>
  );
}

export default ScholarshipFormScreen;
