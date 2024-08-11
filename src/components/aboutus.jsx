import React from "react";
import boy from '../images/boy.png'
import girl from '../images/about-03 1.png'
import rectangle from '../images/Rectangle 2780.svg'
import heart from '../images/heart.png'
import book from '../images/book.png'


function aboutus(){
return (
    <>
    <div className="flex flex-row mt-7 ">
       <div className="mt-96 flex flex-col  ml-12">
  <div className="relative w-[400px] h-[500px] bg-pink-500 overflow-visible">
    <img 
      src={boy}
      alt="Student with thumbs up" 
      className="absolute bottom-0 left-24 w-[400px] h-[815px] object-cover overflow-visible"
    />
  </div>
  <img 
      src={girl}
      className="relative bottom-40 left-[200px] h-[650px] w-[793px] z-40"
    />


</div>
<div className="flex flex-col relative left-36">
    <div className="bg-[#2E319273]
opacity-[45%] w-[513px] h-[55px] border-2 rounded-xl relative top-72 flex justify-center items-center">
        <span className="text-white justify-center text-justify">KNOW ABOUT US</span>
 
    </div>

    <div className="about-us-text relative top-72 mt-3">
           <span className="text-[#2E3192] text-[64px]
">Know Why We here to counsel You!</span>
    </div>
 <div className="rectangle relative top-80" >
   <img src={rectangle}/>
 </div>
 <div className="flex flex-row relative top-[350px]">
    <div className="flex flex-col bg-[#FAECF1] w-[100px] h-[100px] rounded-full justify-center items-center " >
         <img src={heart} alt='heart' className="w-[28.33px] h-[26px]"/>
    </div>
   <div className="flex flex-col ml-5 mt-4 ">
         <span className="aboutus-text text-[20px] text-[#E24678]">A Partner to Guide you</span>
        <div className="mt-1">
            <span className="text-[#6E7C91] text-[18px] mt-2">
            We play a vital role in every student’s life comes <br/> to 
            deciding a particular field. 
            </span>
        </div>
</div>
 </div>
 <div className="flex flex-row relative top-[350px] mt-6">
    <div className="flex flex-col bg-[#E4E9FD] w-[100px] h-[100px] rounded-full justify-center items-center " >
         <img src={book} alt='heart' className="w-[28.33px] h-[26px]"/>
    </div>
   <div className="flex flex-col ml-5 mt-4 ">
         <span className="aboutus-text text-[20px] text-[#2E3192]">Select from wide range of best colleges/Universities <br/>
         in Bangalore Curated only for you</span>
        <div className="mt-1">
            <span className="text-[#6E7C91] text-[18px] mt-5">
            Our guide help students to opt for a perfect college or <br/> university for them
            </span>
        </div>
</div>
 </div>
 
 
</div>

</div>





    </>
)
}

export default aboutus;