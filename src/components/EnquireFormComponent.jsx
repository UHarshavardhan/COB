import React, { useState } from 'react';

const EnquireFormComponent = () => {
  const [role, setRole] = useState('');

  return (
    <div className="min-h-screen lg:mx-[20%] flex items-center justify-center">
      <form className="p-6 rounded w-full">
        <h2 className="text-xl font-semibold text-left mb-6">Are you a Guardian or a Student?</h2>
        
        <div className="flex justify-between p-10 mb-4">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`w-1/2 py-2   rounded-l-lg border border-r-0 border-[#635BFF] text-[#635BFF] ${role === 'student' ? 'bg-blue-100' : 'bg-white'}`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole('guardian')}
            className={`w-1/2 py-2 rounded-r-lg border border-[#635BFF] text-[#635BFF] ${role === 'guardian' ? 'bg-blue-100' : 'bg-white'}`}
          >
            Guardian
          </button>
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>
        
        <div className="mb-4">
          <label className="text-sm  font-bold text-gray-600 block mb-1 text-left">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold  text-gray-600 block mb-1 text-left">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Current School</label>
          <input
            type="text"
            placeholder="Enter your school name"
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Year of Completing</label>
          <input
            type="text"
            placeholder="Enter your current grade"
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Current City</label>
          <input
            type="text"
            placeholder="Enter your city name"
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm  font-bold text-gray-600 block mb-1 text-left">Best Contact Time</label>
          <select
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          >
            <option value="">Please select one</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        
        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm font-bold text-gray-600">I agree to the privacy policy</label>
        </div>
        
        <button
          type="submit"
          className="bg-[#635BFF] text-white py-3 rounded w-full hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquireFormComponent;
