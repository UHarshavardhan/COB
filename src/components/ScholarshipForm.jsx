import React from 'react';

const ScholarshipForm = () => {
  return (
    <div className="max-w-4xl mt-20 mx-auto p-6 rounded-lg">
      <form className=" space-y-4 text-left ">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your full name"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
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
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email address"
            />
        </div>

        {/* Phone number */}
        <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Phone number</label>
            <input
            type="text"
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="XXXXXXXXXX"
            />
        </div>
        </div>


        {/* Current Education Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Current Education Level</label>
          <select
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Select level</option>
            <option>High School</option>
            <option>Undergraduate</option>
            <option>Graduate</option>
            {/* Add more options as needed */}
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
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter GPA or Percentage"
          />
        </div>

        {/* Year completion of Class 12th */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Year completion of Class 12th</label>
          <input
            type="text"
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
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter GPA or Percentage"
          />
        </div>

        {/* Year completion of Class 10th */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Year completion of Class 10th</label>
          <input
            type="text"
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Year"
          />
        </div>
        </div>


        {/* Field of study */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Field of study</label>
          <select
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Select Field of study</option>
            <option>Science</option>
            <option>Arts</option>
            <option>Commerce</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex space-x-4">

        {/* Caste Category */}
        <div className="flex-1">

          <label className="block text-sm font-medium text-gray-700">Caste Category</label>
          <select
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Select your category</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Religion */}
        <div className="flex-1">

          <label className="block text-sm font-medium text-gray-700">Religion</label>
          <select
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Select level</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
            <option>Sikh</option>
            <option>Others</option>
            {/* Add more options as needed */}
          </select>
        </div>
        </div>


        {/* Annual family income */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Annual family income</label>
          <select
            className="mt-1 block border-[#635BFF] w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Select Income</option>
            <option>Less than 1 lakh</option>
            <option>1 lakh - 3 lakhs</option>
            <option>3 lakhs - 5 lakhs</option>
            <option>More than 5 lakhs</option>
          </select>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Extracurricular Activities</label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                id="sports"
                name="extracurricular"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-[#635BFF] border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="sports" className="ml-2 block text-sm text-gray-900">Sports</label>
            </div>
            <div className="flex items-center">
              <input
                id="arts"
                name="extracurricular"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-[#635BFF]  rounded focus:ring-indigo-500"
              />
              <label htmlFor="arts" className="ml-2 block text-sm text-gray-900">Arts & Culture</label>
            </div>
            <div className="flex items-center">
              <input
                id="volunteering"
                name="extracurricular"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-[#635BFF]  rounded focus:ring-indigo-500"
              />
              <label htmlFor="volunteering" className="ml-2 block text-sm text-gray-900">Volunteering</label>
            </div>
            <div className="flex items-center">
              <input
                id="leadership"
                name="extracurricular"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="leadership" className="ml-2 block text-sm text-gray-900">Leadership</label>
            </div>
            <div className="flex items-center">
              <input
                id="others"
                name="extracurricular"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="others" className="ml-2 block text-sm text-gray-900">Others</label>
            </div>
          </div>
        </div>

        {/* Scholarship Interest */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Are you interested in scholarships based on merit, need or both?
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                id="merit"
                name="scholarship"
                type="radio"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="merit" className="ml-2 block text-sm text-gray-900">Merit</label>
            </div>
            <div className="flex items-center">
              <input
                id="need"
                name="scholarship"
                type="radio"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="need" className="ml-2 block text-sm text-gray-900">Need</label>
            </div>
            <div className="flex items-center">
              <input
                id="both"
                name="scholarship"
                type="radio"
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="both" className="ml-2 block text-sm text-gray-900">Both</label>
            </div>
          </div>
        </div>

        {/* Additional Information or Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Information or Comments</label>
          <textarea
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
