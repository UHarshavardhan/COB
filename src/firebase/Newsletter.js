const { v4: uuidv4 } = require('uuid');
const db = require('./firebase');

// Define the collection name
const collectionName = 'Newsletter';

// Function to create a new Newsletter document with a UUID as the ID
const createNewsletter = async (NewsletterData) => {
    try {
      const NewsletterId = uuidv4();
      const NewsletterWithId = { 
        ...NewsletterData, 
        id: NewsletterId,
        timestamp: new Date() // Add a timestamp
      };
  
      await db.collection(collectionName).doc(NewsletterId).set(NewsletterWithId);
      console.log('Newsletter created successfully with ID:', NewsletterId);
      return NewsletterId; // Return the generated ID for reference
    } catch (error) {
      console.error('Error creating Newsletter:', error);
    }
  };
  

// Function to read an Newsletter document
const readNewsletter = async (NewsletterId) => {
  try {
    const docRef = db.collection(collectionName).doc(NewsletterId);
    const doc = await docRef.get();
    if (doc.exists) {
      console.log('Newsletter data:', doc.data());
    } else {
      console.log('No such Newsletter!');
    }
  } catch (error) {
    console.error('Error reading Newsletter:', error);
  }
};

// Function to update an Newsletter document
const updateNewsletter = async (NewsletterId, updates) => {
  try {
    const docRef = db.collection(collectionName).doc(NewsletterId);
    await docRef.update(updates);
    console.log('Newsletter updated successfully');
  } catch (error) {
    console.error('Error updating Newsletter:', error);
  }
};

// Function to delete an Newsletter document
const deleteNewsletter = async (NewsletterId) => {
  try {
    const docRef = db.collection(collectionName).doc(NewsletterId);
    await docRef.delete();
    console.log('Newsletter deleted successfully');
  } catch (error) {
    console.error('Error deleting Newsletter:', error);
  }
};

// Function to get all Newsletter documents, sorted by timestamp in descending order
const getAllNewsletter = async () => {
    try {
      const snapshot = await db.collection(collectionName)
        .orderBy('timestamp', 'desc') // Sort by timestamp in descending order
        .get();
      
      if (snapshot.empty) {
        console.log('No Newsletter found.');
        return [];
      }
  
      const Newsletter = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
  
      console.log('All Newsletter:', Newsletter);
      return Newsletter;
    } catch (error) {
      console.error('Error fetching all Newsletter:', error);
    }
  };
  

// Example usage
const exampleUsage = async () => {
  const NewsletterData = {
    type: 'Course Inquiry',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    currentSchool: 'Example High School',
    yearOfCompleting: '2025',
    currentCity: 'New York',
    bestContactTime: 'Afternoon'
  };

  const NewsletterId = await createNewsletter(NewsletterData);
  await readNewsletter(NewsletterId);
  await updateNewsletter(NewsletterId, { bestContactTime: 'Evening' });
//   await deleteNewsletter(NewsletterId);
};

module.exports = {
  createNewsletter,
  readNewsletter,
  updateNewsletter,
  deleteNewsletter,
  exampleUsage,
  getAllNewsletter
};
