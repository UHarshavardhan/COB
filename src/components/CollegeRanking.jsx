import React, { useState, useEffect } from 'react';
import { getAllColleges, getCategories } from '../firebase/College'; // Import the function to fetch data
import { Link } from 'react-router-dom';

const CollegeCard = ({ rank, name, image, fees, placement, review, id }) => {
  return (
    <div className="border rounded-lg p-4 flex items-center justify-between bg-white shadow-md mb-4">
      <div className="flex items-center">
        <div className="text-lg font-semibold w-16">{rank}</div>
        <img
          src={image}
          alt={`${name}-logo`}
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
      <Link to={`/college/${id}`} className="text-blue-600 font-semibold">View Details</Link>
    </div>
  );
};

const CollegeRanking = () => {
  const [colleges, setColleges] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories and colleges
        const fetchedCategories = await getCategories();
        const fetchedColleges = await getAllColleges();

        // Set categories and default selectedCategory
        setCategories(fetchedCategories);
        if (fetchedCategories.length > 0) {
          setSelectedCategory(fetchedCategories[0]);
        }

        // Set colleges
        setColleges(fetchedColleges);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter colleges based on the selected category
  const filteredColleges = colleges
    .filter(college => college.category === selectedCategory)
    .sort((a, b) => b.popularity_score - a.popularity_score)
    .slice(0, 10); // Top 10 colleges

  return (
    <div className="lg:mx-[10%] mx-auto p-6">
      <h1 className="text-[64px] mb-6 font-pop text-[#2E3192] font-semibold">Top 10 Colleges</h1>

      <div className="flex justify-between overflow-x-auto mb-6">
        {categories.length > 0 && categories.map((category, index) => (
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
              key={college.id}
              rank={index + 1}
              name={college.name}
              image={college.image}
              fees={college.fees}
              placement={college.placement}
              review={college.rating} // Assuming rating is used for review
              id={college.id}
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
