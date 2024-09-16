import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getScholarshipById } from './../firebase/Scholarships';
import Navigation from '../components/Navigation.jsx';
import { useNavigate } from 'react-router-dom';

const Scholarship_Screen = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    navigate('/scholarshipform');
  };

  return (
    <>
      <div className="flex flex-col bg-gradient-to-r h-[40vh] lg:h-[60vh] from-[#a1a2f8] to-[#bf90e7] p-4 lg:p-8">
        <Navigation />
        <div className="flex text-xs lg:text-sm text-slate-300 mt-8 justify-start"></div>
        <h1 className="text-3xl lg:text-5xl font-bold text-black mt-2 lg:mt-10">
          Government of India <br /> Post-Matric Scholarship
        </h1>
        <div className="flex flex-row justify-between items-center mt-7">
          <p className="text-sm lg:text-2xl text-gray-200">
            Department Name: Social Justice and Special Assistance
          </p>
          <button
            className="bg-indigo-800 text-white px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-lg rounded-md"
            onClick={handleSubmit}
          >
            Apply Now
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 lg:px-10 py-6 min-h-screen">
        <div className="w-full h-64 lg:h-[500px] mb-6 bg-gray-200 object-contain rounded-lg overflow-hidden">
          <img
            src={scholarship.link}
            alt="scholarship"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full bg-white rounded-lg shadow-lg p-4 lg:p-6">
          <div className="flex flex-col border-2 shadow-lg mb-7 rounded-lg p-4 lg:px-8">
            <h2 className="font-semibold text-xl lg:text-2xl text-indigo-700">
              About Scholarship
            </h2>
            <hr className="my-2" />
            <p className="text-gray-700 text-sm lg:text-base">{scholarship.about}</p>
          </div>

          <div className="flex flex-col border-2 shadow-lg mb-7 rounded-lg p-4 lg:px-8">
            <h2 className="font-semibold text-xl lg:text-2xl text-indigo-700">
              Overview
            </h2>
            <hr className="my-2" />
            <p className="text-gray-700 text-sm lg:text-base">{scholarship.overview}</p>
          </div>

          <div className="flex flex-col border-2 shadow-lg mb-7 rounded-lg p-4 lg:px-8">
            <h2 className="font-semibold text-xl lg:text-2xl text-indigo-700">
              Benefits
            </h2>
            <hr className="my-2" />
            <p className="text-gray-700 text-sm lg:text-base">{scholarship.benefits}</p>
          </div>

          <div className="flex flex-col border-2 shadow-lg mb-7 rounded-lg p-4 lg:px-8">
            <h2 className="font-semibold text-xl lg:text-2xl text-indigo-700">
              Renewal Policy
            </h2>
            <hr className="my-2" />
            <p className="text-gray-700 text-sm lg:text-base">{scholarship.renewalPolicy}</p>
          </div>

          <div className="flex flex-col border-2 shadow-lg mb-7 rounded-lg p-4 lg:px-8">
            <h2 className="font-semibold text-xl lg:text-2xl text-indigo-700">
              Eligibility
            </h2>
            <hr className="my-2" />
            <p className="text-gray-700 text-sm lg:text-base">{scholarship.eligibility}</p>
          </div>

          <div className="flex flex-col border-2 shadow-lg mb-7 rounded-lg p-4 lg:px-8">
            <h2 className="font-semibold text-xl lg:text-2xl text-indigo-700">
              Documents Required
            </h2>
            <hr className="my-2" />
            <p className="text-gray-700 text-sm lg:text-base">
              {scholarship.documentsRequired}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scholarship_Screen;
