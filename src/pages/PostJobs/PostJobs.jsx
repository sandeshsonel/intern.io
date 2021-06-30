import React, { useState } from "react";

const PostJobs = () => {
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputSkill.length > 0) {
      console.log("do validate");
      const exists = skills.find((skill) => skill === inputSkill);
      if (!exists && skills.length !== 5) {
        setSkills([...skills, inputSkill]);
      }
      setInputSkill("");
    }
  };

  const handleAddSkill = () => {
    const exists = skills.find((skill) => skill === inputSkill);
    if (!exists && skills.length !== 5 && inputSkill.length > 0) {
      setSkills([...skills, inputSkill]);
      setInputSkill("");
    }
    console.log("exists", exists);
  };

  console.log(skills);
  return (
    <div className="max-w-4xl m-auto">
      <div className="px-3 py-3 border">
        <div className="border-b py-2">
          <h1>Job details</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-full">
            <label htmlFor="">Position</label>
            <input
              className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
              type="text"
              placeholder="Web Developer"
            />
          </div>
          <div className="w-full">
            <label htmlFor="">Company Name</label>
            <input
              className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
              type="text"
              placeholder="Acme Inc."
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="">Location(s) allowed</label>
          <input
            className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
            type="text"
            placeholder="Anywhere"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Job category</label>

          <div className="flex items-center justify-between mt-1 relative border">
            <select className="w-full outline-none appearance-none focus:outline-none py-3 px-3" name="" id="">
              <option value="">USD</option>
              <option value="">Software Development</option>
              <option value="">Design</option>
              <option value="">Product</option>
              <option value="">Software Development</option>
              <option value="">Software Development</option>
            </select>

            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="">Industry / job tags (5 max)</label>

          <div className="px-2 py-2 mt-1 flex items-center border-2 border-black">
            <input
              onChange={(e) => setInputSkill(e.target.value)}
              onKeyDown={handleKeyDown}
              value={inputSkill}
              className="w-full px-2 outline-none focus:outline-none"
              type="text"
              placeholder="e.g. javascript"
            />
            <button onClick={handleAddSkill} className="px-1 py-1 bg-blue-600 text-white">
              Add
            </button>
          </div>
          {skills.length > 0 && (
            <div className="flex items-center space-x-2 mt-3 mb-3">
              {skills.map((skill, idx) => (
                <button
                  key={idx}
                  onClick={() => setSkills(skills.filter((ski) => ski !== skill))}
                  className="flex items-center space-x-1 px-2 py-2 bg-gray-200 rounded focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                >
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                      <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
                    </svg>
                  </div>
                  <div className="text-sm">{skill}</div>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center space-x-3 mt-4">
          <div>
            <label htmlFor="">Minimum salary</label>
            <input className="w-full mt-1 py-3 border-2 border-black px-3 outline-none focus:outline-none" type="text" placeholder="45,000" />
          </div>
          <div>
            <label htmlFor="">Maximum salary</label>
            <input className="w-full mt-1 py-3 border-2 border-black px-3 outline-none focus:outline-none" type="text" placeholder="65,200" />
          </div>
          <div>
            <label htmlFor="">Currency</label>
            <div className="relative mt-1 bg-white border-2 border-black">
              <select
                className="w-full md:w-60 lg:w-64 xl:w-64 py-3 px-2 bg-white cursor-pointer pr-8 appearance-none placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                name=""
                id=""
              >
                <option value="">USD</option>
                <option value="">Software Development</option>
                <option value="">Design</option>
                <option value="">Product</option>
                <option value="">Software Development</option>
                <option value="">Software Development</option>
              </select>

              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="">Salary interval</label>
            <div className="relative mt-1 bg-white border-2 border-gray-400">
              <select
                className="w-full md:w-60 lg:w-64 xl:w-64 py-3 px-2 bg-white cursor-pointer pr-8 appearance-none placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                name=""
                id=""
              >
                <option value="">USD</option>
                <option value="">Software Development</option>
                <option value="">Design</option>
                <option value="">Product</option>
                <option value="">Software Development</option>
                <option value="">Software Development</option>
              </select>

              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="">Application URL</label>
          <input
            className="w-full px-3 py-3 mt-1 border-2 border-black outline-none focus:outline-none"
            type="text"
            placeholder="https://mycompany.com/applicants/job/28"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Apply-to email</label>
          <input className="w-full px-3 py-3 border-2 border-black outline-none focus:outline-none" type="text" placeholder="hr@acme.com" />
        </div>
        <button className="w-full py-3 bg-black mt-2 text-white">Post your job</button>
      </div>
    </div>
  );
};

export default PostJobs;
