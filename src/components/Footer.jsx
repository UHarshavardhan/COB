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
            <a href="/enquire" className="block">Enquire Now</a>
          </button>
        </div>

        {/* Links Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">Links</h3>
          <ul className="text-gray-600 space-y-1">
            <li><a href="/#about" className="hover:underline">About Us</a></li>
            <li><a href="/housing" className="hover:underline">Student Housing</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/colleges" className="hover:underline">Colleges</a></li>
            <li><a href="/#blogs" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        {/* Top Careers Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">Top Careers</h3>
          <ul className="text-gray-600 space-y-1">
            <li><a href="/courses/Law" className="hover:underline">Law</a></li>
            <li><a href="/courses/Medical" className="hover:underline">Medical</a></li>
            <li><a href="/courses/Management" className="hover:underline">Management</a></li>
            <li><a href="/courses/Healthcare" className="hover:underline">Healthcare</a></li>
            <li><a href="/courses/Designer" className="hover:underline">Designer</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
          <p className="text-gray-600"><a href="mailto:Alma.Lawson@Example.Com" className="hover:underline">Alma.Lawson@Example.Com</a></p>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
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
