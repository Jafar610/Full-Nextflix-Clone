import React from 'react'
import logo from '../assets/Netflix_logo.png'
import profile from '../assets/Netflix-avatar.png'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navbar() {
  return (
    <>
        <nav className='bg-[#111]  text-white flex justify-between items-center p-3'>
            <div className='flex justify-center items-center'>
                <img src={logo} alt="" className='w-25 mr-10' />
                <ul className='flex justify-center items-center gap-5 text-gray-100'>
                    <li>Home</li>
                    <li>Tv Show</li>
                    <li>Movie</li>
                    <li>News & Popular</li>
                    <li>My List</li>
                </ul>
            </div>


            <div className='flex justify-center items-center gap-4'>
                <SearchIcon className='text-white cursor-pointer'/>
                <div className='flex justify-center items-center gap-2 cursor-pointer'>
                    <img src={profile} alt="" className='w-8 rounded-full'/>
                    <ArrowDropDownIcon className='text-white'/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar