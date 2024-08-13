import React, { useEffect, useRef } from "react";
import google from '../images/Google.png';

function Scroll() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: 570, 
                    behavior: "smooth",
                });
            }
        }, 3000); 

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div 
            className="w-full overflow-hidden relative" 
            ref={scrollRef}
            style={{ 
                scrollbarWidth: 'none', /* For Firefox */
                msOverflowStyle: 'none' /* For Internet Explorer and Edge */
            }}
        >
            <div className="flex space-x-4 snap-x scroll-smooth h-[490px] overflow-auto">
                <div className="snap-center flex-shrink-0 flex flex-col border-white shadow-2xl lg:w-[35%] w-[80%] h-[450px] rounded-2xl shadow-slate-300 mx-2 bg-white sm:w-full sm:max-w-[90%] sm:mx-4">
                    <div className="flex justify-center pt-4">
                        <img src={google} alt="google" className="w-[150px] h-[47px]" />
                    </div>
                    <div className="flex justify-center px-4 py-4">
                        <span className="text-[16px] md:text-[18px] lg:text-[24px] text-center">
                            I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.
                        </span>
                    </div>
                </div>

                <div className="snap-center flex-shrink-0 flex flex-col border-white shadow-xl lg:w-[35%] w-[80%] h-[450px] rounded-2xl shadow-slate-300 mx-2 bg-[#E9D6F9] sm:w-full sm:max-w-[90%] sm:mx-4">
                    <div className="flex justify-center pt-4">
                        <img src={google} alt="google" className="w-[150px] h-[47px]" />
                    </div>
                    <div className="flex justify-center px-4 py-4">
                        <span className="text-[16px] md:text-[18px] lg:text-[24px] text-center">
                            I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.
                        </span>
                    </div>
                </div>

                <div className="snap-center flex-shrink-0 flex flex-col border-white shadow-xl lg:w-[35%] w-[80%] h-[450px] rounded-2xl shadow-slate-300 mx-2 bg-white sm:w-full sm:max-w-[90%] sm:mx-4">
                    <div className="flex justify-center pt-4">
                        <img src={google} alt="google" className="w-[150px] h-[47px]" />
                    </div>
                    <div className="flex justify-center px-4 py-4">
                        <span className="text-[16px] md:text-[18px] lg:text-[24px] text-center">
                            I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.
                        </span>
                    </div>
                </div>

                <div className="snap-center flex-shrink-0 flex flex-col border-white shadow-xl lg:w-[35%] w-[80%] h-[450px] rounded-2xl shadow-slate-300 mx-2 bg-[#E9D6F9] sm:w-full sm:max-w-[90%] sm:mx-4">
                    <div className="flex justify-center pt-4">
                        <img src={google} alt="google" className="w-[150px] h-[47px]" />
                    </div>
                    <div className="flex justify-center px-4 py-4">
                        <span className="text-[16px] md:text-[18px] lg:text-[24px] text-center">
                            I’m a law student from National Law School of India University, Banglore. I wanted to get admission in university to get the best skills and education, but I was confused with so many options available, but Guide Me Career helped me to get the best course and university in the line of education which could make me successful ahead.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scroll;
