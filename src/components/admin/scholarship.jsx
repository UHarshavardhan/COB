import React, { useState } from "react";

const Scholarships = ( { onSelect }) => {
  const [scholarships, setScholarships] = useState([
    { id: 1, name: "Aubrey", deadline: "2024-03-12", amount: "XXXX", categories: "Open", gender: "Male", religion: "Any", course: "Any" },
    { id: 2, name: "Jane", deadline: "2024-03-12", amount: "XXXX", categories: "Open", gender: "Male", religion: "Any", course: "Any" },
    // Add more scholarships if needed
  ]);
  
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentScholarship, setCurrentScholarship] = useState(null);

  const handleAdd = (scholarship) => {
    setScholarships([...scholarships, { id: scholarships.length + 1, ...scholarship }]);
    setIsAddOpen(false);
  };

  const handleEdit = (scholarship) => {
    setScholarships(scholarships.map(s => (s.id === scholarship.id ? scholarship : s)));
    setIsEditOpen(false);
  };

  const handleDelete = (id) => {
    setScholarships(scholarships.filter(s => s.id !== id));
  };

  const openEditModal = (scholarship) => {
    setCurrentScholarship(scholarship);
    setIsEditOpen(true);
  };

  const handleSelect = (section) => {
    onSelect(section);

    };

  const renderScholarships = () => {
    return scholarships.slice(0, 10).map((scholarship, index) => (
      <tr className="border-b hover:bg-gray-50" onClick={() =>{handleSelect('ScholarshipEnquiry')}} key={scholarship.id}>
        <td className="p-4">{index + 1}</td>
        <td className="p-4">{scholarship.name}</td>
        <td className="p-4">{scholarship.deadline}</td>
        <td className="p-4">{scholarship.amount}</td>
        <td className="p-4">{scholarship.categories}</td>
        <td className="p-4">{scholarship.gender}</td>
        <td className="p-4 flex space-x-2">
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
            <th className="p-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderScholarships()}
        </tbody>
      </table>

      {/* Pagination (example for 10 items per page) */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">01 page of 21</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">&lt;</button>
          <button className="px-3 py-1 rounded-lg bg-blue-500 text-white">01</button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">02</button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">03</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">21</button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">&gt;</button>
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

// Scholarship Form Component
const ScholarshipForm = ({ scholarship, onSubmit }) => {
  const [formState, setFormState] = useState(
    scholarship || {
      name: "",
      deadline: "",
      amount: "",
      categories: "",
      gender: "",
      religion: "",
      course: "",
    }
  );

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formState.deadline}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Amount</label>
        <input
          type="text"
          name="amount"
          value={formState.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Categories</label>
        <select
          name="categories"
          value={formState.categories}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        >
          <option value="">Select...</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Gender</label>
        <select
          name="gender"
          value={formState.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        >
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Religion</label>
        <select
          name="religion"
          value={formState.religion}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        >
          <option value="">Select...</option>
          <option value="Any">Any</option>
          <option value="Christianity">Christianity</option>
          <option value="Islam">Islam</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Course</label>
        <input
          type="text"
          name="course"
          value={formState.course}
          onChange={handleChange}
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
