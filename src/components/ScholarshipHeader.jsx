import React from 'react';
import Navigation from './Navigation';

const ScholarshipHeader = ({ breadcrumb, title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r h-[40vh] lg:h-[60vh] from-cyan-400 to-fuchsia-400 p-4 lg:p-8">
      <Navigation />
      
      <div className="text-xs lg:text-sm text-gray-200 mt-2 lg:mt-[5%]">
        {breadcrumb}
      </div>
      <h1 className="text-2xl lg:text-6xl font-bold text-black mt-2 lg:mt-4">
        {title}
      </h1>
      <p className="text-base lg:text-4xl text-gray-200 mt-2 lg:mt-4 lg:mx-[20%]">
        {subtitle}
      </p>
    </div>
  );
}

export default ScholarshipHeader;
