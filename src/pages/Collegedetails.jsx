import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCollegeById } from '../firebase/College';
import { createEnquiry } from '../firebase/college_Enquireform'; // Import createEnquiry function
import ScholarshipHeader from '../components/ScholarshipHeader';

const Collegedetails = () => {
  const { id } = useParams(); // Get the college ID from the URL
  const [college, setCollege] = useState(null);
  const [activeTab, setActiveTab] = useState('about');
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
                    <>
                  <tr key={index} className="border">
                    <td className="px-4 py-2 border">{highlight?.details}</td>
                  <td className="px-4 py-2 border">{highlight?.highlight}</td>

                  </tr>
               
                </>
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
                <div className="text-gray-700 whitespace-pre-line">
                  {college.admission}
                </div>
              </div>
            );
          
          case 'placement':
            return (
              <div>
                <h2 className="text-xl font-semibold mb-2">Placement</h2>
                <div className="text-gray-700 whitespace-pre-line">
                  {college.placement}
                </div>
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
        title={college ? college.name : "College Details"} 
        subtitle="Explore detailed information about this college."
      />
      <div className="min-h-screen lg:mx-[4%] flex flex-col items-center">
        <div className="w-full p-6 mt-6 flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-3/5 lg:pr-6 w-full">
            {/* College Image and Video */}
            <div className="bg-gray-200 h-56 rounded-lg flex items-center justify-center">
              <img
                src={college ? college.image : ''}
                alt={college ? college.name : ''}
                className="w-full h-full object-cover"
              />
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
};

export default Collegedetails;
