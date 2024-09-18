import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Ensure uuid is installed and imported
import AddCourse from './courseAdd'; 
import { getAllCourses, createCourse, updateCourse , deleteCourse} from '../../firebase/Course'; // Import the functions to interact with the API
import ExportToExcel from './ExportToExcel';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); // Add a loading state

  // Categories for dropdown
  const categories = ["All", "Engineering & technology", "Law", "Medical", "Management", "Healthcare", "Designer", "Humanities & Arts", "Aerospace & Aviation", "Marketing","Animation","Others"];

  // Filtered courses based on search term and selected category
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.carrierCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      // Set loading to true while fetching
      setLoading(true);
      const fetchedCourses = await getAllCourses();
      setCourses(fetchedCourses);
    } catch (error) {
      console.error("Error fetching courses: ", error);
    } finally {
      // Set loading to false once fetching is done
      setLoading(false);
    }
  }

  const handleAddCourse = async (course) => {
    if (isEditing) {
      // Edit course
      await updateCourse(course.id, course);
    } else {
      // Add new course
      course.id = uuidv4();
      await createCourse(course);
    }
    fetchCourses(); // Refresh the list of courses
    setIsEditing(false);
    setSelectedCourse(null);
    setShowModal(false);
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteCourse = async (courseId) => {
    // Implement the delete functionality if needed
    // await deleteCourse(courseId); // Call your API to delete
    setCourses(courses.filter((course) => course.id !== courseId));
    deleteCourse(courseId)
  };

  return (
    <div className="container mt-[4%] bg-white mx-auto mt-10 p-5">
            <ExportToExcel data={courses} fileName="courses" />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading courses...</p>
        </div>
      ) : (
        <>
          {!showModal && (
            <>
              <h1 className="text-2xl font-bold mb-5">Courses</h1>

              {/* Add Course Button */}
              <button
                className="mb-5 bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setSelectedCourse(null);
                  setIsEditing(false);
                  setShowModal(true);
                }}
              >
                Add Course
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

              {/* Courses Table */}
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Image</th>
                    <th className="px-4 py-2 border">Video</th>
                    <th className="px-4 py-2 border">Popularity Score</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCourses.map((course) => (
                    <tr key={course.id} className="border-t">
                      <td className="px-4 py-2 border">{course.id}</td>
                      <td className="px-4 py-2 border">{course.name}</td>
                      <td className="px-4 py-2 border">
                        <img src={course.image} alt={course.name} className="w-24 h-16 object-cover" />
                      </td>
                      <td className="px-4 py-2 border">
                        <a href={course.video} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                          Watch Video
                        </a>
                      </td>
                      <td className="px-4 py-2 border">{course.popularity_Score}</td>
                      <td className="px-4 py-2 border">{course.carrierCategory}</td>
                      <td className="px-4 py-2 border">
                        <button
                          className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
                          onClick={() => handleEditCourse(course)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded"
                          onClick={() => handleDeleteCourse(course.id)}
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
                {isEditing ? "Edit Course" : "Add Course"}
              </h2>
              <AddCourse
                course={selectedCourse}
                onSave={handleAddCourse}
                onCancel={() => setShowModal(false)}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Courses;
