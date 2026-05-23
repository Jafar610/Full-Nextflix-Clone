import React from 'react'
import logo from '../assets/Netflix_logo.png'
function Footer() {
  return (
    <>
      <div className='flex justify-between items-center bg-[#111] '>
        <div>
            <img src={logo} alt="netflix logo" className='w-20' />
            
        </div>
        <div>
            <ul className='text-white'>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Tv shows</li>
            </ul>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer