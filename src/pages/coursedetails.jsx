import React, { useState } from 'react';
import ScholarshipHeader from '../components/ScholarshipHeader';

const Coursedetails = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [moreOption, setMoreOption] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-700">
              Electronics Engineering is characterized as the department of engineering 
              field that uses electrical components such as semiconductors, transistors, 
              diodes and others to build Electronics circuits, gadgets, coordinate circuits 
              and electronic frameworks...
            </p>
          </div>
        );
      case 'eligibility':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
            <p className="text-gray-700">
              Eligibility content goes here. You can add details regarding the eligibility criteria 
              for the course.
            </p>
          </div>
        );
      case 'recruiters':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Recruiters</h2>
            <p className="text-gray-700">
              Recruiters content goes here. Add information about companies that recruit from this course.
            </p>
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
                  <p className="text-gray-700">
                    The scope of Electronics Engineering is vast and includes areas such as communication systems, 
                    embedded systems, and automation. Graduates can work in various sectors, including telecommunications, 
                    consumer electronics, and IT.
                  </p>
                </div>
              )}
              {moreOption === 'career' && (
                <div>
                  <h3 className="text-lg font-semibold">Career Opportunities</h3>
                  <p className="text-gray-700">
                    Electronics engineers have a wide range of career opportunities, including roles in design and development, 
                    manufacturing, testing, and maintenance of electronic systems. Companies in sectors like defense, aerospace, 
                    and healthcare actively recruit electronics engineers.
                  </p>
                </div>
              )}
              {moreOption === 'future' && (
                <div>
                  <h3 className="text-lg font-semibold">Future Trends</h3>
                  <p className="text-gray-700">
                    Future trends in electronics engineering include advancements in AI, IoT, and 5G technology. 
                    The field is also evolving towards more sustainable and energy-efficient designs, which will shape the 
                    future of electronics.
                  </p>
                </div>
              )}
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
        breadcrumb="Home &gt; Find Scholarship" 
        title="Scholarships To Apply For" 
        subtitle="Here are some of the best college scholarships with approaching deadlines for high school seniors"
      />
    <div className="min-h-screen lg:mx-[4%] flex flex-col items-center">
      <div className="w-full p-6 mt-6 flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-3/5 lg:pr-6 w-full">
          {/* Video Section */}
          <div className="bg-gray-200 h-56 rounded-lg flex items-center justify-center">
            <button className="bg-blue-600 text-white p-4 rounded-full">
              ▶️
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
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="tel" 
                  placeholder="IN +91 Enter your phone number" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Course" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <textarea 
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
            <a href="#" className="text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-pink-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-700">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Coursedetails;
