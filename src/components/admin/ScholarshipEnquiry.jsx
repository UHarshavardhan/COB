import React, { useEffect, useState } from 'react';
import { getAllScholarshipEnquiries } from '../../firebase/ScholarshipEnquiry';
import ExportToExcel from './ExportToExcel';

const ScholarshipEnquiry = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const snapshot = await getAllScholarshipEnquiries();
        setData(snapshot);
      } catch (err) {
        setError(err);
        console.error('Error fetching scholarship enquiries:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handlers for pagination
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='bg-white shadow-md rounded mt-[4%] p-10'>
      <ExportToExcel data={data} fileName="scholarships_enquiry" />

      <div className='w-[155vh]'>
        <div className="overflow-x-auto">
          <table className="bg-white">
            <thead>
              <tr className="bg-[#f3f4f6] text-left text-gray-600 uppercase text-sm leading-normal">
   
                <th className="py-3 px-4 border-b border-gray-300">Full name</th>
                <th className="py-3 px-4 border-b border-gray-300">Date of birth</th>
                <th className="py-3 px-4 border-b border-gray-300">Email address</th>
                <th className="py-3 px-4 border-b border-gray-300">Phone number</th>
                <th className="py-3 px-4 border-b border-gray-300">Current education level</th>
                <th className="py-3 px-4 border-b border-gray-300">12th Grade percentage</th>
                <th className="py-3 px-4 border-b border-gray-300">12th Year of completion</th>
                <th className="py-3 px-4 border-b border-gray-300">10th Grade percentage</th>
                <th className="py-3 px-4 border-b border-gray-300">10th Year of completion</th>
                <th className="py-3 px-4 border-b border-gray-300">Field of study</th>
                <th className="py-3 px-4 border-b border-gray-300">Caste Category</th>
                <th className="py-3 px-4 border-b border-gray-300">Religion</th>
                <th className="py-3 px-4 border-b border-gray-300">Annual family income</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {currentItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-300">
              
                  <td className="py-3 px-4 border-b border-gray-300">{item.fullName}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.dob}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.email}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.phone}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.education}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.grade12}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.year12}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.grade10}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.year10}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.studyField}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.casteCategory}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.religion}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{item.income}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded"
            >
              Prev
            </button>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => handlePageChange(number + 1)}
                className={`px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded"
            >
              Next
            </button>
            </div>
            </div>
        {/* <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 text-sm">01 page of 3</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border-b border-gray-300 rounded">Prev</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded">01</button>
            <button className="px-3 py-1 border-b border-gray-300 rounded">02</button>
            <button className="px-3 py-1 border-b border-gray-300 rounded">03</button>
            <button className="px-3 py-1 border-b border-gray-300 rounded">Next</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ScholarshipEnquiry;
