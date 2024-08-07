import React from "react";
import courseData from "../jsondata/courses.js";

function Courses() {
  return (
    <>
      <div className="flex justify-center items-center w-full mt-6">
        <div className="grid grid-cols-3 gap-5">
          {courseData.data.map((item, index) => (
            <div
              className="flex flex-row w-[420px] h-[160px] rounded-lg shadow-[6px_6px_12px_6px_rgba(0,0,0,0.1)] border shadow-gray-300 "
              key={index}
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="w-[129px] h-[119px] mt-5 ml-6"
              />
              <div className="flex flex-col mt-4 justify-between ">
                <span className="font-bold ml-16
                 text-[30px]">{item.course}</span>
                <span className="text-sm text-orange-400 text-[20px] ml-16 mb-4">
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

export default Courses;
