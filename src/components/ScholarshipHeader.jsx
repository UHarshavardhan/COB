import React from 'react';
import Navigation from './Navigation';

const ScholarshipHeader = ({ breadcrumb, title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r h-[40vh] lg:h-[60vh] from-[#a1a2f8] to-[#bf90e7] p-4 lg:p-8">
      <Navigation />
         <div className="flex text-xs lg:text-sm text-slate-300 mt-8 justify-start">
        {breadcrumb}
      </div>
      <h1 className="text-2xl text-center lg:text-5xl font-bold text-black mt-2 lg:mt-4">
        {title}
      </h1>
      <p className="text-base text-center lg:text-2xl text-gray-200 mt-2 lg:mt-4 lg:mx-[20%]">
        {subtitle}
      </p>
    </div>
  );
}

export default ScholarshipHeader;
