import React, { useEffect, useState } from "react";
import star from "../../images/star-1.png";
import { createCollege, getAllColleges, updateCollege } from "../../firebase/College";
const { v4: uuidv4 } = require('uuid');


function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); // Add a loading state

  // Categories for dropdown
  const categories = ["All", "Engineering", "Management", "Commerce", "Medical", "Sciences", "Information Technology", "Arts & Humanities", "Design", "Aerospace & Aviation"];

  // Filtered colleges based on search term and selected category
  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || college.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      // Set loading to true while fetching
      setLoading(true);
      const fetchedColleges = await getAllColleges();
      setColleges(fetchedColleges);
    } catch (error) {
      console.error("Error fetching colleges: ", error);
    } finally {
      // Set loading to false once fetching is done
      setLoading(false);
    }
  }

  const handleAddCollege = async (college) => {
    if (isEditing) {
      // Edit college
      await updateCollege(college.id, college);
    } else {
      // Add new college
      college.id = uuidv4();
      await createCollege(college);
    }
    fetchColleges(); // Refresh the list of colleges
    setIsEditing(false);
    setSelectedCollege(null);
    setShowModal(false);
  };

  const handleEditCollege = (college) => {
    setSelectedCollege(college);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteCollege = async (collegeId) => {
    // Implement the delete functionality if needed
    // await deleteCollege(collegeId); // Call your API to delete
    setColleges(colleges.filter((college) => college.id !== collegeId));
  };

  return (
    <div className="container bg-white mx-auto mt-10 p-5">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading colleges...</p>
        </div>
      ) : (
        <>
          {!showModal && (
            <>
              <h1 className="text-2xl font-bold mb-5">Colleges</h1>

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

              {/* Search and Filter */}
              <div className="mb-5 flex space-x-4 items-center">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border rounded-md p-2 flex-grow"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border rounded-md p-2"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Colleges Table */}
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Rating</th>
                    <th className="px-4 py-2 border">Popularity Score</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Position</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredColleges.map((college) => (
                    <tr key={college.id} className="border-t">
                      <td className="px-4 py-2 border">{college.id}</td>
                      <td className="px-4 py-2 border">{college.name}</td>
                      <td className="px-4 py-2 border">{college.rating}</td>
                      <td className="px-4 py-2 border">{college.popularity_score}</td>
                      <td className="px-4 py-2 border">{college.category}</td>
                      <td className="px-4 py-2 border">{college.position}</td>
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
            </>
          )}

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
        </>
      )}
    </div>
  );
}

export default Colleges;


function AddCollege({ college = {}, onSave, onCancel }) {
  const [name, setName] = useState(college?.name || "");
  const [rating, setRating] = useState(college?.rating || 0);
  const [image, setImage] = useState(college?.image || "");
  const [brochure_link, setBrochureLink] = useState(college?.brochure_link || "");
  const [video_link, setVideoLink] = useState(college?.video_link || "");
  const [overview, setOverview] = useState(college?.overview || "");
  const [highlights, setHighlights] = useState(college?.highlights || [{ highlight: "", details: "" }]);
  const [courses, setCourses] = useState(college?.courses || [{ course: "", details: "" }]);
  const [admission, setAdmission] = useState(college?.admission || "");
  const [placement, setPlacement] = useState(college?.placement || "");
  const [infrastructure, setInfrastructure] = useState(college?.infrastructure || "");
  const [popularity_score, setPopularityScore] = useState(college?.popularity_score || 0);
  const [category, setCategory] = useState(college?.category || "");
  //Course Fees and Placement
  const [courseFees, setCourseFees] = useState(college?.courseFees || "");
  const [coursePlacement, setCoursePlacement] = useState(college?.coursePlacement || "");

  const categories = ["Engineering", "Management", "Commerce", "Medical","Sciences","Information Technology","Arts & Humanities","Design","Aerospace & Aviation"];

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newCollege = {
      id: college?.id || Date.now(), // Use a timestamp as a fallback ID
      name,
      rating,
      image,
      brochure_link,
      video_link,
      overview,
      highlights,
      courses,
      admission,
      placement,
      infrastructure,
      popularity_score,
      category,
      courseFees,
      coursePlacement
    };
    onSave(newCollege);
    // Reset form fields after save
    setName("");
    setRating(0);
    setImage("");
    setBrochureLink("");
    setVideoLink("");
    setOverview("");
    setHighlights([{ highlight: "", details: "" }]);
    setCourses([{ course: "", details: "" }]);
    setAdmission("");
    setPlacement("");
    setInfrastructure("");
    setPopularityScore(0);
    setCategory("");
    setCourseFees("");
    setCoursePlacement("");
  };

  return (
    <form onSubmit={handleSave} className="p-5">
      <div className="flex flex-col space-y-5">

        {/* College Name and Rating */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">College Name</label>
          <input
            type="text"
            placeholder="Enter college name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="font-semibold">Rating</label>
          {[1, 2, 3, 4, 5].map((starValue) => (
            <img
              key={starValue}
              src={star}
              className={`w-6 h-6 cursor-pointer ${
                starValue <= rating ? "opacity-100" : "opacity-50"
              }`}
              alt={`star-${starValue}`}
              onClick={() => setRating(starValue)}
            />
          ))}
        </div>

        {/* Image Upload */}
        {/* <div className="flex flex-col space-y-2">
          <label className="font-semibold">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setImage)}
            className="border rounded-md p-2"
          />
        </div> */}
         <div className="flex flex-col space-y-2">
          <label className="font-semibold">Image Link</label>
          <input
            type="text"
            placeholder="Enter Image link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        {/* Brochure Link */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Brochure Link</label>
          <input
            type="text"
            placeholder="Enter brochure link"
            value={brochure_link}
            onChange={(e) => setBrochureLink(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        {/* Video Link */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Video Link</label>
          <input
            type="text"
            placeholder="Enter video link"
            value={video_link}
            onChange={(e) => setVideoLink(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        {/* Overview */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Overview</label>
          <textarea
            placeholder="Enter overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Highlights */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Highlights</label>
          {highlights.map((highlight, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Highlight"
                value={highlight.highlight}
                onChange={(e) =>
                  setHighlights(
                    highlights.map((h, idx) =>
                      idx === index ? { ...h, highlight: e.target.value } : h
                    )
                  )
                }
                className="border rounded-md p-2 flex-grow"
              />
              <input
                type="text"
                placeholder="Details"
                value={highlight.details}
                onChange={(e) =>
                  setHighlights(
                    highlights.map((h, idx) =>
                      idx === index ? { ...h, details: e.target.value } : h
                    )
                  )
                }
                className="border rounded-md p-2 flex-grow"
              />
              <button
                type="button"
                onClick={() =>
                  setHighlights(highlights.filter((_, idx) => idx !== index))
                }
                className="bg-red-500 text-white rounded-md px-2 py-1"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setHighlights([...highlights, { highlight: "", details: "" }])
            }
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >
            Add Highlight
          </button>
        </div>

        {/* Courses */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Courses</label>
          {courses.map((course, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Course"
                value={course.course}
                onChange={(e) =>
                  setCourses(
                    courses.map((c, idx) =>
                      idx === index ? { ...c, course: e.target.value } : c
                    )
                  )
                }
                className="border rounded-md p-2 flex-grow"
              />
              <input
                type="text"
                placeholder="Details"
                value={course.details}
                onChange={(e) =>
                  setCourses(
                    courses.map((c, idx) =>
                      idx === index ? { ...c, details: e.target.value } : c
                    )
                  )
                }
                className="border rounded-md p-2 flex-grow"
              />
              <button
                type="button"
                onClick={() =>
                  setCourses(courses.filter((_, idx) => idx !== index))
                }
                className="bg-red-500 text-white rounded-md px-2 py-1"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setCourses([...courses, { course: "", details: "" }])
            }
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >
            Add Course
          </button>
        </div>

        {/* Admission */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Admission</label>
          <textarea
            placeholder="Enter admission details"
            value={admission}
            onChange={(e) => setAdmission(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Placement */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Placement</label>
          <textarea
            placeholder="Enter placement details"
            value={placement}
            onChange={(e) => setPlacement(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Infrastructure */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Infrastructure</label>
          <textarea
            placeholder="Enter infrastructure details"
            value={infrastructure}
            onChange={(e) => setInfrastructure(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Popularity Score */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Popularity Score</label>
          <input
            type="number"
            placeholder="Enter popularity score"
            value={popularity_score}
            onChange={(e) => setPopularityScore(Number(e.target.value))}
            className="border rounded-md p-2"
          />
        </div>



        {/* Category */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Category</label>
          {/* <input
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-md p-2"
          /> */}

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border rounded-md p-2"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
        </div>
        
        {/* Course Fees */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Course Fees</label>
          <input
            type="text"
            placeholder="Enter course fees"
            value={courseFees}
            onChange={(e) => setCourseFees(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        {/* Course Placement */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Course Placement</label>
          <input
            type="text"
            placeholder="Enter course placement"
            value={coursePlacement}
            onChange={(e) => setCoursePlacement(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

