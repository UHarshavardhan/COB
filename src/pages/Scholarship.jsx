import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader';


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




const dummyScholarships = [
  {
    id: 1,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Graduation'],
    gender: ['Male', 'Female'],
    religion: ['Hindu'],
    courses: ['Engineering'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  {
    id: 2,
    name: 'Tata Capital Pankh Scholarship Program',
    deadline: 'July 16, 2024',
    amount: 'INR 10,000 to INR 12,000',
    categories: ['Post Graduation'],
    gender: ['Female'],
    religion: ['Christian'],
    courses: ['Medical'],
  },
  // Add more dummy data with variations in categories, gender, religion, and courses
];

const filtersData = {
  categories: ['Graduation', 'Post Graduation', 'Post Graduation Diploma'],
  gender: ['Male', 'Female', 'Transgender'],
  religion: ['Buddhism', 'Christian', 'Hindu', 'Jain', 'Sikh', 'Parsi', 'Muslim'],
  courses: ['Engineering', 'Medical', 'Management', 'Fellowship', 'Sports'],
};

const itemsPerPage = 10;

const ScholarshipList = () => {
  const [filters, setFilters] = useState({
    categories: [],
    gender: [],
    religion: [],
    courses: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter((item) => item !== value);
      } else {
        newFilters[filterType].push(value);
      }
      return newFilters;
    });
  };

  const filteredScholarships = dummyScholarships.filter((scholarship) => {
    const { categories, gender, religion, courses } = filters;
    return (
      (categories.length === 0 || categories.some((cat) => scholarship.categories.includes(cat))) &&
      (gender.length === 0 || gender.some((gen) => scholarship.gender.includes(gen))) &&
      (religion.length === 0 || religion.some((rel) => scholarship.religion.includes(rel))) &&
      (courses.length === 0 || courses.some((course) => scholarship.courses.includes(course)))
    );
  });

  const totalPages = Math.ceil(filteredScholarships.length / itemsPerPage);
  const paginatedScholarships = filteredScholarships.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex space-x-6 mb-6">
        <div className="w-1/4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          {Object.keys(filtersData).map((filterType) => (
            <div key={filterType} className="mb-4">
              <h3 className="font-medium">{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</h3>
              <div>
                {filtersData[filterType].map((item) => (
                  <label key={item} className="block">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={filters[filterType].includes(item)}
                      onChange={() => handleFilterChange(filterType, item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setCurrentPage(1)}
          >
            Apply
          </button>
        </div>
        <div className="w-3/4 bg-white p-4 rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2">Sr no.</th>
                <th className="text-left py-2">Scholarship</th>
                <th className="text-left py-2">Deadline</th>
                <th className="text-left py-2">Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedScholarships.map((scholarship, index) => (
                <tr key={scholarship.id} className="border-b">
                  <td className="py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="py-2">{scholarship.name}</td>
                  <td className="py-2">{scholarship.deadline}</td>
                  <td className="py-2">{scholarship.amount}</td>
                  <td className="py-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply now</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      </div>
    </div>
  );
};







export default ScholarshipScreen;
