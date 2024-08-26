import React from "react";
import colleges from "../../jsondata/top10clg";
import star from "../../images/star-1.png";

function Colleges() {
  return (
    <>
      <div className="flex">
        <form>
          <div className="flex flex-col ml-7">
           
            <div className="flex flex-row w-[1114px] h-[74px] items-center border-1 rounded-xl bg-white">
              <div className="flex rounded-md border-1 ml-3 riun">
                <h1 className="flex justify-end items-center">College name</h1>
                <input
                  type="text"
                  placeholder="Enter your college name"
                  className="ml-2 border-black rounded-md w-[350px] h-[33px] border hover:border-black"
                />
              </div>
              <div className="flex justify-end ml-[450px]">
                <span>Rating</span>
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <img key={i} src={star} className="w-[24px] h-[24px]" />
                ))}
              </div>
            </div>

         
            <div className="flex flex-row w-[1114px] h-[74px] items-center border-1 rounded-xl bg-white mt-5 justify-between px-5">
              <div className="flex items-center space-x-2">
                <span>Upload Boucher:</span>
                <input type="file" className="w-[150px] border border-black rounded-md" />
              </div>
              <div className="flex items-center space-x-2">
                <span>Upload Image:</span>
                <input type="file" className="w-[150px] border border-black rounded-md" />
              </div>
              <div className="flex items-center space-x-2">
                <span>Upload Video:</span>
                <input type="file" className="w-[150px] border border-black rounded-md" />
              </div>
            </div>


            <div  className="flex flex-col w-[1114px] h-[1624px] border-1 rounded-xl bg-white mt-5  px-5"> 
                     <div className="Tet_upload flex flex-col  shadow-lg border rounded-lg mt-3">

                            <h1 className="text-[20px] mt-2 font-bold border-black border">Overview</h1>
                            <h2 className="text-[15px] mt-6">Description</h2>
                            <textarea className="w-[1074px]  h-[208px] border-black border-2"></textarea>
                     </div>


                     <div className="mt-5 border-1 rounded-xl shadow-lg">
                     <h1 className="text-[20px] mt-2 font-bold border-black border">Hilights</h1>
                     <table class="min-w-full border border-blue-200 rounded-lg mt-4">
    <tbody>
      <tr class="border-b border-blue-200">
        <td class="px-4 py-2 border-r border-blue-200"></td>
        <td class="px-4 py-2"></td>
      </tr>
      <tr class="border-b border-blue-200">
        <td class="px-4 py-2 border-r border-blue-200"></td>
        <td class="px-4 py-2"></td>
      </tr>
      <tr class="border-b border-blue-200">
        <td class="px-4 py-2 border-r border-blue-200"></td>
        <td class="px-4 py-2"></td>
      </tr>
      <tr>
        <td class="px-4 py-2 border-r border-blue-200 rounded-bl-lg"></td>
        <td class="px-4 py-2 rounded-br-lg"></td>
      </tr>
    </tbody>
  </table>
                     </div>



                     <div className="mt-5 border-1 rounded-xl shadow-lg">
                     <h1 className="text-[20px] mt-2 font-bold border-black border">Courses</h1>
                     <table class="min-w-full border border-blue-200 rounded-lg mt-4">
    <tbody>
      <tr class="border-b border-blue-200">
        <td class="px-4 py-2 border-r border-blue-200"></td>
        <td class="px-4 py-2"></td>
      </tr>
      <tr class="border-b border-blue-200">
        <td class="px-4 py-2 border-r border-blue-200"></td>
        <td class="px-4 py-2"></td>
      </tr>
      <tr class="border-b border-blue-200">
        <td class="px-4 py-2 border-r border-blue-200"></td>
        <td class="px-4 py-2"></td>
      </tr>
      <tr>
        <td class="px-4 py-2 border-r border-blue-200 rounded-bl-lg"></td>
        <td class="px-4 py-2 rounded-br-lg"></td>
      </tr>
    </tbody>
  </table>
                     </div>

                     <div className="Tet_upload flex flex-col  shadow-lg border rounded-lg mt-3">

<h1 className="text-[20px] mt-2 font-bold border-black border">Addmission</h1>
<h2 className="text-[15px] mt-6">Description</h2>
<textarea className="w-[1074px]  h-[208px] border-black border-2"></textarea>
</div>   <div className="Tet_upload flex flex-col  shadow-lg border rounded-lg mt-3">

<h1 className="text-[20px] mt-2 font-bold border-black border">Placements</h1>
<h2 className="text-[15px] mt-6">Description</h2>
<textarea className="w-[1074px]  h-[208px] border-black border-2"></textarea>
</div>
<div className="Tet_upload flex flex-col  shadow-lg border rounded-lg mt-3">

<h1 className="text-[20px] mt-2 font-bold border-black border">Infrastructure</h1>
<h2 className="text-[15px] mt-6">Description</h2>
<textarea className="w-[1074px]  h-[208px] border-black border-2"></textarea>
</div>   
 </div>
</div>
</form></div>
    </>
  );
}

export default Colleges;
