import React, { useEffect } from "react";
import Navigation from "../components/Navigation.jsx";
import star from '../images/start.png'
import rectangle from '../images/rectangle.svg'
import trusted from '../images/trusted.png'
import { BsArrowRight } from "react-icons/bs";
import clogo from '../images/collegelogo.jpg'
import '../App.css'
import Courses from "../components/Courses.jsx";
import BlogScreen from "../components/BlogScreen.jsx";
import Aboutus from "../components/aboutus.jsx";
import CollegeRanking from "../components/CollegeRanking.jsx";
import LatestNews from "../components/LatestNews.jsx";
import Review from '../components/review.jsx';
import Scroll from "../components/scroll.jsx";
import Subscribe from "../components/subscribe.jsx";
import MobileCollegeRanking from "../components/mobileCollegeRanking.jsx";
import Collegetab from "../components/Colleges.jsx";
import Hotels from "../components/hotels.jsx";
import { exampleUsage } from "../firebase/Course.js";

function Homepage() {
  
    return (
        <>
            <Navigation />
            <div className=" w-[100%] flex flex-col items-center mt-10 px-4 md:px-6 lg:px-8">
                <div className="flex w-[100%] flex-col items-center">
                    <div className="heading flex outline-double outline-gray-300 shadow-2xl shadow-slate-300 justify-center lg:w-[45%]  rounded-2xl p-2 md:p-4">
                    <span className="flex items-center">
                        <img src={star} alt="" className="h-4 md:h-5" />
                        <p className="text-slate-600 text-xs md:text-sm">
                        Get top colleges, Best career guidance, Perfect hostel recommendations — all in one.
                        </p>
                    </span>
                    </div>
                    <div className="w-[100%] mt-6 flex flex-col items-center">
                    <div className="w-[100%] flex lg:flex-row flex-col items-center">
                        <h1 className="font-extrabold lg:w-[45%] text-3xl md:text-4xl lg:text-5xl text-right tracking-tight">A GATEWAY TO THE</h1>
                        <div className="lg:w-[50%]">   
                        <svg width="100%" height="auto" viewBox="0 0 745 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                        <path d="M14.4517 1C235.369 5.95839 457.497 6.06013 739.929 4.04543M7.78842 1.54288C170.609 5.02729 335.158 3.9839 739.902 3.67012M742.112 1.35293C744.208 36.1986 745.874 79.1944 739.576 94.8532M734.449 3.43557C732.968 24.2636 737.217 47.9453 734.89 95.8345M739.259 97.4961C483.631 89.8873 238.602 94.0507 11.3331 95.7147M735.33 96.9335C504.997 100.026 262.097 99.9248 5.50721 94.7278M12.4248 94.3922C-2.4012 68.0709 8.03613 43.7055 1 1.83724M3.20732 95.1848C8.1733 57.7325 16.2822 21.9665 11.1203 1.64519" stroke="#2E3192" strokeWidth="2" strokeLinecap="round"/>
                        <foreignObject x="0" y="20" width="100%" height="80">
                            <div xmlns="http://www.w3.org/1999/xhtml" className="text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900">
                                TOP BANGALORE COLLEGES
                            </h1>
                            </div>
                        </foreignObject>
                        </svg>
                        </div>
                    </div>
                    <div className="Main-heading2 mt-4">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center">AND THE BEST STUDENT LIFE IN CITY</h1>
                    </div>
                    <div className="sub-heading text-center mt-2">
                        <p className="text-slate-500 text-lg md:text-xl lg:text-2xl">We are thrilled to provide you the real-world <br/>knowledge and guide you through a variety of career options</p>
                    </div>
                    <div className="w-full trusted mt-6">
                        <img src={trusted} alt="" className=" h-[100%] w-[100%]" />
                    </div>
                    <div className='Enquire flex justify-center items-center mt-2'>
                        <button className='bg-indigo-800 text-white h-12 w-44 rounded-xl flex items-center justify-center mr-2'>
                        Enquire <BsArrowRight className="ml-2" />
                        </button>
                    </div>
                    </div>
                </div>

                <div className="Top-colleges mt-16 flex flex-col items-center px-4">
                    <div className="Top-heading flex items-center">
                    <span className="text-xl md:text-2xl lg:text-3xl">Top Universities of Bangalore</span>
                    <BsArrowRight className="text-green-600 ml-2"/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="college1">
                        <img src={clogo} alt='clogo' className="w-full max-w-[200px]" />
                        </div>
                    ))}
                    </div>
                </div>

                <div className="college-options flex flex-col items-center mt-28 px-4">
                    <div style={{ background: "#2E319273" }} className="college w-full max-w-xs h-12 rounded-md flex justify-center items-center">
                    <span className="text-white text-center">
                        COLLEGES OF BANGALORE
                    </span>
                    </div>
                    <div className="college-heading mt-7 text-[#2E3192] text-3xl md:text-4xl lg:text-5xl">
                    The finest Options are Here!
                    </div>
                </div>
                </div>




            <Courses/>
            <div className="lg:block hidden"><CollegeRanking/></div>
            <div className="block lg:hidden"><MobileCollegeRanking /></div>
            <div className="lg:block hidden"><Aboutus/></div>
            <Review/>
            <LatestNews/>
            <BlogScreen />    
            <Subscribe/> 

        </>
    );
}

export default Homepage;
