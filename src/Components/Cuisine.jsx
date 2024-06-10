import React from 'react'
import SectionTitle from './SectionTitle'
import { Food } from '../Data/Cuisine'

const Cuisine = () => {
  return (
    <div className='px-8 py-12 lg:px-44'>
        <div className='py-8 items-center flex flex-col gap-4'>
            <SectionTitle titleText={'Our Cuisine'}/>
            <p className='text-center text-text-color leading-8 lg:w-3/4'>Silong proudly showcase the rich tapestry of Filipino cuisine, offering a vibrant fusion of flavors, fresh local ingredients, and age-old traditions passed down through generations.</p>
        </div>
        <div className='flex flex-col items-center gap-4 lg:flex-row lg:px-14 lg:gap-8 lg:items-stretch'>
            {
                Food.map(yum => (
                    <div className='border-2 rounded-xl w-3/4 bg-secondary-color drop-shadow-xl lg:w-2/3'>
                        <img className='w-full' src={yum.image} alt="" />
                        <h1 className='px-4 pt-2 text-primary-color text-lg font-bold'>{yum.title}</h1>
                        <p className='px-4 pb-4 text-text-color'>{yum.description}</p>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Cuisine