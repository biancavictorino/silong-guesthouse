import React, { useState } from 'react'
import PrimaryLogo from '../assets/primary-logo.png'
import PrimaryButton from './PrimaryButton'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpen = () => {
      setMenuOpen(!menuOpen);
    }

  return (
    <div className='header absolute w-full px-8 py-6 flex flex-row justify-between items-center md:px-28'>
        <div className='logo'>
            <img src={PrimaryLogo} alt="Silong" className="w-12 h-12" />
        </div>
        <div className='hidden text-base gap-2 w-auto md:flex'> 
            <a href="#home" className='p-4 text-text-color cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200' >Home</a>
            <a href="#rooms" className='p-4 text-text-color cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200'>Rooms</a>
            <a href="#events" className='p-4 text-text-color cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200'>Events</a>
            <a href="#cuisine" className='p-4 text-text-color cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200'>Cuisine</a>
        </div>

        <div className='hidden md:flex'>
          <PrimaryButton btnText={'Book Now'}/>
        </div>

        <AiOutlineMenu onClick={handleOpen} className='text-primary-color w-6 h-6 md:hidden' />
        
        <div className={`${menuOpen ? 'bg-secondary-color fixed h-screen right-0 top-0 w-3/4 z-40 flex flex-col justify-center items-center gap-10 transition ease-in-out duration-300 shadow-lg shadow-slate-400' : 'hidden'}`}>
          <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='text-text-color h-6 w-6 absolute top-9 right-8 cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200SS'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <a href="#home" className='text-text-color text-base cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200'>Home</a>
          <a href="#rooms" className='text-text-color text-base cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200'>Rooms</a>
          <a href="#events" className='text-text-color text-base cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200'>Events</a>
          <a href="#cuisine" className='text-text-color text-base cursor-pointer hover:text-primary-color hover:scale-110 transition ease-in-out duration-200s'>Cuisine</a>
      </div>
    </div>

  )
}

export default Navbar