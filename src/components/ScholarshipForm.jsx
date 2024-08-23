import React, { useState } from 'react';
import { createScholarshipEnquiry, getAllScholarshipEnquiries } from '../firebase/ScholarshipEnquiry';


const ScholarshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    education: '',
    grade12: '',
    year12: '',
    grade10: '',
    year10: '',
    studyField: '',
    casteCategory: '',
    religion: '',
    income: '',
    extracurricular: [],
    scholarshipInterest: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        extracurricular: checked
          ? [...prevData.extracurricular, name]
          : prevData.extracurricular.filter((item) => item !== name),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createScholarshipEnquiry(formData);
      alert('Scholarship enquiry submitted successfully!');
      // Clear form data if needed
      setFormData({
        fullName: '',
        dob: '',
        email: '',
        phone: '',
        education: '',
        grade12: '',
        year12: '',
        grade10: '',
        year10: '',
        studyField: '',
        casteCategory: '',
        religion: '',
        income: '',
        extracurricular: [],
        scholarshipInterest: '',
        additionalInfo: '',
      });
    } catch (error) {
      console.error('Error submitting scholarship enquiry:', error);
      alert('Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mt-20 mx-auto p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your full name"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Email and Phone in the same row */}
        <div className="flex space-x-4">
          {/* Primary Email */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Primary Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone number */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Phone number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="XXXXXXXXXX"
            />
          </div>
        </div>

        {/* Current Education Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Current Education Level</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select level</option>
            <option value="High School">High School</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
          </select>
        </div>

        <div className="flex space-x-4">
          {/* Grade Point Average or Percentage of Class 12th */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Grade Point Average or Percentage of Class 12th
            </label>
            <input
              type="text"
              name="grade12"
              value={formData.grade12}
              onChange={handleChange}
              className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter GPA or Percentage"
            />
          </div>

          {/* Year completion of Class 12th */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Year completion of Class 12th</label>
            <input
              type="text"
              name="year12"
              value={formData.year12}
              onChange={handleChange}
              className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Year"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          {/* Grade Point Average or Percentage of Class 10th */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Grade Point Average or Percentage of Class 10th
            </label>
            <input
              type="text"
              name="grade10"
              value={formData.grade10}
              onChange={handleChange}
              className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter GPA or Percentage"
            />
          </div>

          {/* Year completion of Class 10th */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Year completion of Class 10th</label>
            <input
              type="text"
              name="year10"
              value={formData.year10}
              onChange={handleChange}
              className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Year"
            />
          </div>
        </div>

        {/* Field of study */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Field of study</label>
          <select
            name="studyField"
            value={formData.studyField}
            onChange={handleChange}
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Field of study</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Commerce">Commerce</option>
          </select>
        </div>

        <div className="flex space-x-4">
          {/* Caste Category */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Caste Category</label>
            <select
              name="casteCategory"
              value={formData.casteCategory}
              onChange={handleChange}
              className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select your category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
          </div>

          {/* Religion */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Religion</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        {/* Annual family income */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Annual family income</label>
          <select
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Income</option>
            <option value="Less than 1 lakh">Less than 1 lakh</option>
            <option value="1 lakh - 3 lakhs">1 lakh - 3 lakhs</option>
            <option value="3 lakhs - 5 lakhs">3 lakhs - 5 lakhs</option>
            <option value="More than 5 lakhs">More than 5 lakhs</option>
          </select>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Extracurricular Activities</label>
          <div className="mt-2 space-y-2">
            {['sports', 'arts', 'volunteering', 'leadership', 'others'].map((activity) => (
              <div key={activity} className="flex items-center">
                <input
                  id={activity}
                  name={activity}
                  type="checkbox"
                  checked={formData.extracurricular.includes(activity)}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-[#635BFF] border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor={activity} className="ml-2 block text-sm text-gray-900">{activity.charAt(0).toUpperCase() + activity.slice(1)}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarship Interest */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Are you interested in scholarships based on merit, need or both?
          </label>
          <div className="mt-2 space-y-2">
            {['merit', 'need', 'both'].map((interest) => (
              <div key={interest} className="flex items-center">
                <input
                  id={interest}
                  name="scholarshipInterest"
                  type="radio"
                  value={interest}
                  checked={formData.scholarshipInterest === interest}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label htmlFor={interest} className="ml-2 block text-sm text-gray-900">{interest.charAt(0).toUpperCase() + interest.slice(1)}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information or Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Information or Comments</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter any additional information or comments"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScholarshipForm;
