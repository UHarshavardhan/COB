import React from "react";

function subscribe(){
    return (
        <>
        <div className="">
            <div className="bg-[#EFF0FF] h-[300px] w-full flex flex-col justify-center items-center">
                <div  className=" justify-center m-2">
                <span className="text-[40px] text-[#2E3192]">Subscribe To Our Newsletter</span>
               </div>
               <div className="">
                   <span className="text-[20px] text-[#6E7C91]">Get College Notifications. Exam Notifications and news Updates</span>
               </div>
               <div className="flex flex-row mt-9 justify-between">
              <input type="text" placeholder="Enter your email id" className="mx-9 w-[280px] h-[50px] border-[1px] rounded-lg border-black text-center text-black placeholder-black"/>
              <input type="text" placeholder="Enter your moblie no" className="mx-9 w-[280px] h-[50px] border-[1px] rounded-lg border-black text-center text-black placeholder-black"> </input>
               </div>
            </div>
        </div>
        </>
    )
}
export default subscribe;