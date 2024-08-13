import React, { useState } from 'react';
import img from '../images/image1.png';
import colleges from '../jsondata/top10clg.js';

const categories = ["MBA/PGDM", "MBBS", "ME/MTech", "BE/BTech", "Graduate Diploma in Education", "BMM", "MCA"];

const CollegeCard = ({ rank, name, fees, placement, review, isExpanded, toggleExpand }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col md:flex-row items-center justify-between bg-white shadow-md mb-4 md:mb-6">
      <div className="flex items-center w-full md:w-auto">
        <div className="text-lg font-semibold w-16 md:w-20">{rank}</div>
        <img
          src={img}
          alt="college-logo"
          className="h-12 w-12 md:h-16 md:w-16 mx-4"
        />
        <div className='w-full md:w-[200px]'>
          <h2 className="text-lg md:text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">CAT/GMAT</p>
        </div>
      </div>

      {/* Mobile Expansion Button */}
      <button
        className="md:hidden text-blue-600 font-semibold mt-4"
        onClick={toggleExpand}
      >
        {isExpanded ? 'Close' : 'Open'}
      </button>

      {/* Conditional Rendering of Details */}
      <div className={`w-full md:w-auto ${isExpanded ? 'block' : 'hidden'} md:block`}>
        <div className="text-center mt-4 md:mt-0">
          <p className="text-gray-700">Course Fees</p>
          <p className="font-semibold">{fees}</p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <p className="text-gray-700">Placement</p>
          <p className="font-semibold">{placement}</p>
          <p className="text-xs text-gray-600">Highest Package</p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <p className="text-gray-700">User Reviews</p>
          <p className="font-semibold">{review}</p>
          <p className="text-xs text-gray-600">Based on 234 reviews</p>
        </div>
        <button className="text-blue-600 font-semibold mt-4 md:mt-0">View Details</button>
      </div>
    </div>
  );
};

const  MobileCollegeRanking = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [expandedCard, setExpandedCard] = useState(null);

  // Filter colleges based on the selected category
  const filteredColleges = colleges.filter(
    (college) => college.category === selectedCategory
  );

  // Toggle expand/collapse of a card
  const handleExpandToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="mx-auto p-4 md:p-6 lg:mx-[10%]">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Top 10 Colleges</h1>

      {/* Category Selection */}
      <div className="flex overflow-x-auto mb-4 md:mb-6 space-x-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* College Cards */}
      <div>
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college, index) => (
            <CollegeCard
              key={index}
              rank={college.rank}
              name={college.name}
              fees={college.fees}
              placement={college.placement}
              review={college.review}
              isExpanded={expandedCard === index}
              toggleExpand={() => handleExpandToggle(index)}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No colleges available for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default MobileCollegeRanking;
