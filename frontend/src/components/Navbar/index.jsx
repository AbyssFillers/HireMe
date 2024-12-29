import React from 'react';
import {Link, NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-gray-100 px-10 pt-20'>
      <div className='flex items-center justify-between bg-gray-300 px-7 py-4'>
        <div className='flex items-center gap-16 text-2xl font-semibold'>
          <img src={'./src/logo/icons8-job-64.png'} alt="Job Logo" className='object-contain h-16' />
          <div>Find Jobs</div>
          <div>About Us</div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col font-semibold text-lg'>
            <div>Emma R.</div>
            <span className='text-gray-500 whitespace-nowrap'>Quality Assurance</span>
          </div>
          <img src={'./src/logo/icons8-test-account-48.png'} alt="User Icon" className='h-12' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;