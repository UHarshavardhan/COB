import React, { useState } from 'react';

function AddCourse({ course = {}, onSave, onCancel }) {
  const [name, setName] = useState(course?.name || "");
  const [image, setImage] = useState(course?.image || "");
  const [video, setVideo] = useState(course?.video || "");
  const [about, setAbout] = useState(course?.about || "");
  const [images, setImages] = useState(course?.images || []);
  const [videos, setVideos] = useState(course?.videos || []);
  const [eligibility, setEligibility] = useState(course?.eligibility || "");
  const [jobRoles, setJobRoles] = useState(course?.jobRoles || "");
  const [topRecruiters, setTopRecruiters] = useState(course?.topRecruiters || "");
  const [scope, setScope] = useState(course?.scope || "");
  const [benefits, setBenefits] = useState(course?.benefits || "");
  const [drawbacks, setDrawbacks] = useState(course?.drawbacks || "");
  const [popularityScore, setPopularityScore] = useState(course?.popularityScore || 0);
  const [carrierCategory, setCarrierCategory] = useState(course?.carrierCategory || "");


  const categories = ["Engineering & technology", "Law", "Medical", "Management", "Healthcare", "Designer", "Humanities & Arts", "Aerospace & Aviation", "Marketing","Animation","Others"];

  const handleSave = (e) => {
    e.preventDefault();
    const newCourse = {
      id: course?.id || Date.now(), // Use a timestamp as a fallback ID
      name,
      image,
      video,
      about,
      eligibility,
      jobRoles,
      topRecruiters,
      scope,
      benefits,
      drawbacks,
      popularityScore,
      carrierCategory,
      images,
      videos,
    };
    onSave(newCourse);
    // Reset form fields after save
    setName("");
    setImage("");
    setVideo("");
    setAbout("");
    setEligibility("");
    setJobRoles("");
    setTopRecruiters("");
    setScope("");
    setBenefits("");
    setDrawbacks("");
    setPopularityScore(0);
    setCarrierCategory("");
  };

  return (
    <form onSubmit={handleSave} className="p-5">
      <div className="flex flex-col space-y-5">

        {/* Course Name */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Course Name</label>
          <input
            type="text"
            placeholder="Enter course name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        {/* Image Link */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Image Link</label>
          <input
            type="text"
            placeholder="Enter image link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        {/* Video Link */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Video Link</label>
          <input
            type="text"
            placeholder="Enter video link"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>

        {/* About */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">About</label>
          <textarea
            placeholder="Enter course description"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Eligibility */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Eligibility</label>
          <textarea
            placeholder="Enter eligibility criteria"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Job Roles */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Job Roles</label>
          <textarea
            placeholder="Enter potential job roles"
            value={jobRoles}
            onChange={(e) => setJobRoles(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Top Recruiters */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Top Recruiters</label>
          <textarea
            placeholder="Enter top recruiters"
            value={topRecruiters}
            onChange={(e) => setTopRecruiters(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Scope */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Scope</label>
          <textarea
            placeholder="Enter scope of the course"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Benefits */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Benefits</label>
          <textarea
            placeholder="Enter benefits"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

        {/* Drawbacks */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Drawbacks</label>
          <textarea
            placeholder="Enter drawbacks"
            value={drawbacks}
            onChange={(e) => setDrawbacks(e.target.value)}
            className="border rounded-md p-2"
          ></textarea>
        </div>

              {/* Images */}
              <div className="flex flex-col space-y-2">
          <label className="font-semibold">Images</label>
          {images.map((image, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input

                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) =>
                  setImages(
                    images.map((i, idx) => (idx === index ? e.target.value : i))
                  )
                }
                className="border rounded-md p-2 flex-grow"
              />
              <button

                
                type="button"
                onClick={() => setImages(images.filter((_, idx) => idx !== index))}
                className="bg-red-500 text-white rounded-md px-2 py-1"
              >
                Remove
              </button>
            </div>
          ))}
          <button


            type="button"
            onClick={() => setImages([...images, ""])}
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >
            Add Image
          </button>
        </div>
        

        {/* Videos */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Videos</label>
          {videos.map((video, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Video URL"
                value={video}
                onChange={(e) =>
                  setVideos(
                    videos.map((v, idx) => (idx === index ? e.target.value : v))
                  )
                }
                className="border rounded-md p-2 flex-grow"
              />
              <button

                type="button"
                onClick={() => setVideos(videos.filter((_, idx) => idx !== index))}
                className="bg-red-500 text-white rounded-md px-2 py-1"
              >
                Remove
              </button>
            </div>
          ))}
          <button

            type="button"
            onClick={() => setVideos([...videos, ""])}
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >
            Add Video
          </button>
        </div>
        

        {/* Popularity Score */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Popularity Score</label>
          <input
            type="number"
            placeholder="Enter popularity score"
            value={popularityScore}
            onChange={(e) => setPopularityScore(Number(e.target.value))}
            className="border rounded-md p-2"
          />
        </div>

        {/* Carrier Category */}
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Carrier Category</label>
          <select
            value={carrierCategory}
            onChange={(e) => setCarrierCategory(e.target.value)}
            className="border rounded-md p-2"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddCourse;
