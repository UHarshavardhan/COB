import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 mt-5">
      <div className="lg:mx-[10%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-blue-900">Colleges Of Bangalore</h2>
          <p className="text-gray-600">
            We are envisioned to provide career guidance to students from all over Bangalore and help them lead a successful career in life.
          </p>
          <button className="bg-blue-700 text-white py-2 px-6 rounded-full hover:bg-blue-800">
            Enquire Now
          </button>
        </div>

        {/* Links Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">Links</h3>
          <ul className="text-gray-600 space-y-1">
            <li>About Us</li>
            <li>Student Housing</li>
            <li>Careers</li>
            <li>Colleges</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Top Careers Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">Top Careers</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Healthcare</li>
            <li>Merchant Navy</li>
            <li>Food Processing & Technology</li>
            <li>Humanities & Arts</li>
            <li>Aerospace and Aviation</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Get contact</h3>
          <p className="text-gray-600">Alma.Lawson@Example.Com</p>
          <div className="flex space-x-4 text-gray-600">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>

        </div>
      </div>

      <div className="mt-36">
  <hr className="border-1 border-black" />
</div>

    </footer>
  );
};

export default Footer;
