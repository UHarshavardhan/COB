import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router for routing
import { getScholarshipById } from './../firebase/Scholarships'; // Adjust the import based on your actual service
import Navigation from '../components/Navigation.jsx';
import ScholarshipHeader from '../components/ScholarshipHeader.jsx';

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
    <>
     <div className=" flex flex-col bg-gradient-to-r h-[40vh] lg:h-[60vh] from-[#a1a2f8] to-[#bf90e7] p-4 lg:p-8">
      <Navigation />
         <div className="flex text-xs lg:text-sm text-slate-300 mt-8 justify-start">
       
      </div>
      <h1 className="flex text-4xl  lg:text-[70px] font-bold text-black mt-2 lg:mt-10 justify-start ml-4">
      Government of India <br/> <br/>

      Post-Matric Scholarship
      </h1>
      <div className='flex flex-row shrink-0'>
      <p className="flex lg:text-2xl text-gray-200 lg:mt7 justify-start mt-7 ml-3 w-[1000px]">
      Department Name : Social Justice and Special Assisstance
      </p>

      <button className='bg-indigo-800 ml-[500px] text-white w-[200px] h-[40px] mt-7 rounded-md'>
        Apply Now 
      </button>
      </div>
    </div>
  
    <div className="flex flex-col items-center px-10 p-6 bg-gray-100 min-h-screen">

     
      <div className="w-full h-64 bg-gray-200 rounded-lg mb-6">
      
        <div className="h-full w-full bg-gray-300">
          <img src={scholarship.image} alt="scholarship"/>
        </div>
      </div>

     
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        


        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg px-8">
           <h2 className="font-semibold mt-5 ml-3 font-pop text-[34px] text-indigo-700">About Scholarship</h2>
          <hr className='flex justify-center  bg-center border-1 '/>
          <p className="text-gray-700 text-sm">
            {scholarship.about}
          </p>
        </div>

        
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Overview</h2>
          <hr className='w-[20px]'/>
          <p className="text-gray-700 text-sm">
            {scholarship.overview}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Benefits</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.benefits}
          </p>
        </div>

        {/* Renewal Policy Section */}
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Renewal Policy</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.renewalPolicy}
          </p>
        </div>

        {/* Eligibility Section */}
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Eligibility</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.eligibility}
          </p>
        </div>

        {/* Documents Required Section */}
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Documents Required</h2>
          <p className="text-gray-700 text-sm">
            {scholarship.documentsRequired}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Scholarship_Screen;
