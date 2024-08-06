import React from 'react';
import logo from '../images/logo.png'; 
import { BiSearchAlt2 } from "react-icons/bi";
import { PiLineVerticalThin } from "react-icons/pi";


function navigation(){

return (
<>
<div className='navi h-24 gap-16 flex items-center justify-between px-4'>
      <div>
        <img src={logo} alt="Logo" className='h-40' /> 
      </div>
      <div className='flex-grow flex'>
        <div className='flex flex-row gap-16 font-serif'>
          <div className='Careers'>
            <p>Careers</p>
          </div>
          <div className='Colleges'>
            <p>Colleges</p>
          </div>
          <div className='Find-scholarship'>
            <p>Find scholarship</p>
          </div>
          <div className='Housing'>
            <p>Housing</p>
          </div>
        </div>
      </div>
      <div className=' flex justify-center items-center'>
      <div className='flex flex-row font-serif justify-end items-center'>
         <div className='search'>
           <p> <BiSearchAlt2 size={34}/></p>
         </div>
         <PiLineVerticalThin size={34}/>
         <div className='Enquire'>
            <button className='bg-indigo-800 text-white h-12 w-44 rounded-xl'>Enquire Now</button>
         </div>


        </div>
        </div>

    </div>
</>

)
}

export default navigation