import React from 'react'

function Searchbar() {
  return (
    <div className='bg-gray-100 px-10'>
      <div className='px-6 py-4 bg-gray-300'>
          <div className='flex border p-6 bg-white border-white rounded-full'>
              <img src="./src/logo/icons8-search-30.png" alt="Search icon" className='mx-4 object-contain'/>
              <select className='w-lvw text-xl font-semibold'>
                  <option value="" disabled hidden selected>Job Role</option>
                  <option value="iOS Developer">iOS Developer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Android Developer">Android Developer</option>
                  <option value="Developer Advocate">Developer Advocate</option>
              </select>
              <img src="./src/logo/icons8-location-50.png" alt="Search icon" className='flex mx-4 object-contain' width={40}/>
              <select className='w-lvw text-xl font-semibold'>
                  <option value="" disabled hidden selected>Location</option>
                  <option value="Remote">Remote</option>
                  <option value="In-Office">In-Office</option>
                  <option value="Hybrid">Hybrid</option>
              </select>
              <img src="./src/logo/icons8-experience-48.png" alt="Search icon" className='flex mx-4 object-contain' width={40}/>
              <select className='w-lvw text-xl font-semibold'>
                  <option value="" disabled hidden selected>Experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="Junior Level">Junior Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
              </select>
              <img src="./src/logo/icons8-time-48.png" alt="Search icon" className='flex mx-4 object-contain' width={40}/>
              <select className='w-lvw text-xl font-semibold'>
                  <option value="" disabled hidden selected>Job Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
              </select>
              <button className='w-2/5 bg-blue-500 text-xl text-white font-bold py-4 rounded-full'>Search</button>
          </div>
      </div>
    </div>
  )
}

export default Searchbar