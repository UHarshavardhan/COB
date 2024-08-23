import React from "react";
import colleges from "../../jsondata/top10clg";

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

                         </div>
                   </div>


                </div>

          
          
        </>
    )
}

export default colleges