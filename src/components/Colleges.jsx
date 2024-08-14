import React from "react";
import data from '../jsondata/collegesdata.js'
import star from '../images/star.png'

function Collegetab() 
{
    return(
    <>
    <div className="flex justify-center p-5">
        <div className="grid grid-cols-3 gap-4 justify-center">
            {data.map((item,index)=>(
                
                <div className="flex flex-col border-2 shadow-md rounded-md w-[450px] h-[356px] justify-center" key={index}>
                           <div className="flex justify-center items-center">
                                 <img src={item.image.src} alt={item.image.alt} className="w-[417px] h-[210px]"/>
                            </div>

                <div className="flex flex-row justify-between" >
                      <div className="flex flex-col">
                         <span className="t-[20px]">PES University</span><br/>
                         <div className="flex flex-row">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <img key={i} src={star} alt="star" className="w-[19.31px] h-[19px]" />
                                        ))}
                    </div>
                    <div>
                         <span className="text-orange-600">Learn more </span>
                        </div>
                       </div> 
                       <div className="flex flex-col justify-end mb-3 mr-3"> 
                        <button className="w-[150px] h-[38px] bg-[#2E3192] rounded-lg mb-3">Apply now</button>
                        <button className="w-[150px] h-[38px] bg-[#2E3192] rounded-lg">Download brochure</button>
                        </div>
                
             </div>
        </div>
    ))}

    </div>
    </div>
    </>
    )
}

export default Collegetab;