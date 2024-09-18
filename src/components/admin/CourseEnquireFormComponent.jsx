import React, { useState, useEffect } from 'react';
import { getAllEnquiries } from '../../firebase/course_Enquireform'; // Adjust import path as needed
import ExportToExcel from './ExportToExcel';

const CourseEnquireFormComponent = () => {
  const [responses, setResponses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchResponses = async () => {
      let data = await getAllEnquiries();
      setResponses(data);
    };

    fetchResponses();
  }, []);

  const filteredResponses = responses.filter((response) =>
    Object.values(response).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const itemsPerPage = 7;
  const totalPages = Math.ceil(filteredResponses.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedResponses = filteredResponses.slice(startIdx, endIdx);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className="p-4 mt-[4%] bg-white shadow-md rounded-lg">
            <ExportToExcel data={responses} fileName="carrier_enquiry" />

      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">User Enquiries</h1>
          <p className="text-gray-500">View the user enquiries here 👋</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-full"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 material-icons">
            search
          </span>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 border-b">#</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
            {/* <th className="py-2 px-4 bg-gray-100 border-b">College</th> */}
            {/* <th className="py-2 px-4 bg-gray-100 border-b">Type</th> */}
            <th className="py-2 px-4 bg-gray-100 border-b">Email</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Phone Number</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Course</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Message</th>
  
          </tr>
        </thead>
        <tbody>
          {paginatedResponses.map((response, index) => (
            <tr key={response.id}>
              <td className="py-2 px-4 border-b">{startIdx + index + 1}</td>
              <td className="py-2 px-4 border-b">{response.name}</td>
               {/* <td className="py-2 px-4 border-b">{response.collegeName}</td> */}
            {/*  <td className="py-2 px-4 border-b">{response.type}</td> */}
              <td className="py-2 px-4 border-b">{response.email}</td>
              <td className="py-2 px-4 border-b">{response.phone}</td>
              <td className="py-2 px-4 border-b">{response.course}</td>
              <td className="py-2 px-4 border-b">{response.message}</td>
              {/* <td className="py-2 px-4 border-b">{response.currentCity}</td>
              <td className="py-2 px-4 border-b">{response.bestContactTime}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500">
          {`Page ${currentPage} of ${totalPages}`}
        </span>
        <div className="flex space-x-2">
          <button
            className="px-2 py-1 border rounded"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ❮
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-2 py-1 border rounded ${page === currentPage ? 'bg-orange-500 text-white' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-2 py-1 border rounded"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseEnquireFormComponent;
