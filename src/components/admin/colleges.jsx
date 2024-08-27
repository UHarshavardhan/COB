import React, { useState } from "react";
import star from "../../images/star-1.png";

function Colleges() {
  // Sample data for colleges
  const initialColleges = [
    { id: 1, name: "Harvard University", rating: 5 },
    { id: 2, name: "Stanford University", rating: 4 },
  ];

  const [colleges, setColleges] = useState(initialColleges);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddCollege = (college) => {
    if (isEditing) {
      // Edit college
      setColleges(
        colleges.map((col) =>
          col.id === college.id ? { ...col, ...college } : col
        )
      );
    } else {
      // Add new college
      setColleges([...colleges, { ...college, id: colleges.length + 1 }]);
    }
    setIsEditing(false);
    setSelectedCollege(null);
    setShowModal(false);
  };

  const handleEditCollege = (college) => {
    setSelectedCollege(college);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteCollege = (collegeId) => {
    setColleges(colleges.filter((college) => college.id !== collegeId));
  };

  return (
    <>
      <div className="container bg-white mx-auto mt-10">
      {!showModal && ( <><h1 className="text-2xl font-bold mb-5">Colleges</h1>

        {/* Add College Button */}
        <button
          className="mb-5 bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedCollege(null);
            setIsEditing(false);
            setShowModal(true);
          }}
        >
          Add College
        </button>

        {/* Colleges Table */}
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college) => (
              <tr key={college.id} className="border-t">
                <td className="px-4 py-2 border">{college.id}</td>
                <td className="px-4 py-2 border">{college.name}</td>
                <td className="px-4 py-2 border">{college.rating}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEditCollege(college)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteCollege(college.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>)}


        {showModal && (
          
           <>
              <h2 className="text-xl font-bold mb-5">
                {isEditing ? "Edit College" : "Add College"}
              </h2>
              <AddCollege
                college={selectedCollege}
                onSave={handleAddCollege}
                onCancel={() => setShowModal(false)}
              />
            </>
        )}
      </div>
    </>
  );
}

export default Colleges;




function AddCollege({ college = {}, onSave, onCancel }) {
  const [name, setName] = useState(college?.name || "");
  const [rating, setRating] = useState(college?.rating || 0);
  const [highlights, setHighlights] = useState(
    college?.highlights || [{ highlight: "", details: "" }]
  );
  const [courses, setCourses] = useState(
    college?.courses || [{ course: "", details: "" }]
  );

  const handleSave = (e) => {
    e.preventDefault();
    const newCollege = {
      id: college?.id || Date.now(), // Use a timestamp as a fallback ID
      name,
      rating,
      highlights,
      courses,
    };
    onSave(newCollege);
    setName("");
    setRating(0);
    setHighlights([{ highlight: "", details: "" }]);
    setCourses([{ course: "", details: "" }]);
  };
  return (
    <form onSubmit={handleSave}>
      <div className="flex flex-col ml-7">

        {/* College Name and Rating */}
        <div className="flex  flex-row w-[1114px] h-[74px] items-center border-1 rounded-xl bg-white">
          <div className="flex rounded-md border-1 ml-3 riun">
            <h1 className="flex justify-end items-center">College Name</h1>
            <input
              type="text"
              placeholder="Enter your college name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="ml-2 border-black rounded-md w-[350px] h-[33px] border hover:border-black"
            />
          </div>
          <div className="flex justify-end ml-[450px]">
            <span>Rating</span>
            {[1, 2, 3, 4, 5].map((starValue) => (
              <img
                key={starValue}
                src={star}
                className={`w-[24px] h-[24px] cursor-pointer ${
                  starValue <= rating ? "opacity-100" : "opacity-50"
                }`}
                alt={`star-${starValue}`}
                onClick={() => setRating(starValue)}
              />
            ))}
          </div>
        </div>

        {/* Upload Section */}
        <div className="flex flex-row w-[1114px] h-[74px] items-center border-1 rounded-xl bg-white mt-5 justify-between px-5">
          <div className="flex items-center space-x-2">
            <span>Upload Brochure:</span>
            <input type="file" className="w-[150px] border border-black rounded-md" />
          </div>
          <div className="flex items-center space-x-2">
            <span>Upload Image:</span>
            <input type="file" className="w-[150px] border border-black rounded-md" />
          </div>
          <div className="flex items-center space-x-2">
            <span>Upload Video:</span>
            <input type="file" className="w-[150px] border border-black rounded-md" />
          </div>
        </div>

        {/* Overview Section */}
        <div className="flex flex-col w-[1114px] h-auto border-1 rounded-xl bg-white mt-5 px-5">
          <div className="Tet_upload flex flex-col shadow-lg border rounded-lg mt-3">
            <h1 className="text-[20px] mt-2 font-bold border-black border">Overview</h1>
            <h2 className="text-[15px] mt-6">Description</h2>
            <textarea
              className="w-[1074px] h-[208px] border-black border-2"
              placeholder="Enter the overview..."
            ></textarea>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-5 border-1 rounded-xl shadow-lg">
          <h1 className="text-[20px] mt-2 font-bold border-black border">Highlights</h1>
          <table className="min-w-full border border-blue-200 rounded-lg mt-4">
            <tbody>
              {highlights.map((_, index) => (
                <tr className="border-b border-blue-200" key={index}>
                  <td className="px-4 py-2 border-r border-blue-200">
                    <input
                      type="text"
                      placeholder="Highlight"
                      name="highlight"
                      value={highlights[index].highlight}
                      onChange={(e) =>
                        setHighlights(
                          highlights.map((highlight, idx) =>
                            idx === index
                              ? { ...highlight, highlight: e.target.value }
                              : highlight
                          )
                        )
                      }
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      placeholder="Details"
                      name="details"
                      value={highlights[index].details}
                      onChange={(e) =>
                        setHighlights(
                          highlights.map((highlight, idx) =>
                            idx === index
                              ? { ...highlight, details: e.target.value }
                              : highlight
                          )
                        )
                      }
                      className="w-full"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() =>
              setHighlights([...highlights, { highlight: "", details: "" }])
            }
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Highlight
          </button>
        </div>

        {/* Courses Section */}
        <div className="mt-5 border-1 rounded-xl shadow-lg">
          <h1 className="text-[20px] mt-2 font-bold border-black border">Courses</h1>
          <table className="min-w-full border border-blue-200 rounded-lg mt-4">
            <tbody>
              {courses.map((_, index) => (
                <tr className="border-b border-blue-200" key={index}>
                  <td className="px-4 py-2 border-r border-blue-200">
                    <input
                      type="text"
                      placeholder="Course"
                      name="course"
                      value={courses[index].course}
                      onChange={(e) =>
                        setCourses(
                          courses.map((course, idx) =>
                            idx === index
                              ? { ...course, course: e.target.value }
                              : course
                          )
                        )
                      }
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      placeholder="Details"
                      name="details"
                      value={courses[index].details}
                      onChange={(e) =>
                        setCourses(
                          courses.map((course, idx) =>
                            idx === index
                              ? { ...course, details: e.target.value }
                              : course
                          )
                        )
                      }
                      className="w-full"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={() =>
              setCourses([...courses, { course: "", details: "" }])
            }
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Course
          </button>
        </div>

        {/* Admission Section */}
        <div className="Tet_upload flex flex-col shadow-lg border rounded-lg mt-3">
          <h1 className="text-[20px] mt-2 font-bold border-black border">Admission</h1>
          <h2 className="text-[15px] mt-6">Description</h2>
          <textarea
            className="w-[1074px] h-[208px] border-black border-2"
            placeholder="Enter the admission details..."
          ></textarea>
        </div>

        {/* Placements Section */}
        <div className="Tet_upload flex flex-col shadow-lg border rounded-lg mt-3">
          <h1 className="text-[20px] mt-2 font-bold border-black border">Placements</h1>
          <h2 className="text-[15px] mt-6">Description</h2>
          <textarea
            className="w-[1074px] h-[208px] border-black border-2"
            placeholder="Enter the placement details..."
          ></textarea>
        </div>

        {/* Infrastructure Section */}
        <div className="Tet_upload flex flex-col shadow-lg border rounded-lg mt-3">
          <h1 className="text-[20px] mt-2 font-bold border-black border">Infrastructure</h1>
          <h2 className="text-[15px] mt-6">Description</h2>
          <textarea
            className="w-[1074px] h-[208px] border-black border-2"
            placeholder="Enter the infrastructure details..."
          ></textarea>
        </div>

        <div className="mt-5 flex space-x-3">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="mt-5 flex space-x-3">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
