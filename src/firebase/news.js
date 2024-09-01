// newservice.js

const { v4: uuidv4 } = require('uuid');
const db = require('./firebase');

// Create a new news post
const createnewsPost = async (newsPost) => {
  try {
    const newnewsPost = {
      id: uuidv4(), // Generate a unique ID
      ...newsPost,
      createdAt: new Date(),
    };

    await db.collection('news').doc(newnewsPost.id).set(newnewsPost);
    console.log('news post created successfully');
  } catch (error) {
    console.error('Error creating news post:', error);
  }
};

// Get all news posts, ordered by creation date (latest first)
const getAllnewsPosts = async () => {
  try {
    const snapshot = await db.collection('news').orderBy('createdAt', 'desc').get();
    const newsPosts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return newsPosts;
  } catch (error) {
    console.error('Error fetching news posts:', error);
    return [];
  }
};

// Get a single news post by ID
const getnewsPostById = async (id) => {
  try {
    const doc = await db.collection('news').doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching news post:', error);
    return null;
  }
};

// Update a news post by ID
const updatenewsPost = async (id, updatedData) => {
  try {
    await db.collection('news').doc(id).update(updatedData);
    console.log('news post updated successfully');
  } catch (error) {
    console.error('Error updating news post:', error);
  }
};

// Delete a news post by ID
const deletenewsPost = async (id) => {
  try {
    await db.collection('news').doc(id).delete();
    console.log('news post deleted successfully');
  } catch (error) {
    console.error('Error deleting news post:', error);
  }
};

module.exports = {
  createnewsPost,
  getAllnewsPosts,
  getnewsPostById,
  updatenewsPost,
  deletenewsPost,
};
