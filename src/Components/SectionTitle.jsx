import React from 'react'
import SectionIcon from '../assets/section-icon.png'

function SectionTitle ({ titleText }) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img className='h-5 w-10 lg:h-7 w-13' src={SectionIcon} alt="" />
        <h1 className='text-primary-color text-xl font-extrabold lg:text-3xl'>{titleText}</h1>
    </div>
  )
}

export default SectionTitle