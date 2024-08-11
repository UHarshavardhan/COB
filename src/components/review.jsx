import React from "react";
import google from '../images/Google.png';

function Review() {
  return (
    <>
      <div className="Review flex flex-col justify-center items-center snap-x scroll-smooth">
        <div className="bg-[#2E319273] w-[513px] h-[55px] rounded-lg justify-center items-center flex">
          <span className="text-white text-[20px] justify-center items-center">Reviews</span>
        </div>
        <div className="text-center my-5">
          <p className="text-[64px] text-[#2E3192]">Success in your Career is <br />Assured & Here is the Proof!</p>
        </div>
      </div>
    </>
  );
}

export default Review;
