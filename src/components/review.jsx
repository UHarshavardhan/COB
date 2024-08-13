import React from "react";
import google from '../images/Google.png';
import Scroll from "./scroll";

function Review() {
  return (
    <>
      <div className="Review flex flex-col justify-center items-center snap-x scroll-smooth px-4">
        <div className="bg-[#2E319273] w-full max-w-md h-[55px] rounded-lg flex justify-center items-center">
          <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">Reviews</span>
        </div>
        <div className="text-center my-5 px-4">
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#2E3192] font-bold">
            Success in your Career is <br />Assured & Here is the Proof!
          </p>
        </div>
      </div>
      <Scroll />
    </>
  );
}

export default Review;
