import React, { useState } from 'react';
import logo from '../images/logo.png'; 
import { BiSearchAlt2 } from "react-icons/bi";
import { PiLineVerticalThin } from "react-icons/pi";
import { FiMenu } from "react-icons/fi"; // Import for hamburger menu icon

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className='navi bg-white rounded-lg h-24 gap-16 flex items-center justify-between px-4'>
                <div>
                    <a href="/">
                        <img src={logo} alt="Logo" className='h-40' /> 
                    </a>
                </div>
                <div className='hidden md:flex flex-grow flex'>
                    <div className='flex flex-row gap-16 font-serif'>
                        <a href="/careers" className='Careers'>
                            <p>Careers</p>
                        </a>
                        <a href="/colleges" className='Colleges'>
                            <p>Colleges</p>
                        </a>
                        <a href="/scholarship" className='Find-scholarship'>
                            <p>Find scholarship</p>
                        </a>
                        <a href="/housing" className='Housing'>
                            <p>Housing</p>
                        </a>
                    </div>
                </div>
                <div className='hidden md:flex flex justify-center items-center'>
                    <div className='flex flex-row font-serif justify-end items-center'>
                        <a href="/search" className='search'>
                            <p><BiSearchAlt2 size={34} /></p>
                        </a>
                        <PiLineVerticalThin size={34} />
                        <a href="/enquire" className='Enquire'>
                            <button className='bg-indigo-800 text-white h-12 w-44 rounded-xl'>Enquire Now</button>
                        </a>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-3xl'>
                        <FiMenu size={30} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden fixed top-0 left-0 w-full h-full shadow-lg z-50'>
                    <div className='flex flex-col items-center  bg-[white] mt-20'>
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
