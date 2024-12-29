import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className='bg-gray-100 px-10 pt-20'>
      <div className='flex items-center justify-between bg-gray-300 px-7 py-4'>
        <div className='flex items-center gap-16 text-2xl font-semibold'>
          <ul className='flex items-center justify-between bg-gray-300 px-7 py-4 gap-8'>
            <li className=''>
              <NavLink 
              to="/"
              className={({isActive})=>`flex items-center gap-8 duration-200 border-gray-100 ${isActive?"text-orange-700":"text-gry-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`}>
              <img src={'./src/logo/icons8-job-64.png'} alt="Job Logo" className='object-contain h-16' />
              <div className=''>Find Jobs</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({isActive})=>`duration-200 border-gray-100 ${isActive?"text-orange-700":"text-gry-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col font-semibold text-lg'>
            <div>Emma R.</div>
            <span className='text-gray-500 whitespace-nowrap'>Quality Assurance</span>
          </div>
          <img src={'./src/logo/icons8-test-account-48.png'} alt="User Icon" className='h-12' />
        </div>
      </div>
      <div className='bg-gray-300 py-4 px-6 font-serif'>
        <div className='text-5xl font-semibold'>Find Your Dream Job Here</div>
      </div>      
    </div>
  )
}

export default Header