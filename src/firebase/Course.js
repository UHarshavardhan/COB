const { v4: uuidv4 } = require('uuid');
const db = require('./firebase');

// Define the collection name
const collectionName = 'courses';

// Function to create a new course document with a UUID as the ID
const createCourse = async (courseData) => {
  try {
    // Generate a UUID for the new course
    const courseId = uuidv4();
    const courseWithId = { ...courseData, id: courseId };

    // Add the course document with the generated UUID
    const docRef = db.collection(collectionName).doc(courseId);
    await docRef.set(courseWithId);
    console.log('Course created successfully with ID:', courseId);
    
    return courseId; // Return the generated ID for reference
  } catch (error) {
    console.error('Error creating course:', error);
  }
};

// Function to read a course document
const readCourse = async (courseId) => {
  try {
    const docRef = db.collection(collectionName).doc(courseId);
    const doc = await docRef.get();
    if (doc.exists) {
      console.log('Course data:', doc.data());
    } else {
      console.log('No such course!');
    }
  } catch (error) {
    console.error('Error reading course:', error);
  }
};

// Function to update a course document
const updateCourse = async (courseId, updates) => {
  try {
    const docRef = db.collection(collectionName).doc(courseId);
    await docRef.update(updates);
    console.log('Course updated successfully');
  } catch (error) {
    console.error('Error updating course:', error);
  }
};

// Function to delete a course document
const deleteCourse = async (courseId) => {
  try {
    const docRef = db.collection(collectionName).doc(courseId);
    await docRef.delete();
    console.log('Course deleted successfully');
  } catch (error) {
    console.error('Error deleting course:', error);
  }
};

//get all courses
const getAllCourses = async () => {
  try {
    const snapshot = await db.collection(collectionName).get();
    const courses = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return courses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

const exampleUsage = async () => {
    console.log('exampleUsage called'); // Debugging line
    const courseData = {
      name: 'Introduction to Programming',
      description: 'A beginner course in programming.',
      duration: '3 months',
      prerequisites: ['Basic Math'],
      instructor: 'Dr. Smith',
      rating: 4.7,
      enrollmentLink: 'http://example.com/enroll',
      syllabus: ['Variables', 'Control Structures', 'Functions']
    };
  
    try {
      const courseId = await createCourse(courseData);
      console.log('Created Course ID:', courseId);
      await readCourse(courseId);
      await updateCourse(courseId, { rating: 4.8 });
    //   await deleteCourse(courseId);
    } catch (error) {
      console.error('Error in exampleUsage:', error);
    }
  };
  
  module.exports = {
    createCourse,
    readCourse,
    updateCourse,
    deleteCourse,
    exampleUsage,
    getAllCourses
  };