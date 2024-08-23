const { v4: uuidv4 } = require('uuid');
const db = require('./firebase');

// Create a new scholarship
export const createScholarship = async (scholarship) => {
  try {
    const newScholarship = {
      id: uuidv4(), // Generate a unique ID
      ...scholarship,
      createdAt: new Date(),
    };
    
    await db.collection('scholarships').doc(newScholarship.id).set(newScholarship);
    console.log('Scholarship created successfully');
  } catch (error) {
    console.error('Error creating scholarship:', error);
  }
};

// Get all scholarships, ordered by creation date (latest first)
export const getAllScholarships = async () => {
  try {
    const snapshot = await db.collection('scholarships').orderBy('createdAt', 'desc').get();
    const scholarships = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return scholarships;
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    return [];
  }
};

// Get a single scholarship by ID
export const getScholarshipById = async (id) => {
  try {
    const doc = await db.collection('scholarships').doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching scholarship:', error);
    return null;
  }
};

// Update a scholarship by ID
export const updateScholarship = async (id, updatedData) => {
  try {
    await db.collection('scholarships').doc(id).update(updatedData);
    console.log('Scholarship updated successfully');
  } catch (error) {
    console.error('Error updating scholarship:', error);
  }
};

// Delete a scholarship by ID
export const deleteScholarship = async (id) => {
  try {
    await db.collection('scholarships').doc(id).delete();
    console.log('Scholarship deleted successfully');
  } catch (error) {
    console.error('Error deleting scholarship:', error);
  }
};
