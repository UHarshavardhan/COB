const { v4: uuidv4 } = require('uuid');
const db = require('./firebase');

// Create a new accommodation enquiry
export const createAccommodationEnquiry = async (enquiry) => {
  try {
    const newEnquiry = {
      id: uuidv4(), 
      ...enquiry,
      createdAt: new Date(),
    };
    
    await db.collection('accommodationEnquiries').doc(newEnquiry.id).set(newEnquiry);
    console.log('Accommodation enquiry created successfully');
  } catch (error) {
    console.error('Error creating accommodation enquiry:', error);
  }
};

// Get all accommodation enquiries, ordered by creation date (latest first)
export const getAllAccommodationEnquiries = async () => {
  try {
    const snapshot = await db.collection('accommodationEnquiries').orderBy('createdAt', 'desc').get();
    const enquiries = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return enquiries;
  } catch (error) {
    console.error('Error fetching accommodation enquiries:', error);
    return [];
  }
};

// Get a single accommodation enquiry by ID
export const getAccommodationEnquiryById = async (id) => {
  try {
    const doc = await db.collection('accommodationEnquiries').doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching accommodation enquiry:', error);
    return null;
  }
};

// Update an accommodation enquiry by ID
export const updateAccommodationEnquiry = async (id, updatedData) => {
  try {
    await db.collection('accommodationEnquiries').doc(id).update(updatedData);
    console.log('Accommodation enquiry updated successfully');
  } catch (error) {
    console.error('Error updating accommodation enquiry:', error);
  }
};

// Delete an accommodation enquiry by ID
export const deleteAccommodationEnquiry = async (id) => {
  try {
    await db.collection('accommodationEnquiries').doc(id).delete();
    console.log('Accommodation enquiry deleted successfully');
  } catch (error) {
    console.error('Error deleting accommodation enquiry:', error);
  }
};
