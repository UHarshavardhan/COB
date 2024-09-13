import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router for routing
import { getScholarshipById } from './../firebase/Scholarships'; // Adjust the import based on your actual service
import Navigation from '../components/Navigation.jsx';
import ScholarshipHeader from '../components/ScholarshipHeader.jsx';
import ScholarshipForm from '../components/ScholarshipForm.jsx';
import { useNavigate } from 'react-router-dom';

const Scholarship_Screen = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const navigate=useNavigate();

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
  const handelsubmit=()=>{
    navigate('/scholarshipform')
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

      <button className='bg-indigo-800 ml-[500px] text-white w-[200px] h-[40px] mt-7 rounded-md'  onClick={()=>handelsubmit()}>
        Apply Now 
      </button>
      </div>
    </div>
  
    <div className="flex flex-col items-center px-10 p-6  min-h-screen">

     
    <div className=" w-[100%] h-[500px] mb-10 bg-gray-200 object-contain rounded-lg mb-6 overflow-hidden">
  <div className="h-full w-full">
    <img
      src={scholarship.link}
      alt="scholarship"
      className="h-full w-full object-cover"
    />
  </div>
</div>

     
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        


        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg px-8">
           <h2 className="font-semibold mt-5 ml-3 font-pop text-[34px] text-indigo-700">About Scholarship</h2>
          <hr className='flex border-1 '/>
          <p className="text-gray-700 text-sm">
            {scholarship.about}
          </p>
        </div>

        
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg px-8">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Overview</h2>
          <hr className='flex border-1 '/>
          <p className="text-gray-700 text-sm">
            {scholarship.overview}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg px-8">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Benefits</h2>
          <hr className='flex border-1 '/>
          <p className="text-gray-700 text-sm">
            {scholarship.benefits}
          </p>
        </div>

        {/* Renewal Policy Section */}
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg px-8">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Renewal Policy</h2>
          <hr className='flex border-1 '/>
          <p className="text-gray-700 text-sm">
            {scholarship.renewalPolicy}
          </p>
        </div>

        {/* Eligibility Section */}
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg px-8">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Eligibility</h2>
          <hr className='flex border-1 '/>
          <p className="text-gray-700 text-sm">
            {scholarship.eligibility}
          </p>
        </div>

        {/* Documents Required Section */}
        <div className="flex flex-col border-2 shadow-lg  mb-7 rounded-lg px-8">
          <h2 className="font-semibold my-5 ml-3 font-pop text-[34px] text-indigo-700">Documents Required</h2>
          <hr className='flex border-1 '/>
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
