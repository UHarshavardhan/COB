import React, { useState } from 'react';
import { MdLocalPhone } from 'react-icons/md';
import { createNewsletter } from './../firebase/Newsletter'; // Import the function from firebase.js

function Subscribe() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newsletterData = {
            email,
            phone,
            course,
        };

        try {
            const newsletterId = await createNewsletter(newsletterData);
            alert(`Subscription successful! Your ID: ${newsletterId}`);
            // Optionally reset form fields after successful submission
            setEmail('');
            setPhone('');
            setCourse('');
        } catch (error) {
            alert('There was an error subscribing. Please try again.');
        }
    };

    return (
        <div className="bg-[#EFF0FF] py-8 px-4 flex flex-row items-center justify-center">
            <form onSubmit={handleSubmit} className="">
                <div className="text-center mb-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl text-[#2E3192]">Subscribe To Our Newsletter</span>
                </div>
                <div className="text-center mb-6">
                    <span className="text-base md:text-lg lg:text-xl text-[#6E7C91]">Get College Notifications, Exam Notifications, and News Updates</span>
                </div>
                <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email id"
                        className="w-[300px] md:w-1/2 h-12 border border-black rounded-lg px-4 text-black placeholder-black"
                        required
                    />
                    <div className="flex items-center w-full md:w-1/2 h-12 border border-black rounded-lg px-4 bg-white">
                        <MdLocalPhone className="text-black mr-2" size={24} />
                        <input 
                            type="text" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your mobile no" 
                            className="flex-grow h-full text-black placeholder-black border-none outline-none"
                            required
                        />
                    </div>
                    {/* <select 
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full md:w-1/2 h-12 border border-black rounded-lg px-4 text-black"
                        required 
                    >
                        <option value="" disabled>Select your course</option>
                        <option value="Engineering">Engineering</option>
                        <option value="MBA">MBA</option>
                        <option value="Statistics">Statistics</option>
                        <option value="Aviation">Aviation</option>
                    </select> */}
                    <button 
                        type="submit" 
                        className="w-[400px] h-12 bg-[#2E3192] text-white rounded-lg"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Subscribe;
