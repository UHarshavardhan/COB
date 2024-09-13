import React, { useState, useEffect } from "react";
import { getAllCourses } from "../firebase/Course"; 
import ScholarshipHeader from "./ScholarshipHeader";

function Carrershome() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]); // State for all categories
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const allCourses = await getAllCourses(); // Fetch all courses

        // Get unique categories from the courses
        const uniqueCategories = Array.from(new Set(allCourses.map(course => course.carrierCategory)));
        setCategories(uniqueCategories);

        // Initially show all courses or filter based on the selected category
        const filteredCourses = selectedCategory === "All"
          ? allCourses
          : allCourses.filter(course => course.carrierCategory === selectedCategory);
          
        setCourses(filteredCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [selectedCategory]); // Re-fetch when the category changes

  const handleCourseClick = (courseName) => {
    console.log(`Navigating to course: ${courseName}`);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
  };

  return (
    <>

      <div className="flex justify-between items-center w-full mt-6">
        {/* Dropdown for selecting categories */}
        <select 
          className="border mx-[70%] p-2 rounded-lg" 
          value={selectedCategory} 
          onChange={handleCategoryChange}
        >
          <option value="All">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex justify-center items-center w-full mt-6">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-15 mx-[5%] gap-5">
          {courses.map((item, index) => (
            <div
              className="flex flex-row w-[100%] h-[160px] bg-white rounded-lg shadow-[6px_6px_12px_6px_rgba(0,0,0,0.1)] border shadow-gray-300 cursor-pointer"
              key={index}
              onClick={() => handleCourseClick(item.id)}
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="lg:w-[129px] h-[119px] mt-5 lg:ml-6"
              />
              <div className="flex flex-col mt-4 justify-between">
                <span className="lg:ml-16 text-[25px] font-pop font-semibold">
                  {item.name}
                </span>
                <span className="text-sm text-orange-400 text-[20px] lg:ml-16 mb-4 font-pop">
                  {item.numberOfColleges} colleges
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carrershome;
