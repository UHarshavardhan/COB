import React from "react";

function Subscribe() {
    return (
        <div className="bg-[#EFF0FF] py-8 px-4 flex flex-col items-center">
            <div className="text-center mb-4">
                <span className="text-2xl md:text-3xl lg:text-4xl text-[#2E3192]">Subscribe To Our Newsletter</span>
            </div>
            <div className="text-center mb-6">
                <span className="text-base md:text-lg lg:text-xl text-[#6E7C91]">Get College Notifications, Exam Notifications, and News Updates</span>
            </div>
            <div className="flex flex-col md:flex-row w-full max-w-xl space-y-4 md:space-y-0 md:space-x-4">
                <input
                    type="email"
                    placeholder="Enter your email id"
                    className="w-full md:w-1/2 h-12 border border-black rounded-lg px-4 text-black placeholder-black"
                />
                <input
                    type="text"
                    placeholder="Enter your mobile no"
                    className="w-full md:w-1/2 h-12 border border-black rounded-lg px-4 text-black placeholder-black"
                />
            </div>
        </div>
    );
}

export default Subscribe;
