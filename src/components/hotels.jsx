import React, { useState, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { MdOutlineBed } from "react-icons/md";
import { getAllAccommodations } from "../firebase/Accomodation"; 

function Hotels() {
    const [budget, setBudget] = useState(500);
    const [propertyType, setPropertyType] = useState('Shared room');
    const [amenities, setAmenities] = useState([]);
    const [hotels, setHotels] = useState([]); 
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllAccommodations(); 
                setHotels(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

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

    const handleSortChange = (order) => {
        setSortOrder(order);
        const sortedHotels = [...hotels].sort((a, b) => {
            if (order === 'lowToHigh') {
                return a.price - b.price;
            } else if (order === 'highToLow') {
                return b.price - a.price;
            }
            return 0;
        });
        setHotels(sortedHotels);
    };

    const handleBudgetChange = (budget) => {
        const filteredHotels = [...hotels].filter((hotel) => hotel.price <= budget);
        setHotels(filteredHotels);
    };

    const handlePropertyType = (type) => {
        const filteredHotels = [...hotels].filter((hotel) => hotel.propertyType === type);
        setHotels(filteredHotels);
    };

    return (
        <>
            <div className="flex mt-10 p-2 flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/3 p-6 bg-purple-50 rounded-lg shadow-lg h-full lg:h-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Filters</h2>
                        <button className="text-gray-400 text-sm">Reset all</button>
                    </div>
                    <hr className="mb-4" />
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Sort By</h3>
                        <div className="flex flex-col text-sm text-gray-600">
                            <label className="flex items-center">
                                <input type="radio" name="sort" className="mr-2" checked={sortOrder === 'lowToHigh'} onChange={() => handleSortChange('lowToHigh')} />
                                Price: Low to high
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="sort" className="mr-2" checked={sortOrder === 'highToLow'} onChange={() => handleSortChange('highToLow')} />
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
                            onChange={(e) => {
                                setBudget(e.target.value);
                                handleBudgetChange(e.target.value);
                            }}
                            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer mb-2"
                        />
                    </div>
                    <hr className="mb-4" />
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Property Type</h3>
                        <div className="flex flex-col text-sm text-gray-600">
                            {['Entire Place', 'Private room', 'Shared room'].map((type) => (
                                <label key={type} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="propertyType"
                                        value={type}
                                        checked={propertyType === type}
                                        onChange={() => {
                                            handlePropertyTypeChange(type);
                                            handlePropertyType(type);
                                        }}
                                        className="mr-2"
                                    />
                                    {type}
                                </label>
                            ))}
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
                </div>
                <div className="flex-1 lg:ml-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2">
                        {hotels.map((item, index) => (
                            <div className="flex flex-col shadow-lg rounded-lg overflow-hidden" key={index}>
                                <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                                <div className="p-4">
                                    <span className="text-xl font-semibold">{item.name}</span>
                                    <div className="flex items-center text-sm text-slate-400 mt-2">
                                        <CiLocationOn className="mr-1" />
                                        <span>{item.location}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-400 mt-2">
                                        <HiOutlineBuildingOffice className="mr-1" />
                                        <span>{item.place}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <span className="text-sm text-slate-400 mr-1">From</span>
                                        <span className="text-lg font-semibold">{item.price}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-400 mt-2">
                                        <MdOutlineBed className="mr-1" />
                                        <span>{item.options} room options</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center pb-4">
                                    <button className="text-lg border-2 border-black text-center w-full h-14 rounded-xl">
                                        Enquire Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='FAQ flex flex-col mt-5'>
                <span className='text-2xl lg:text-3xl font-semibold mb-4'>Frequently Asked Questions</span>
                {[
                    'Who are we?',
                    'What kind of student housing do we offer?',
                    'Will my deposit and rent be refunded if I cancel my booking?',
                    'How much time does it take to get the refund?',
                    'How do I know my accommodation is safe?'
                ].map((question, index) => (
                    <button key={index} className='w-full h-20 bg-[#9598FF4D] my-2 rounded-lg flex justify-start items-center px-4 text-left'>
                        {question}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Hotels;
