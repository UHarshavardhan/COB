import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import BlogDetailScreen from './pages/BlogFullScreen.jsx';
import ScholarshipScreen from './pages/Scholarship.jsx';
import Footer from './components/Footer.jsx';
import ScholarshipFormScreen from './pages/ScholarshipFormScreen.jsx';
import EnquireForm from './pages/enquireForm.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<BlogDetailScreen />} />
        <Route path="/scholarship" element={<ScholarshipScreen />} />
        <Route path="/enquireform" element={<EnquireForm />} />
        <Route path="/scholarshipform" element={<ScholarshipFormScreen />} />


        {/* Uncomment and ensure these components exist for the following routes to work */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
