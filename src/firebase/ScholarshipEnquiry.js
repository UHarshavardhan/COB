const { v4: uuidv4 } = require('uuid');
const db = require('./firebase');

// Create a new scholarship enquiry
export const createScholarshipEnquiry = async (enquiry) => {
  try {
    const newEnquiry = {
      id: uuidv4(), // Generate a unique ID
      ...enquiry,
      createdAt: new Date(),
    };
    
    await db.collection('scholarship_enquiries').doc(newEnquiry.id).set(newEnquiry);
    console.log('Scholarship enquiry created successfully');
  } catch (error) {
    console.error('Error creating scholarship enquiry:', error);
  }
};

// Get all scholarship enquiries, ordered by creation date (latest first)
export const getAllScholarshipEnquiries = async () => {
  try {
    const snapshot = await db.collection('scholarship_enquiries').orderBy('createdAt', 'desc').get();
    const enquiries = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return enquiries;
  } catch (error) {
    console.error('Error fetching scholarship enquiries:', error);
    return [];
  }
};

// Get a single scholarship enquiry by ID
export const getScholarshipEnquiryById = async (id) => {
  try {
    const doc = await db.collection('scholarship_enquiries').doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching scholarship enquiry:', error);
    return null;
  }
};

// Update a scholarship enquiry by ID
export const updateScholarshipEnquiry = async (id, updatedData) => {
  try {
    await db.collection('scholarship_enquiries').doc(id).update(updatedData);
    console.log('Scholarship enquiry updated successfully');
  } catch (error) {
    console.error('Error updating scholarship enquiry:', error);
  }
};

// Delete a scholarship enquiry by ID
export const deleteScholarshipEnquiry = async (id) => {
  try {
    await db.collection('scholarship_enquiries').doc(id).delete();
    console.log('Scholarship enquiry deleted successfully');
  } catch (error) {
    console.error('Error deleting scholarship enquiry:', error);
  }
};
