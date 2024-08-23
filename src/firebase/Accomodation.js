const { v4: uuidv4 } = require('uuid');
const db = require('./firebase');

// Create a new accommodation
export const createAccommodation = async (accommodation) => {
  try {
    const newAccommodation = {
      id: uuidv4(), // Generate a unique ID
      ...accommodation,
      createdAt: new Date(),
    };
    
    await db.collection('accommodations').doc(newAccommodation.id).set(newAccommodation);
    console.log('Accommodation created successfully');
  } catch (error) {
    console.error('Error creating accommodation:', error);
  }
};

// Get all accommodations, ordered by creation date (latest first)
export const getAllAccommodations = async () => {
  try {
    const snapshot = await db.collection('accommodations').orderBy('createdAt', 'desc').get();
    const accommodations = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return accommodations;
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    return [];
  }
};

// Get a single accommodation by ID
export const getAccommodationById = async (id) => {
  try {
    const doc = await db.collection('accommodations').doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching accommodation:', error);
    return null;
  }
};

// Update an accommodation by ID
export const updateAccommodation = async (id, updatedData) => {
  try {
    await db.collection('accommodations').doc(id).update(updatedData);
    console.log('Accommodation updated successfully');
  } catch (error) {
    console.error('Error updating accommodation:', error);
  }
};

// Delete an accommodation by ID
export const deleteAccommodation = async (id) => {
  try {
    await db.collection('accommodations').doc(id).delete();
    console.log('Accommodation deleted successfully');
  } catch (error) {
    console.error('Error deleting accommodation:', error);
  }
};
