import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllColleges } from '../firebase/College'; // Import the function to fetch colleges
import star from '../images/star.png';

function Collegetab() {
  const { category } = useParams(); // Get the category parameter from the URL
  const [colleges, setColleges] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const allColleges = await getAllColleges();
        // Filter colleges based on the category
        const filteredColleges = allColleges.filter(college => college.category === category);
        setColleges(filteredColleges);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, [category]);

  // Handler for card click
  const handleCardClick = (collegeId) => {
    navigate(`/college/${collegeId}`); // Navigate to the college detail page
  };

  return (
    <div className="flex p-5">
      <div className="grid grid-cols-3 gap-4 justify-center">
        {colleges.map((item, index) => (
          <div
            className="flex bg-white flex-col border-2 shadow-md rounded-md w-[450px] h-[356px] justify-center cursor-pointer"
            key={index}
            onClick={() => handleCardClick(item.id)} // Attach click handler
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-[417px] h-[210px]"
              />
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-start ml-2 mt-4">
                <span className="text-[20px]">{item.name}</span>
                <div className="flex flex-row mt-2">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <img key={i} src={star} alt="star" className="w-[19.31px] h-[19px]" />
                  ))}
                </div>
                <div className="mt-5">
                  <span className="text-orange-600">Learn more</span>
                </div>
              </div>
              <div className="flex flex-col mb-3 mr-3 mt-4">
                <button className="w-[150px] h-[38px] bg-[#2E3192] rounded-lg mb-3 text-white text-[12px]">
                  Apply now
                </button>
                <button className="w-[150px] h-[38px] bg-[#2E3192] rounded-lg text-white text-[12px]">
                  Download brochure
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collegetab;
