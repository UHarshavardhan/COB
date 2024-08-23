import React from "react";
import colleges from "../../jsondata/top10clg";
import star from "../../images/star-1.png"

function Colleges(){
    return(
        <>
   
            <div className="flex">
                   <div className="flex flex-col">
                         <div>
                            <div className="collegename flex flex-row border-2 shadow-sm rounded-lg mb-4">
                                
                                  <input type="text" placeholder="#College ID"></input>
                                  <input type="text" placeholder="Coolege Name"></input>

                            </div>
                            <div className="ratiing flex flex-row">
                                
                              <span> Rank your college {[1,2,3,4,5,6].map((_,index)=>{
                                           <img key={index} src={star}></img>
                                    })
                                    }</span>      
                                 
                                

                            </div>
                            <div className="upload flex flex-row"> 
                              <input type="file">Upload Boucher</input>
                              <input type="file">Upload Image</input>
                              <input type="file">Upload Video</input>
                            </div>

                            <div className="Overview flex flex-col"> 
                                <div className="flex flex-col"> 
                                    <span>Overview</span>
                               <textarea autoFocus></textarea>
                                </div>
                                <div className="Hihglights flex flex-col"> 
                                    <span>Highlights</span>
                               <textarea autoFocus></textarea>
                                </div>
                                <div className="Courses flex flex-col"> 
                                    <span>Courses</span>
                               <textarea autoFocus></textarea>
                                </div>
                                <div className="Addmissions flex flex-col"> 
                                    <span>Addmissions </span>
                               <textarea autoFocus></textarea>
                                </div>
                                <div className="Placements flex flex-col"> 
                                    <span>Addmissions </span>
                               <textarea autoFocus></textarea>
                                </div>
                                <div className="Title flex flex-col"> 
                                    <span>Addmissions </span>
                               <textarea autoFocus></textarea>
                                </div>
                            </div>
                         </div>
                   </div>


                </div>

          
          
        </>
    )
}

export default colleges