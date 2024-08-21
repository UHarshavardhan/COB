import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import BlogDetailScreen from './pages/BlogFullScreen.jsx';
import ScholarshipScreen from './pages/Scholarship.jsx';
import Footer from './components/Footer.jsx';
import ScholarshipFormScreen from './pages/ScholarshipFormScreen.jsx';
import EnquireForm from './pages/enquireForm.jsx';
import Coursedetails from './pages/coursedetails.jsx';
import Blogs from './components/admin/Blogs.jsx';
import Responses from './components/admin/Responses.jsx';
import Sidebar from './components/admin/adminsidebar.jsx';
import { useState } from 'react';
import ScholarshipTable from './components/admin/scholarship.jsx';
import Scholarships from './components/admin/scholarship.jsx';
import ScholarshipEnquiry from './components/admin/ScholarshipEnquiry.jsx';



function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'AdminPanel':
        return <Blogs/>;
      case 'Blogs':
        return <Blogs />;
      case 'Responses':
        return <Responses />;
      case 'Scholarships':
        return <Scholarships onSelect={setSelectedComponent}/>;
      case 'ScholarshipEnquiry':
        return <ScholarshipEnquiry />;
      default:
        return <Blogs/>;
    }
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<BlogDetailScreen />} />
        <Route path="/scholarship" element={<ScholarshipScreen />} />
        <Route path="/enquireform" element={<EnquireForm />} />
        <Route path="/scholarshipform" element={<ScholarshipFormScreen />} />
        <Route path="/coursedetails" element={<Coursedetails />} />
        <Route path="/admin" element={
            <div className="flex ">
              <Sidebar onSelect={setSelectedComponent} />
              <div className="flex-1 bg-[#fdf1e2]  justify-center items-center p-4">
                {renderComponent()}
              </div>
            </div>
          } />
          <Route path="*" element={<Homepage />} />


        {/* Uncomment and ensure these components exist for the following routes to work */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
