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
    <div className='header px-8 py-6 flex flex-row justify-between items-center md:px-28'>
        <div className='logo'>
            <img src={PrimaryLogo} alt="Silong" className="w-12 h-12" />
        </div>
        <div className='hidden text-base gap-2 w-auto md:flex'> 
            <a href="#home" className='p-4 text-text-color' >Home</a>
            <a href="#" className='p-4 text-text-color'>Rooms</a>
            <a href="#" className='p-4 text-text-color'>Events</a>
            <a href="#" className='p-4 text-text-color'>Cuisine</a>
        </div>

        <div className='hidden md:flex'>
          <PrimaryButton btnText={'Book Now'}/>
        </div>

        <AiOutlineMenu onClick={handleOpen} className='text-primary-color w-6 h-6 md:hidden' />
        
        <div className={`${menuOpen ? 'bg-secondary-color fixed h-screen right-0 top-0 w-full z-40 flex flex-col justify-center items-center gap-10' : 'hidden'}`}>
          <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='text-text-color h-6 w-6 absolute top-9 right-8'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <a href="#home" className='text-text-color text-base'>Home</a>
          <a href="#" className='text-text-color text-base'>Rooms</a>
          <a href="#" className='text-text-color text-base'>Events</a>
          <a href="#" className='text-text-color text-base'>Cuisine</a>
      </div>
    </div>

  )
}

export default Navbar