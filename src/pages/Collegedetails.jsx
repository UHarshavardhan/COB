import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCollegeById } from '../firebase/College';
import { createEnquiry } from '../firebase/college_Enquireform'; // Import createEnquiry function
import ScholarshipHeader from '../components/ScholarshipHeader';
import YouTube from 'react-youtube'; // Import YouTube component

const Collegedetails = () => {
  const { id } = useParams(); // Get the college ID from the URL
  const [college, setCollege] = useState(null);
  const [activeTab, setActiveTab] = useState('about');
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
    const fetchCollege = async () => {
      try {
        const collegeData = await getCollegeById(id);
        console.log(collegeData);
        setCollege(collegeData);
      } catch (error) {
        console.error('Error fetching college details:', error);
      }
    };

    fetchCollege();
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
        collegeName: college.name,
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

  const handleMediaChange = (type) => {
    setMediaType(type);
    setMediaIndex(0); // Reset index when media type changes
  };

  const handleNextMedia = () => {
    setMediaIndex((prevIndex) =>
      prevIndex < (mediaType === 'images' ? college?.images.length : college?.videos.length) - 1
        ? prevIndex + 1
        : 0
    );
  };

  const handlePrevMedia = () => {
    setMediaIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : (mediaType === 'images' ? college?.images.length : college?.videos.length) - 1
    );
  };

  const renderMedia = () => {
    if (!college) return null;

    if (mediaType === 'images') {
      if(!college.images || college.images.length === 0) return null;
      return (
        <img
          src={college?.images[mediaIndex]}
          alt={`College media ${mediaIndex}`}
          className="w-full h-full object-cover"
        />
      );
    } else if (mediaType === 'videos') {
      if(!college.videos || college.videos.length === 0) return null;
      const videoId = college?.videos[mediaIndex].split('v=')[1];
      return (
        <div className="relative mx-[10%] w-full h-auto item-center overflow-hidden">
          <YouTube videoId={videoId} className="w-full h-full" />
        </div>

      );
    }
  };

  const renderContent = () => {
    if (!college) return null;

    switch (activeTab) {
      case 'about':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <div className="text-gray-700 whitespace-pre-line">{college.overview}</div>
          </div>
        );
      case 'highlights':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <tbody>
                {college.highlights.map((highlight, index) => (
                  <tr key={index} className="border">
                    <td className="px-4 py-2 border">{highlight?.details}</td>
                    <td className="px-4 py-2 border">{highlight?.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'courses':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Courses</h2>
            <table className="min-w-full bg-white border border-gray-200">
              <tbody>
                {college.courses.map((course, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{course?.course}</td>
                    <td className="px-4 py-2">{course?.details}</td>
                    <td className="px-4 py-2">{course?.fee}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'admission':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Admission</h2>
            <div className="text-gray-700 whitespace-pre-line">{college.admission}</div>
          </div>
        );
      case 'placement':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Placement</h2>
            <div className="text-gray-700 whitespace-pre-line">{college.placement}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <ScholarshipHeader
        breadcrumb="Home &gt; College Details"
        title={college ? college.name : 'College Details'}
        subtitle="Explore detailed information about this college."
      />
      <div className="min-h-screen lg:mx-[4%] flex flex-col items-center">
        <div className="w-full p-6 mt-6 flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-3/5 lg:pr-6 w-full">
            {/* Toggle Buttons for Images and Videos */}
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
                  activeTab === 'highlights' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveTab('highlights')}
              >
                Highlights
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'courses' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveTab('courses')}
              >
                Courses
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'admission' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveTab('admission')}
              >
                Admission
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'placement' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveTab('placement')}
              >
                Placement
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">{renderContent()}</div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/5 lg:pl-6 mt-8 lg:mt-0 w-full">
            <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Submit an Enquiry</h2>
              <input
                className="w-full p-2 mb-4 border rounded-lg"
                type="text"
                name="name"
                placeholder="Your Name"
                value={enquiry.name}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 mb-4 border rounded-lg"
                type="email"
                name="email"
                placeholder="Your Email"
                value={enquiry.email}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 mb-4 border rounded-lg"
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={enquiry.phone}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 mb-4 border rounded-lg"
                type="text"
                name="course"
                placeholder="Course of Interest"
                value={enquiry.course}
                onChange={handleChange}
              />
              <textarea
                className="w-full p-2 mb-4 border rounded-lg"
                name="message"
                placeholder="Additional Message"
                value={enquiry.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-2 rounded-lg"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collegedetails;
