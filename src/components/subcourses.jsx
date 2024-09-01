import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCourses } from "../firebase/Course"; 
import ScholarshipHeader from "./ScholarshipHeader";

function SubCourses() {
  const navigate = useNavigate();
  const { category } = useParams(); // Get the category from the URL
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const allCourses = await getAllCourses(); // Fetch all courses
        const filteredCourses = allCourses.filter(course => course.carrierCategory === category); // Filter based on category
        setCourses(filteredCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [category]); // Re-fetch when the category changes

  const handleCourseClick = (courseName) => {
    navigate(`/course/${courseName}`);
  };

  return (
    <>
      <ScholarshipHeader 
        breadcrumb="Home &gt; Popular Careers" 
        title="Popular Careers To Apply For" 
        subtitle="Here are some of the best courses"
      />
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

export default SubCourses;
