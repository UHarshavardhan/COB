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
    const handelSortchange = (order)=>{
        console.log(order);
        setSortOrder(order);
        const sortedhotels=[...hotels].sort((a,b)=>{
            if(order === 'lowToHigh'){
                console.log(a.price);
                console.log(b.price);
              return   a.price - b.price;
            }
            else if (order === 'highToLow') {
                return  b.price - a.price;
            }
            return 0;
        });
     setHotels(sortedhotels);
    };
    const handelrange=(budget)=>{
        const budgetHotels=[...hotels].filter((hotel)=>{
               return hotel.price<=budget;
        })
        setHotels(budgetHotels);
    }
    const handlePropertyType =(type)=>{
        console.log(type);
            const property=[...hotels].filter((hotel)=>{
               return hotel.propertyType === type
            });
        setHotels(property);
    }



    return (
        <>
            <div className="flex flex-col ">
                <div className="flex flex-row justify-start">
                    <div className="flex flex-col justify-start w-[418px] p-6 bg-purple-50 rounded-lg shadow-lg ml-2 h-[1280px]">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Filters</h2>
                            <button className="text-gray-400 text-sm">Reset all</button>
                        </div>
                        <hr className="mb-4" />
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Sort By</h3>
                            <div className="flex flex-col text-sm text-gray-600">
                                <label className="flex items-center">
                                    <input type="radio" name="sort" className="mr-2" checked={sortOrder === 'lowToHigh'} onChange={() => handelSortchange('lowToHigh')} />
                                    Price: Low to high
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="sort" className="mr-2" checked={sortOrder === 'highToLow'} onChange={() => handelSortchange('highToLow')}/>
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
                                onChange={(e) => {setBudget(e.target.value);
                                    handelrange(e.target.value);
                                }}
                                
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
                                        onChange={() =>{ handlePropertyTypeChange('Entire Place');handlePropertyType('Entire Place');

                                        }}
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
                                        onChange={() => {handlePropertyTypeChange('Private room');handlePropertyType('Private room')}}
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
                                        onChange={() =>{handlePropertyTypeChange('Shared room');handlePropertyType('Shared room')}}
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
                        
                    </div>
                    <div className="grid grid-cols-2 gap-9 ml-14">
                        {hotels.map((item, index) => (
                            <div className="flex flex-col w-[348px] h-[483px] shadow-lg" key={index}>
                                <div className="flex">
                                    <img src={item.image} alt={item.image} className="w-[348px] h-[240px]" />
                                </div>

                                <div className="flex flex-col mt-3 ml-2">
                                    <span className="text-[20px]">{item.name}</span>

                                    <div className="flex items-center text-[10px] text-slate-400">
                                        <CiLocationOn className="mr-1" />
                                        <span>{item.location}</span>
                                    </div>

                                    <div className="flex items-center text-[10px] text-slate-400">
                                        <HiOutlineBuildingOffice className="mr-1" />
                                        <span>{item.place}</span>
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
                    <button className='w-[1282px] h-[89px] bg-[#9598FF4D] my-3 rounded-lg'>How do I know my accommodation is safe?</button>
                </div>
            </div>
        </>
    );
}

export default Hotels;
