import React from "react";
import Navigation from "../components/Navigation.jsx";
import star from '../images/start.png'
import rectangle from '../images/rectangle.svg'
import trusted from '../images/trusted.png'
import { BsArrowRight } from "react-icons/bs";
import clogo from '../images/collegelogo.jpg'
import '../App.css'
import Courses from "../components/Courses.jsx";
import BlogScreen from "../components/BlogScreen.jsx";

function Homepage(){


    return (
        <>
<Navigation/>
<div className="main-header flex items-center justify-center mt-20" > 
                <div className="sub-header flex flex-col justify-center items-center ">
                    <div className="heading flex outline-double outline-gray-300 shadow-2xl shadow-slate-300 justify-center w-100 rounded-2xl p-1">
                        <span className=" flex items-center">
                            <img src={star} alt="" className="h-5" />
                            <p className="text-slate-600 text-sm">
                                Get top colleges, Best career guidance, Perfect hostel recommendations — all in one.
                            </p>
                        </span>

                    </div>
                    <div className="Main-heading mt-6 flex flex-col">
                    <div className="sub-heading flex flex-row items-center justify-center">
                     <h1 className="font-extrabold text-5xl vc-nudge-trial text-center tracking-tight">A GATEWAY TO THE  </h1>
                     <svg width="745" height="100" viewBox="0 0 745 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M14.4517 1C235.369 5.95839 457.497 6.06013 739.929 4.04543M7.78842 1.54288C170.609 5.02729 335.158 3.9839 739.902 3.67012M742.112 1.35293C744.208 36.1986 745.874 79.1944 739.576 94.8532M734.449 3.43557C732.968 24.2636 737.217 47.9453 734.89 95.8345M739.259 97.4961C483.631 89.8873 238.602 94.0507 11.3331 95.7147M735.33 96.9335C504.997 100.026 262.097 99.9248 5.50721 94.7278M12.4248 94.3922C-2.4012 68.0709 8.03613 43.7055 1 1.83724M3.20732 95.1848C8.1733 57.7325 16.2822 21.9665 11.1203 1.64519" stroke="#2E3192" stroke-width="2" stroke-linecap="round"/>
                     <foreignObject x="0" y="20" width="745" height="80">
    <div xmlns="http://www.w3.org/1999/xhtml" className="text-center">
      <h1 className="text-5xl font-extrabold text-blue-900 vc-nudge-trial">
        TOP BANGALORE COLLEGES
      </h1>
    </div>
  </foreignObject>
</svg>

              </div>
              <div className="Main-heading2 mt-4">
                  <h1 className="font-bold text-5xl text-center vc-nudge-trial">AND THE BEST STUDENT LIFE IN CITY</h1>
              </div>
              <div className="sub-heading text-center mt-2">
             <p className="text-slate-500 text-2xl"> We are thrilled to provide you the real-world<br/>
           knowledge and guide you through variety of career options</p>
                 </div>
                 <div className="truested mt-6">
                  <img src={trusted} alt=""></img>
                 </div>
                 <div className='Enquire justify-center items-start flex mt-2'>
            <button className='bg-indigo-800 text-white h-12 w-44 rounded-xl items-center justify-center flex mr-2'>Enquire <BsArrowRight className="ml-2" /> </button>
         </div>
        <div className="Colors felx-row ">
   
            </div > 

                    </div>

    <div className="Top-colleges Main-heading mt-16 flex-col"> 
      
         <div className="Top-heading flex items-center justify-center"> 
              <span>Top Universites of Bangalore</span>
              <BsArrowRight className="text-green-600 ml-2"/>

         </div>
         <div className="flex flex-row gap-48 flex-grow mt-6">
         <div className="college1" >
               <img src={clogo} alt='clogo'></img>
           </div>
           <div className="college1">
               <img src={clogo} alt='clogo'></img>
           </div>
           <div className="college1">
               <img src={clogo} alt='clogo'></img>
           </div>
           <div className="college1">
               <img src={clogo} alt='clogo'></img>
           </div>
           </div>
    </div>

                </div>
            
            </div>

            <div className="college-options flex flex-col justify-center items-center mt-28">
  <div 
    style={{ background: "#2E319273" }} 
    className="college w-1/3 h-12 rounded-md flex justify-center items-center "
  >
    <span className="text-white text-center">
      COLLEGES OF BANGALORE
    </span>
  </div>

  <div className="college-heading mt-7 text-[#2E3192] text-[48px]">
  The finest Options are Here!
  </div>

</div>

<Courses/>

</>
    );
}

export default Homepage;