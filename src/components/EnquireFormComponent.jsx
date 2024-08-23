import React, { useState } from 'react';
import { db } from './../firebase/firebase'; // Adjust import path as needed
import { v4 as uuidv4 } from 'uuid';
import { createEnquiry } from '../firebase/Enquireform';

const EnquireFormComponent = () => {
  const [role, setRole] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [yearOfCompleting, setYearOfCompleting] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [bestContactTime, setBestContactTime] = useState('');
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!agreePolicy) {
      alert('You must agree to the privacy policy.');
      return;
    }

    try {
      const enquiryData = {
        id: uuidv4(),
        type:role,
        firstName,
        lastName,
        email,
        phoneNumber,
        currentSchool,
        yearOfCompleting,
        currentCity,
        bestContactTime,
        timestamp: new Date(),
      };

      await createEnquiry(enquiryData)

      alert('Your enquiry has been submitted successfully!');
      
      // Clear form fields after submission
      setRole('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setCurrentSchool('');
      setYearOfCompleting('');
      setCurrentCity('');
      setBestContactTime('');
      setAgreePolicy(false);
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    }
  };

  return (
    <div className="min-h-screen lg:mx-[20%] flex items-center justify-center">
      <form className="p-6 rounded w-full" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold text-left mb-6">Are you a Guardian or a Student?</h2>
        
        <div className="flex justify-between p-10 mb-4">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`w-1/2 py-2 rounded-l-lg border border-r-0 border-[#635BFF] text-[#635BFF] ${role === 'student' ? 'bg-blue-100' : 'bg-white'}`}
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>
        
        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Current School</label>
          <input
            type="text"
            placeholder="Enter your school name"
            value={currentSchool}
            onChange={(e) => setCurrentSchool(e.target.value)}
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Year of Completing</label>
          <input
            type="text"
            placeholder="Enter your current grade"
            value={yearOfCompleting}
            onChange={(e) => setYearOfCompleting(e.target.value)}
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Current City</label>
          <input
            type="text"
            placeholder="Enter your city name"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-1 text-left">Best Contact Time</label>
          <select
            value={bestContactTime}
            onChange={(e) => setBestContactTime(e.target.value)}
            className="p-3 border border-[#635BFF] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#635BFF]"
          >
            <option value="">Please select one</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={agreePolicy}
            onChange={(e) => setAgreePolicy(e.target.checked)}
            className="mr-2"
          />
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
