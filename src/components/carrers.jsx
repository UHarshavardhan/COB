import React from "react";
import { useNavigate } from "react-router-dom";
import CarrersData from "../jsondata/carrers.js";

function Carrers() {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    navigate(`/courses/${course}`);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full mt-6">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-15 mx-[5%] gap-5">
          {CarrersData.data.map((item, index) => (
            <div
              className="flex flex-row w-[100%] h-[160px] bg-white rounded-lg shadow-[6px_6px_12px_6px_rgba(0,0,0,0.1)] border shadow-gray-300 cursor-pointer"
              key={index}
              onClick={() => handleCourseClick(item.course)}
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="lg:w-[129px] h-[119px] mt-5 lg:ml-6"
              />
              <div className="flex flex-col mt-4 justify-between">
                <span className="lg:ml-16 text-[25px] font-pop font-semibold">
                  {item.course}
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

export default Carrers;
