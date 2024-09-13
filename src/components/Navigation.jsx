import React, { useState, useRef, useEffect } from 'react';
import logo from '../images/logo.png';
import { BiSearchAlt2 } from "react-icons/bi";
import { PiLineVerticalThin } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { getAllColleges } from '../firebase/College';
import { useNavigate } from 'react-router-dom';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [colleges, setColleges] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setDropdownVisible(e.target.value.length > 0);
    };

    const handleSuggestionClick = (college) => {
        setSearchTerm(college.name);
        setDropdownVisible(false);
        navigate(`/college/${college.id}`); // Navigate to the selected college's page
    };

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const allColleges = await getAllColleges();
                setColleges(allColleges); // Store fetched colleges for suggestions
            } catch (error) {
                console.error('Error fetching colleges:', error);
            }
        };

        fetchColleges();
    }, []);

    return (
        <>
            <div className='navi bg-white rounded-lg h-24 gap-16 flex items-center justify-between px-4'>
                <div>
                    <a href="/">
                        <img src={logo} alt="Logo" className='h-40' />
                    </a>
                </div>
                <div className='md:flex flex-grow flex'>
                    <div className='flex flex-row gap-16 font-serif'>
                        <a href="/careers" className='Careers font-pop'>
                            <p>Careers</p>
                        </a>
                        <a href="/colleges" className='Colleges font-pop'>
                            <p>Colleges</p>
                        </a>
                        <a href="/scholarship" className='Find-scholarship font-pop'>
                            <p>Find scholarship</p>
                        </a>
                        <a href="/housing" className='Housing font-pop'>
                            <p>Accommodation</p>
                        </a>
                    </div>
                </div>
                <div className='hidden md:flex flex justify-center items-center'>
                    <div className='flex flex-row font-serif justify-end items-center'>
                        <a className='search'>
                            <button onClick={() => setSearchOpen(!searchOpen)}><BiSearchAlt2 size={34} /></button>
                        </a>
                        <PiLineVerticalThin size={34} />
                        <a href="/enquire" className='Enquire'>
                            <button className='bg-indigo-800 text-white h-12 w-44 rounded-xl font-pop font-bold'>Enquire Now</button>
                        </a>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-3xl'>
                        <FiMenu size={30} />
                    </button>
                </div>
            </div>

            {searchOpen && (
                <div className='absolute min-h-[300px] z-50 rounded-md bg-white left-[30%] w-[600px]'>
                    <div className="w-full mx-auto mt-10 z-10 block">
                        {/* Search Bar */}
                        <div className="flex items-center border-2 border-gray-300 rounded-lg p-2">
                            <BiSearchAlt2 size={24} className="mr-2" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder="Search"
                                className="w-full focus:outline-none"
                            />
                        </div>

                        {dropdownVisible && (
                            <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                                {colleges
                                    .filter((college) =>
                                        college.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    )
                                    .map((college, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                                            onClick={() => handleSuggestionClick(college)}
                                        >
                                            <BiSearchAlt2 size={20} className="mr-2" />
                                            {college.name}
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isMenuOpen && (
                <div className='md:hidden fixed top-0 left-0 w-full h-full shadow-lg z-50'>
                    <div className='flex flex-col items-center bg-[white] mt-20'>
                        <div className='w-full flex justify-end pr-4'>
                            <button onClick={() => setIsMenuOpen(false)} className='text-3xl'>X</button>
                        </div>
                        <div className='flex flex-col gap-8 font-serif'>
                            <a href="/careers" className='Careers text-xl'>
                                <p>Careers</p>
                            </a>
                            <a href="/colleges" className='Colleges text-xl'>
                                <p>Colleges</p>
                            </a>
                            <a href="/find-scholarship" className='Find-scholarship text-xl'>
                                <p>Find scholarship</p>
                            </a>
                            <a href="/housing" className='Housing text-xl'>
                                <p>Housing</p>
                            </a>
                            <a href="/search" className='search text-xl'>
                                <p><BiSearchAlt2 size={34} /></p>
                            </a>
                            <a href="/enquire" className='Enquire'>
                                <button className='bg-indigo-800 text-white h-12 w-44 rounded-xl mt-4'>Enquire Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navigation;
