import React, { useState } from 'react';
import img from '../images/image1.png';
import colleges from '../jsondata/top10clg.js';
  

const categories = ["MBA/PGDM", "MBBS", "ME/MTech", "BE/BTech", "Graduate Diploma in Education", "BMM", "MCA"];

const CollegeCard = ({ rank, name, fees, placement, review }) => {
  return (
    <div className="border rounded-lg p-4 flex items-center justify-between bg-white shadow-md mb-4">
      <div className="flex items-center">
        <div className="text-lg font-semibold w-16">{rank}</div>
        <img
          src={img}
          alt="college-logo"
          className="h-12 w-12 mx-4"
        />
        <div className='lg:w-[200px]'>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">CAT/GMAT</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-700">Course Fees</p>
        <p className="font-semibold">{fees}</p>
      </div>
      <div className="text-center">
        <p className="text-gray-700">Placement</p>
        <p className="font-semibold">{placement}</p>
        <p className="text-xs text-gray-600">Highest Package</p>
      </div>
      <div className="text-center">
        <p className="text-gray-700">User Reviews</p>
        <p className="font-semibold">{review}</p>
        <p className="text-xs text-gray-600">Based on 234 reviews</p>
      </div>
      <button className="text-blue-600 font-semibold">View Details</button>
    </div>
  );
};

const CollegeRanking = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filter colleges based on the selected category
  const filteredColleges = colleges.filter(
    (college) => college.category === selectedCategory
  );

  return (
    <div className=" lg:mx-[10%] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Top 10 Colleges</h1>

      {/* Category Selection */}
      <div className="flex justify-between overflow-x-auto mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-1 text-sm font-medium rounded-full ${
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
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No colleges available for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default CollegeRanking;
