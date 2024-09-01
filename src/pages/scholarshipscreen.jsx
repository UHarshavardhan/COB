import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router for routing
import { getScholarshipById } from './../firebase/Scholarships'; // Adjust the import based on your actual service

const Scholarship_Screen = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);

  useEffect(() => {
    const fetchScholarship = async () => {
      try {
        const data = await getScholarshipById(id);
        setScholarship(data);
      } catch (error) {
        console.error('Error fetching scholarship:', error);
      }
    };

    fetchScholarship();
  }, [id]);

  if (!scholarship) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center px-10 p-6 bg-gray-100 min-h-screen">
      {/* Image Placeholder */}
      <div className="w-full h-64 bg-gray-200 rounded-lg mb-6">
        {/* Replace with actual image or component */}
        <div className="h-full w-full bg-gray-300"></div>
      </div>

      {/* Content Sections */}
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">About Scholarship</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.about}
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.overview}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Benefits</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.benefits}
          </p>
        </div>

        {/* Renewal Policy Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Renewal Policy</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.renewalPolicy}
          </p>
        </div>

        {/* Eligibility Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Eligibility</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.eligibility}
          </p>
        </div>

        {/* Documents Required Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Documents Required</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.documentsRequired}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scholarship_Screen;
