import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getAllScholarships } from './../firebase/Scholarships';
import ScholarshipHeader from '../components/ScholarshipHeader';
import ScholarshipForm from '../components/ScholarshipForm';
const itemsPerPage = 10;

const filtersData = {
  categories: ['Graduation', 'Post Graduation', 'Post Graduation Diploma'],
  gender: ['Male', 'Female', 'Transgender'],
  religion: ['Buddhism', 'Christian', 'Hindu', 'Jain', 'Sikh', 'Parsi', 'Muslim', 'Any'],
  course: ['Engineering', 'Medical', 'Management', 'Fellowship', 'Sports'],
};

const FilterUI = ({ filters, handleFilterChange, resetFilters }) => {
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleCollapse = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button className="text-blue-500" onClick={resetFilters}>
          Reset all
        </button>
      </div>
      {Object.keys(filtersData).map((filterType) => (
        <div key={filterType} className="mb-4 lg:mx-[10%] border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCollapse(filterType)}
          >
            <h3 className="font-medium">
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </h3>
            <span>{collapsedSections[filterType] ? '-' : '+'}</span>
          </div>
          {!collapsedSections[filterType] && (
            <div className="mt-2">
              <div className="flex flex-wrap justify-between">
                {filtersData[filterType].map((item) => (
                  <label key={item} className="flex justify-between items-center mb-2 w-full">
                    {item}
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={filters[filterType].includes(item)}
                      onChange={() => handleFilterChange(filterType, item)}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Apply
      </button>
    </div>
  );
};

const ScholarshipList = () => {
  const [filters, setFilters] = useState({
    categories: [],
    gender: [],
    religion: [],
    course: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getAllScholarships();
        console.log(querySnapshot);
        setScholarships(querySnapshot);
      } catch (error) {
        console.error('Error fetching scholarships: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];

      return {
        ...prevFilters,
        [filterType]: updatedFilter,
      };
    });
    setCurrentPage(1); // Reset to first page when filters change
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      gender: [],
      religion: [],
      course: [],
    });
    setCurrentPage(1);
  };

  const filteredScholarships = scholarships.filter((scholarship) => {
    const { categories, gender, religion, course } = filters;
    return (
      (categories.length === 0 || categories.some((cat) => scholarship.categories.includes(cat))) &&
      (gender.length === 0 || gender.some((gen) => scholarship.gender.includes(gen))) &&
      (religion.length === 0 || religion.some((rel) => scholarship.religion.includes(rel))) &&
      (course.length === 0 || course.some((course) => scholarship.course.includes(course)))
    );
  });

  const totalPages = Math.ceil(filteredScholarships.length / itemsPerPage);
  const paginatedScholarships = filteredScholarships.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleView = (id) => {
    navigate(`/scholarship/${id}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 mb-6">
        <div className="w-full sm:w-1/4">
          <FilterUI
            filters={filters}
            handleFilterChange={handleFilterChange}
            resetFilters={resetFilters}
          />
        </div>
        <div className="w-full sm:w-3/4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
            <div className='flex flex-col'>
                       
              {/* <table className="w-full mt-3">
                <thead>
                  <div  className="my-2 bg-white justify-between rounded-md shadow-[6px_6px_12px_6px_rgba(0,0,0,0)] border shadow-gray-100 cursor-pointer h-[55px] ">
                  <tr >
                    <th className="text-left py-2 ">Sr no.</th>
                    <th className="text-left py-2">Scholarship</th>
                    <th className="text-left py-2">Deadline</th>
                    <th className="text-left py-2">Amount</th>
                    <th></th>
                  </tr>
                  </div>
                </thead>
                <tbody>
                  {paginatedScholarships.map((scholarship, index) => (
                    <div  className="my-2 bg-white justify-between  rounded-md shadow-[6px_6px_12px_6px_rgba(0,0,0,0)] border shadow-gray-100 cursor-pointer h-[55px] ">
                    <tr key={scholarship.id}>
                      <td className="py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td className="py-2">{scholarship.name}</td>
                      <td className="py-2">{scholarship.deadline}</td>
                      <td className="py-2">{scholarship.amount}</td>
                      <td className="py-2 flex space-x-2 ml-10">
                        <button
                          onClick={() => handleView(scholarship.id)}
                          className="bg-[#2E3192] text-white px-4 py-2 rounded"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    </div>
                  ))}
                </tbody>
              </table> */}

          <div className="w-full  font-semibold ">
                {/* Table Header */}
                <div className="flex mb-2 bg-white font-bold  px-5 rounded  justify-between border shadow-md  border-gray-200 p-2 font-semibold">
                  <div className="flex-1 lg:block hidden text-left w-[10%]">Sr no.</div>
                  <div className="flex-2 text-left  w-[40%]">Scholarship</div>
                  <div className="flex-1 lg:block hidden text-left  w-[20%]">Deadline</div>
                  <div className="flex-1 lg:block hidden text-left  w-[20%]">Amount</div>
                  <div className="flex-1"></div>
                </div>

                {/* Table Rows */}
                {paginatedScholarships.map((scholarship, index) => (
                  <div
                    key={scholarship.id}
                    className="flex items-center px-5 my-2 rounded shadow-md  bg-white border border-gray-200 p-2"
                  >
                    <div className="flex-1 lg:block hidden text-left w-[10%]">{(currentPage - 1) * itemsPerPage + index + 1}</div>
                    <div className="flex-2 text-left w-[55%] lg:w-[40%]">
                      {scholarship.name}
                      <br />
                      {"scholarship program"}</div>
                    <div className="flex-1 lg:block hidden text-left w-[20%]">{scholarship.deadline}</div>
                    <div className="flex-1 lg:block hidden text-left w-[20%]">{scholarship.amount}</div>
                    <div className="flex-1 text-right">
                      <button
                        onClick={() => handleView(scholarship.id)}
                        className="bg-[#2E3192] text-white px-4 py-2 rounded"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
    </div>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <div>
                  Page {currentPage} of {totalPages}
                </div>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
              </div>
            </>
           
          )}
        </div>
      </div>
    </div>
  );
};

function ScholarshipScreen() {
  return (
    <div className="App">
      <ScholarshipHeader 
        breadcrumb="Home &gt; Find Scholarship" 
        title="Scholarships To Apply For" 
        subtitle="Here are some of the best college scholarships with approaching deadlines for high school seniors"
      />
      <ScholarshipList />
    </div>
  );
}

export default ScholarshipScreen;
