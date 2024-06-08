import React, { useState } from 'react'
import PrimaryLogo from '../assets/primary-logo.png'
import PrimaryButton from './PrimaryButton'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    // const [menuOpen, setMenuOpen] = useState(flase);

  return (
    <div className='header py-6 flex flex-row justify-between items-center md:px-20'>
        <div className='logo'>
            <img src={PrimaryLogo} alt="Silong" className="w-12 h-12" />
        </div>
        <div className='hidden text-base gap-2 w-auto'> 
            <a href="#" className='p-4 text-text-color' >Home</a>
            <a href="#" className='p-4 text-text-color'>Rooms</a>
            <a href="#" className='p-4 text-text-color'>Events</a>
            <a href="#" className='p-4 text-text-color'>Cuisine</a>
        </div>
        {/* <PrimaryButton btnText={'Book Now'}/> */}
        <AiOutlineMenu className='text-primary-color w-6 h-6' />
    </div>

  )
}

export default Navbar