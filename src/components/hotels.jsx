import React, { useState } from 'react';
import data from "../jsondata/hotels.js";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineBed } from "react-icons/md";

function Hotels() {
    const [budget, setBudget] = useState(500);
    const [propertyType, setPropertyType] = useState('Shared room');
    const [amenities, setAmenities] = useState([]);

    const handlePropertyTypeChange = (type) => {
        setPropertyType(type);
    };

    const handleAmenityToggle = (amenity) => {
        setAmenities((prev) =>
            prev.includes(amenity)
                ? prev.filter((item) => item !== amenity)
                : [...prev, amenity]
        );
    };
    return (
        <>
            <div className="flex  flex-col items-center">
                <div className="flex flex-row">
                <div className="w-[418px] p-6 bg-purple-50 rounded-lg shadow-lg ml-2 h-[1280px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button className="text-gray-400 text-sm">Reset all</button>
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Sort By</h3>
                <div className="flex flex-col text-sm text-gray-600">
                    <label className="flex items-center">
                        <input type="radio" name="sort" className="mr-2" />
                        Nearest
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="sort" className="mr-2" />
                        Price: Low to high
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="sort" className="mr-2" />
                        Price: High to low
                    </label>
                </div>
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Budget (per week)</h3>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>0</span>
                    <span>1000</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer mb-2"
                />
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Property Type</h3>
                <div className="flex flex-col text-sm text-gray-600">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="propertyType"
                            value="Entire Place"
                            checked={propertyType === 'Entire Place'}
                            onChange={() => handlePropertyTypeChange('Entire Place')}
                            className="mr-2"
                        />
                        Entire Place
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="propertyType"
                            value="Private room"
                            checked={propertyType === 'Private room'}
                            onChange={() => handlePropertyTypeChange('Private room')}
                            className="mr-2"
                        />
                        Private room
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="propertyType"
                            value="Shared room"
                            checked={propertyType === 'Shared room'}
                            onChange={() => handlePropertyTypeChange('Shared room')}
                            className="mr-2"
                        />
                        Shared room
                    </label>
                </div>
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Amenities</h3>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    {['24/7 Security + CCTV', 'Accessibility', 'Central Heating', 'Advice', 'Catering', 'Kitchen', 'Breakfast', 'Air Conditioning', 'Laundry', 'Cinema Room', 'Flexible', 'On-Site Gym', 'On-Site Maintenance', 'Swimming Pool'].map((amenity) => (
                        <button
                            key={amenity}
                            onClick={() => handleAmenityToggle(amenity)}
                            className={`px-3 py-1 rounded-full border ${amenities.includes(amenity) ? 'bg-blue-200' : ''}`}
                        >
                            {amenity}
                        </button>
                    ))}
                </div>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-center">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg">
                    Apply
                </button>
            </div>
        </div>
                    <div className="grid grid-cols-2 gap-3 ml-14">
                        {data.map((item, index) => (
                            <div className="flex flex-col w-[348px] h-[483px] shadow-lg" key={index}>
                                <div className="flex">
                                    <img src={item.image.src} alt={item.image.alt} className="w-[348px] h-[240px]" />
                                </div>

                                <div className="flex flex-col mt-3 ml-2">
                                    <span className="text-[20px]">{item.name}</span>

                                    <div className="flex items-center text-[10px] text-slate-400">
                                        <CiLocationOn className="mr-1" />
                                        <span>{item.nearto}</span>
                                    </div>

                                    <div className="flex items-center text-[10px] text-slate-400">
                                        <HiOutlineBuildingOffice className="mr-1" />
                                        <span>{item.distance}</span>
                                    </div>

                                    <div className="flex mt-2">
                                        <span className="text-[13px] text-slate-400 mr-1 mt-2">From</span>
                                        <span className="mt-1">{item.price}</span>
                                       </div>
                                        <div className="flex items-center text-[10px] text-slate-400 mt-2">
                                            <MdOutlineBed className="mr-1" />
                                            <span>{item.options} room options</span>
                                        </div>
                                    
                                </div>

                                <div className="mt-4 flex justify-center">
                                    <button className="text-[16px] border-2 border-black text-center w-[248px] h-[56px] rounded-xl">
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='FAQ flex flex-col mt-5 justify-start items-start'>
                    <span className='text-[36px]'>Frequently asked questions</span>
                    <button className='w-[1282px] h-[89px] bg-[#9598FF4D] my-3 rounded-lg flex justify-start items-center'>Who are we?</button>
                    <button className='w-[1282px] h-[89px] bg-[#9598FF4D] my-3 rounded-lg'>What kind of student housing do we offer?</button>
                    <button className='w-[1282px] h-[89px] bg-[#9598FF4D] my-3 rounded-lg'>Will my deposit and rent be refunded if I cancel my booking?</button>
                    <button className='w-[1282px] h-[89px] bg-[#9598FF4D] my-3 rounded-lg'>How much time does it take to get the refund?</button>
                    <button className='w-[1282px] h-[89px] bg-[#9598FF4D] my-3 rounded-lg'>How do I know my accommodation is safe?</button>
                    <button className='w-[1282px] h-[89px] bg-[#9598FF4D] my-3 rounded-lg'>How much time does it take to get the refund?</button>
                    <button className='w-[1282px] h-[89px] bg-[#9598FF4D] my-3 rounded-lg'>What are the requirements for a guarantor?</button>
                </div>
            </div>
        </>
    );
}

export default Hotels;
