import React, { useState, useEffect } from "react";
import Select from 'react-select';
import {
  createScholarship,
  getAllScholarships,
  updateScholarship,
  deleteScholarship
} from './../../firebase/Scholarships'; // Adjust the import path as needed

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentScholarship, setCurrentScholarship] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchScholarships = async () => {
      const data = await getAllScholarships();
      setScholarships(data);
    };
    fetchScholarships();
  }, []);

  const handleAdd = async (scholarship) => {
    await createScholarship(scholarship);
    const data = await getAllScholarships(); // Refresh the list
    setScholarships(data);
    setIsAddOpen(false);
  };

  const handleEdit = async (scholarship) => {
    await updateScholarship(scholarship.id, scholarship);
    const data = await getAllScholarships(); // Refresh the list
    setScholarships(data);
    setIsEditOpen(false);
  };

  const handleDelete = async (id) => {
    await deleteScholarship(id);
    const data = await getAllScholarships(); // Refresh the list
    setScholarships(data);
  };

  const openEditModal = (scholarship) => {
    setCurrentScholarship(scholarship);
    setIsEditOpen(true);
  };


  // Calculate total pages
  const totalPages = Math.ceil(scholarships.length / itemsPerPage);

  // Render scholarships for the current page
  const renderScholarships = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentScholarships = scholarships.slice(startIndex, endIndex);

    return currentScholarships.map((scholarship, index) => (
      <tr className="border-b hover:bg-gray-50"  key={scholarship.id}>
        <td className="p-4">{startIndex + index + 1}</td>
        <td className="p-4">{scholarship.name}</td>
        <td className="p-4">{scholarship.deadline}</td>
        <td className="p-4">{scholarship.amount}</td>
        <td className="p-4">
          {Array.isArray(scholarship.categories) ? scholarship.categories.join(', ') : scholarship.categories}
        </td>
        <td className="p-4">
          {Array.isArray(scholarship.gender) ? scholarship.gender.join(', ') : scholarship.gender}
        </td>
        <td className="p-4">
          {Array.isArray(scholarship.religion) ? scholarship.religion.join(', ') : scholarship.religion}
        </td>
        <td className="p-4">
          {Array.isArray(scholarship.course) ? scholarship.course.join(', ') : scholarship.course}
        </td>
        <td className="p-4 flex space-x-2">
        {/* <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={() => { handleSelect('ScholarshipEnquiry') }}>
            <i className="fas fa-eye"></i>
          </button> */}
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={() => openEditModal(scholarship)}>
            <i className="fas fa-edit"></i>
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={() => handleDelete(scholarship.id)}>
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Scholarships</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={() => setIsAddOpen(true)}>
            + NEW
          </button>
        </div>
      </div>

      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border-b">#ID</th>
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Deadline</th>
            <th className="p-4 border-b">Amount</th>
            <th className="p-4 border-b">Categories</th>
            <th className="p-4 border-b">Gender</th>
            <th className="p-4 border-b">Religion</th>
            <th className="p-4 border-b">Course</th>
            <th className="p-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderScholarships()}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">{`Page ${currentPage} of ${totalPages}`}</p>
        <div className="flex space-x-2">
          <button 
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 rounded-lg ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button 
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Add Popup */}
      {isAddOpen && (
        <Popup title="Add Scholarship" onClose={() => setIsAddOpen(false)}>
          <ScholarshipForm onSubmit={handleAdd} />
        </Popup>
      )}

      {/* Edit Popup */}
      {isEditOpen && (
        <Popup title="Edit Scholarship" onClose={() => setIsEditOpen(false)}>
          <ScholarshipForm scholarship={currentScholarship} onSubmit={handleEdit} />
        </Popup>
      )}
    </div>
  );
};

// Popup Component
const Popup = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded-lg p-6 w-96">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button onClick={onClose}>&times;</button>
      </div>
      {children}
    </div>
  </div>
);
const categoryOptions = [
  { value: 'Graduation', label: 'Graduation' },
  { value: 'Post Graduation', label: 'Post Graduation' },
  { value: 'Post Graduation Diploma', label: 'Post Graduation Diploma' },
];

const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Transgender', label: 'Transgender' },
];

const religionOptions = [
  { value: 'Buddhism', label: 'Buddhism' },
  { value: 'Christian', label: 'Christian' },
  { value: 'Hindu', label: 'Hindu' },
  { value: 'Jain', label: 'Jain' },
  { value: 'Sikh', label: 'Sikh' },
  { value: 'Parsi', label: 'Parsi' },
  { value: 'Muslim', label: 'Muslim' },
  { value: 'Any', label: 'Any' },
];

const courseOptions = [
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Medical', label: 'Medical' },
  { value: 'Management', label: 'Management' },
  { value: 'Fellowship', label: 'Fellowship' },
  { value: 'Sports', label: 'Sports' },
];



const ScholarshipForm = ({ scholarship, onSubmit }) => {
  const [formState, setFormState] = useState(
    scholarship || {
      name: "",
      deadline: "",
      amount: "",
      categories: [],
      gender: [],
      religion: [],
      course: [],
      link: "",
    }
  );

  const handleChange = (selectedOptions, { name }) => {
    setFormState({
      ...formState,
      [name]: selectedOptions ? selectedOptions.map(option => option.value) : [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-1">
        <label className="block text-sm font-semibold mb-1">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formState.deadline}
          onChange={(e) => setFormState({ ...formState, deadline: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-1">
        <label className="block text-sm font-semibold mb-1">Amount</label>
        <input
          type="text"
          name="amount"
          value={formState.amount}
          onChange={(e) => setFormState({ ...formState, amount: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-1">
        <label className="block text-sm font-semibold mb-1">Categories</label>
        <Select
          name="categories"
          options={categoryOptions}
          isMulti
          value={categoryOptions.filter(option => formState.categories.includes(option.value))}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="mb-1">
        <label className="block text-sm font-semibold mb-1">Gender</label>
        <Select
          name="gender"
          options={genderOptions}
          isMulti
          value={genderOptions.filter(option => formState.gender.includes(option.value))}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="mb-1">
        <label className="block text-sm font-semibold mb-1">Religion</label>
        <Select
          name="religion"
          options={religionOptions}
          isMulti
          value={religionOptions.filter(option => formState.religion.includes(option.value))}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="mb-1">
        <label className="block text-sm font-semibold mb-1">Course</label>
        <Select
          name="course"
          options={courseOptions}
          isMulti
          value={courseOptions.filter(option => formState.course.includes(option.value))}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="mb-1">
      <label className="block text-sm font-semibold mb-1">Link</label>
      <input
          type="text"
          name="link"
          value={formState.link}
          onChange={(e) => setFormState({ ...formState, link: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default Scholarships;
