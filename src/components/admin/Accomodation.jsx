import React, { useState, useEffect } from "react";
import Select from 'react-select';
import {
  createAccommodation,
  getAllAccommodations,
  updateAccommodation,
  deleteAccommodation
} from './../../firebase/Accomodation'; // Adjust the import path as needed
import { getAllColleges } from './../../firebase/College'; // Adjust the import path as needed


const itemsPerPage = 7;

const AccommodationAdmin = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentAccommodation, setCurrentAccommodation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchAccommodations = async () => {
      const data = await getAllAccommodations();
      setAccommodations(data);
    };
    fetchAccommodations();
  }, []);

  const handleAdd = async (accommodation) => {
    await createAccommodation(accommodation);
    const data = await getAllAccommodations(); // Refresh the list
    setAccommodations(data);
    setIsAddOpen(false);
  };

  const handleEdit = async (accommodation) => {
    await updateAccommodation(accommodation.id, accommodation);
    const data = await getAllAccommodations(); // Refresh the list
    setAccommodations(data);
    setIsEditOpen(false);
  };

  const handleDelete = async (id) => {
    await deleteAccommodation(id);
    const data = await getAllAccommodations(); // Refresh the list
    setAccommodations(data);
  };

  const openEditModal = (accommodation) => {
    setCurrentAccommodation(accommodation);
    setIsEditOpen(true);
  };

  // Calculate total pages
  const totalPages = Math.ceil(accommodations.length / itemsPerPage);

  // Render accommodations for the current page
  const renderAccommodations = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentAccommodations = accommodations.slice(startIndex, endIndex);

    return currentAccommodations.map((accommodation, index) => (
      <tr className="border-b hover:bg-gray-50" key={accommodation.id}>
        <td className="p-4">{startIndex + index + 1}</td>
        <td className="p-4">{accommodation.name}</td>
        <td className="p-4">{accommodation.place}</td>
        <td className="p-4">{accommodation.location}</td>
        <td className="p-4">{accommodation.price}</td>
        <td className="p-4">{accommodation.propertyType}</td>
        <td className="p-4">
          {Array.isArray(accommodation.amenities) ? accommodation.amenities.join(', ') : accommodation.amenities}
        </td>
        <td className="p-4">{accommodation.contact_number}</td>
        <td className="p-4">
          {Array.isArray(accommodation.nearby_colleges) ? accommodation.nearby_colleges.join(', ') : accommodation.nearby_colleges}
        </td>
        <td className="p-4 flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={() => openEditModal(accommodation)}>
            <i className="fas fa-edit"></i>
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={() => handleDelete(accommodation.id)}>
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
        <h1 className="text-2xl font-semibold">Accommodations</h1>
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
            <th className="p-4 border-b">Place</th>
            <th className="p-4 border-b">Location</th>
            <th className="p-4 border-b">Price</th>
            <th className="p-4 border-b">Property Type</th>
            <th className="p-4 border-b">Amenities</th>
            <th className="p-4 border-b">Contact Number</th>
            <th className="p-4 border-b">Nearby Colleges</th>
            <th className="p-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderAccommodations()}
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
        <Popup title="Add Accommodation" onClose={() => setIsAddOpen(false)}>
          <AccommodationForm onSubmit={handleAdd} />
        </Popup>
      )}

      {/* Edit Popup */}
      {isEditOpen && (
        <Popup title="Edit Accommodation" onClose={() => setIsEditOpen(false)}>
          <AccommodationForm accommodation={currentAccommodation} onSubmit={handleEdit} />
        </Popup>
      )}
    </div>
  );
};

// Popup Component
const Popup = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded-lg p-6 w-[75%]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button onClick={onClose}>&times;</button>
      </div>
      {children}
    </div>
  </div>
);

// Sample options for dropdowns
const propertyTypeOptions = [
  { value: 'Apartment', label: 'Apartment' },
  { value: 'House', label: 'House' },
  { value: 'Condo', label: 'Condo' },
  // Add more property types as needed
];

const amenitiesOptions = [
  { value: 'Wi-Fi', label: 'Wi-Fi' },
  { value: 'Parking', label: 'Parking' },
  { value: 'Pool', label: 'Pool' },
  { value: 'Gym', label: 'Gym' },
  // Add more amenities as needed
];





const AccommodationForm = ({ accommodation, onSubmit }) => {
  const [formState, setFormState] = useState(
    accommodation || {
      name: "",
      place: "",
      location: "",
      price: "",
      propertyType: "",
      amenities: [],
      contact_number: "",
      nearby_colleges: [],
    }
  );

  const [collegeOptions, setCollegeOptions] = useState([]);

  useEffect(() => {
    // Fetch the list of colleges from Firestore
    const fetchColleges = async () => {
      const colleges = await getAllColleges();
      setCollegeOptions(colleges.map(college => ({ value: college.name, label: college.name })));
    };
    fetchColleges();
  }, []);

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
    <form className="grid items-center grid-cols-2" onSubmit={handleSubmit}>
      <div className="mb-4  mx-10  ">
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
      <div className="mb-1 mx-10 ">
        <label className="block text-sm font-semibold mb-1">Place</label>
        <input
          type="text"
          name="place"
          value={formState.place}
          onChange={(e) => setFormState({ ...formState, place: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-1 mx-10">
        <label className="block text-sm font-semibold mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formState.location}
          onChange={(e) => setFormState({ ...formState, location: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-1 mx-10">
        <label className="block text-sm font-semibold mb-1">Price</label>
        <input
          type="text"
          name="price"
          value={formState.price}
          onChange={(e) => setFormState({ ...formState, price: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-1 mx-10">
        <label className="block text-sm font-semibold mb-1">Property Type</label>
        <Select
          name="propertyType"
          options={propertyTypeOptions} // You need to define or import this
          value={propertyTypeOptions.find(option => option.value === formState.propertyType)}
          onChange={(option) => setFormState({ ...formState, propertyType: option ? option.value : '' })}
          className="w-full"
        />
      </div>
      <div className="mb-1  mx-10">
        <label className="block text-sm font-semibold mb-1">Amenities</label>
        <Select
          name="amenities"
          options={amenitiesOptions}
          isMulti
          value={amenitiesOptions.filter(option => formState.amenities.includes(option.value))}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="mb-10 mx-10">
        <label className="block text-sm font-semibold mb-1">Contact Number</label>
        <input
          type="text"
          name="contact_number"
          value={formState.contact_number}
          onChange={(e) => setFormState({ ...formState, contact_number: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-10 mx-10">
        <label className="block text-sm font-semibold mb-1">Nearby Colleges</label>
        <Select
          name="nearby_colleges"
          options={collegeOptions}
          isMulti
          value={collegeOptions.filter(option => formState.nearby_colleges.includes(option.value))}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <button type="submit" className="w-full mt-15 col-span-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};


export default AccommodationAdmin;
