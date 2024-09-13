import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScholarshipHeader from '../components/ScholarshipHeader';
import { createEnquiry } from '../firebase/course_Enquireform'; // Import createEnquiry function
import YouTube from 'react-youtube'; // Import YouTube component

import { readCourse } from '../firebase/Course'; // Import your readCourse function

const Coursedetails = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null); // State for course details
  const [activeTab, setActiveTab] = useState('about');
  const [moreOption, setMoreOption] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [mediaType, setMediaType] = useState('images'); // Add state to toggle between images and videos
  const [mediaIndex, setMediaIndex] = useState(0); // Track the current media index
  const [enquiry, setEnquiry] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });


  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseData = await readCourse(id); // Fetch course details
        setCourse(courseData);
        console.log(courseData)
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);
  const handleChange = (e) => {
    setEnquiry({
      ...enquiry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const enquiryData = {
        ...enquiry,
      };
      await createEnquiry(enquiryData);
      alert('Enquiry submitted successfully!');
      setEnquiry({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry');
    }
  };
  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!course) return <p>No course found</p>;

    switch (activeTab) {
      case 'about':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-700">{course.description || 'No description available.'}</p>
          </div>
        );
      case 'eligibility':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
            <p className="text-gray-700">{course.eligibility || 'No eligibility criteria provided.'}</p>
          </div>
        );
      case 'recruiters':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Top Recruiters</h2>
            <p className="text-gray-700">{course.topRecruiters || 'No recruiter information available.'}</p>
          </div>
        );
      case 'more':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">More</h2>
            <p className="text-gray-700 mb-4">Select an option to see more details:</p>
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-lg ${
                  moreOption === 'scope' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setMoreOption('scope')}
              >
                Scope
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  moreOption === 'career' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setMoreOption('career')}
              >
                Career Opportunities
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  moreOption === 'future' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setMoreOption('future')}
              >
                Future Trends
              </button>
            </div>

            <div className="mt-4">
              {moreOption === 'scope' && (
                <div>
                  <h3 className="text-lg font-semibold">Scope</h3>
                  <p className="text-gray-700">{course.scope || 'No scope information available.'}</p>
                </div>
              )}
              {moreOption === 'career' && (
                <div>
                  <h3 className="text-lg font-semibold">Career Opportunities</h3>
                  <p className="text-gray-700">{course.jobRoles || 'No career opportunities information available.'}</p>
                </div>
              )}
              {moreOption === 'future' && (
                <div>
                  <h3 className="text-lg font-semibold">Future Trends</h3>
                  <p className="text-gray-700">{course.futureTrends || 'No future trends information available.'}</p>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleMediaChange = (type) => {
    setMediaType(type);
    setMediaIndex(0); // Reset index when media type changes
  };

  const handleNextMedia = () => {
    setMediaIndex((prevIndex) =>
      prevIndex < (mediaType === 'images' ? course.images.length : course.videos.length) - 1
        ? prevIndex + 1
        : 0
    );
  };

  const handlePrevMedia = () => {
    setMediaIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : (mediaType === 'images' ? course.images.length : course.videos.length) - 1
    );
  };

  const renderMedia = () => {
    if (!course) return null;

    if (mediaType === 'images') {
      if (!course.images || course.images.length === 0) {
        return <p>No images available</p>;
      }
      return (
        <img
          src={course.images[mediaIndex]}
          alt={`College media ${mediaIndex}`}
          className="w-full h-full object-cover"
        />
      );
    } else if (mediaType === 'videos') {
      if (!course.videos || course.videos.length === 0) {
        return <p>No videos available</p>;
      }
      
      const videoId = course.videos[mediaIndex].split('v=')[1];
      return (
        <div className="relative mx-[10%] w-full h-auto item-center overflow-hidden">
          <YouTube videoId={videoId} className="w-full h-full" />
        </div>

      );
    }
  };

  return (
    <>
      <ScholarshipHeader
        breadcrumb="Home &gt; Course Details"
        title="Details of course"
        subtitle="Here are some of the best Courses with details"
      />
      <div className="min-h-screen lg:mx-[4%] flex flex-col items-center">
        <div className="w-full p-6 mt-6 flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-3/5 lg:pr-6 w-full">
          <div className="flex space-x-4 mb-4">
              <button
                className={`px-4 py-2 rounded-lg ${
                  mediaType === 'images' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => handleMediaChange('images')}
              >
                Images
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  mediaType === 'videos' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => handleMediaChange('videos')}
              >
                Videos
              </button>
            </div>

            {/* Media Display */}
            <div className="h-[350px] rounded-lg flex items-center justify-center">
              {renderMedia()}
            </div>

            {/* Media Navigation */}
            <div className="flex justify-between mt-4">
              <button onClick={handlePrevMedia} className="text-indigo-600 font-bold">
                Previous
              </button>
              <button onClick={handleNextMedia} className="text-indigo-600 font-bold">
                Next
              </button>
            </div>

            {/* Tabs */}
            <div className="flex mt-4 space-x-4 overflow-auto">
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'about' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'eligibility' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveTab('eligibility')}
              >
                Eligibility
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'recruiters' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveTab('recruiters')}
              >
                Recruiters
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'more' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveTab('more')}
              >
                More
              </button>
            </div>

            {/* Content Section */}
            <div className="mt-4">
              {renderContent()}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/5 lg:pl-6 w-full mt-6 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Let's Get Connected</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input 
                    type="text" 
                    name="name"
                    value={enquiry.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    name="email"
                    value={enquiry.email}
                    onChange={handleChange}
                    placeholder="Email address" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="tel" 
                    name="phone"
                    value={enquiry.phone}
                    onChange={handleChange}
                    placeholder="IN +91 Enter your phone number" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    name="course"
                    value={enquiry.course}
                    onChange={handleChange}
                    placeholder="Course" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    name="message"
                    value={enquiry.message}
                    onChange={handleChange}
                    placeholder="Message" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <div className="mb-4 flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                  />
                  <label>I'm not a robot</label>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex justify-center space-x-6">
              {/* Social Media Icons... */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coursedetails;
