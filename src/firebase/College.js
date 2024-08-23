const { v4: uuidv4 } = require('uuid');
const db = require('./firebase');

// Create a new college
export const createCollege = async (college) => {
  try {
    const newCollege = {
      id: uuidv4(), // Generate a unique ID
      ...college,
      createdAt: new Date(),
    };
    
    await db.collection('colleges').doc(newCollege.id).set(newCollege);
    console.log('College created successfully');
  } catch (error) {
    console.error('Error creating college:', error);
  }
};

// Get all colleges, ordered by creation date (latest first)
export const getAllColleges = async () => {
  try {
    const snapshot = await db.collection('colleges').get();
    const colleges = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return colleges;
  } catch (error) {
    console.error('Error fetching colleges:', error);
    return [];
  }
};

// Get a single college by ID
export const getCollegeById = async (id) => {
  try {
    const doc = await db.collection('colleges').doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching college:', error);
    return null;
  }
};

// Update a college by ID
export const updateCollege = async (id, updatedData) => {
  try {
    await db.collection('colleges').doc(id).update(updatedData);
    console.log('College updated successfully');
  } catch (error) {
    console.error('Error updating college:', error);
  }
};

// Delete a college by ID
export const deleteCollege = async (id) => {
  try {
    await db.collection('colleges').doc(id).delete();
    console.log('College deleted successfully');
  } catch (error) {
    console.error('Error deleting college:', error);
  }
};


// Function to add multiple sample colleges
export const addSampleColleges = async () => {
  const sampleColleges = [
    {
      id: uuidv4(),
      name: 'University of Example',
      image: 'https://example.com/image1.jpg',
      rating: 4.5,
      broucher_link: 'https://example.com/broucher1.pdf',
      video_link: 'https://example.com/video1.mp4',
      overview: 'A prestigious university offering a variety of programs.',
      highlights: [
        'Top 10 in National Rankings',
        'Excellent Research Facilities',
        'Diverse Student Body'
      ],
      courses: [
        'Computer Science',
        'Business Administration',
        'Mechanical Engineering'
      ],
      admission: 'Open for application from January to May.',
      placement: 'High placement rate with top companies.',
      infrastructure: 'Modern campus with state-of-the-art facilities.',
      popularity_score: 8.7
    },
    {
      id: uuidv4(),
      name: 'Example Institute of Technology',
      image: 'https://example.com/image2.jpg',
      rating: 4.8,
      broucher_link: 'https://example.com/broucher2.pdf',
      video_link: 'https://example.com/video2.mp4',
      overview: 'A leading institute in technology and innovation.',
      highlights: [
        'Innovative Technology Programs',
        'Strong Industry Connections',
        'World-class Faculty'
      ],
      courses: [
        'Artificial Intelligence',
        'Cybersecurity',
        'Data Science'
      ],
      admission: 'Admission process begins in March.',
      placement: 'Excellent placement record in tech companies.',
      infrastructure: 'Cutting-edge laboratories and research centers.',
      popularity_score: 9.2
    },
    {
      id: uuidv4(),
      name: 'Global Business School',
      image: 'https://example.com/image3.jpg',
      rating: 4.3,
      broucher_link: 'https://example.com/broucher3.pdf',
      video_link: 'https://example.com/video3.mp4',
      overview: 'A global leader in business education and leadership.',
      highlights: [
        'Accredited Business Programs',
        'Global Network of Alumni',
        'Flexible Learning Options'
      ],
      courses: [
        'MBA',
        'Marketing',
        'Finance'
      ],
      admission: 'Applications open in April for fall intake.',
      placement: 'Strong placement support with leading companies.',
      infrastructure: 'Modern campus with business simulation labs.',
      popularity_score: 7.9
    }
  ];

  try {
    const batch = db.batch();

    sampleColleges.forEach(college => {
      const collegeRef = db.collection('colleges').doc(college.id);
      batch.set(collegeRef, college);
    });

    await batch.commit();
    console.log('Sample colleges added successfully');
  } catch (error) {
    console.error('Error adding sample colleges:', error);
  }
};
