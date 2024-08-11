import React from "react";
import google from '../images/Google.png';

function scroll(){

    return (
<div className="flex snap-x space-x-6 py-5 scroll-smooth w-full overflow-x-scroll">
<div className="snap-center flex flex-col border-white shadow-xl w-[567px] h-[400px] border-2 rounded-2xl shadow-slate-300 mx-2">
  <div className="flex justify-center pt-4">
    <img src={google} alt="google" className="w-[150px] h-[47px]" />
  </div>
  <div className="flex justify-center px-4 py-4">
    <span className="text-[24px] text-center">
      I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.
    </span>
  </div>
</div>
{/* Repeat for other cards */}
<div className="snap-center flex flex-col border-white shadow-xl w-[567px] h-[400px] border-2 rounded-2xl shadow-slate-300 mx-2">
  <div className="flex justify-center pt-4">
    <img src={google} alt="google" className="w-[150px] h-[47px]" />
  </div>
  <div className="flex justify-center px-4 py-4">
    <span className="text-[24px] text-center">
      I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.
    </span>
  </div>
</div>
<div className="snap-center flex flex-col border-white shadow-xl w-[567px] h-[400px] border-2 rounded-2xl shadow-slate-300 mx-2">
  <div className="flex justify-center pt-4">
    <img src={google} alt="google" className="w-[150px] h-[47px]" />
  </div>
  <div className="flex justify-center px-4 py-4">
    <span className="text-[24px] text-center">
      I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.
    </span>
  </div>
</div>
<div className="snap-center flex flex-col border-white shadow-xl w-[567px] h-[400px] border-2 rounded-2xl shadow-slate-300 mx-2">
  <div className="flex justify-center pt-4">
    <img src={google} alt="google" className="w-[150px] h-[47px]" />
  </div>
  <div className="flex justify-center px-4 py-4">
    <span className="text-[24px] text-center">
      I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.
    </span>
  </div>
</div>
{/* Add more cards as needed */}
</div>
    )
}

export default scroll;