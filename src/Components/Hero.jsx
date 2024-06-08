import React from 'react'
import PrimaryButton from './PrimaryButton'
import HeroImage from '../assets/hero-image.png'
import {Stats} from '../Data/Statistics'

const Hero = () => {
  return (
    <div className='py-10 flex flex-col-reverse lg:flex-row lg:px-20'>
        <div className='flex flex-col items-center md:w-3/5 lg:items-start'>
            <h1 className='text-primary-color font-bold py-5 text-3xl text-center lg:text-5xl lg:text-start'>Discover your home away from home at Silong.</h1>
            <h2 className='text-text-color text-md text-center lg:text-start'>After a thrilling day on the water,  relax in our comfortable accommodations and enjoy the tranquility of Palawan.</h2>
            <div className='py-6'>
                <PrimaryButton
                    btnText={'Take a Tour'}
                    styles={'text-secondary-color bg-primary-color'}
                />
            </div>
            <div className='flex flex-row justify-between py-8'>
                {
                    Stats.map(data => (
                        <div className='flex flex-row items-center'>
                            <h1 className='text-primary-color font-bold text-xl pl-2 lg:text-3xl lg:pl-0'>{data.total}</h1>
                            <p className='font-light text-text-color border-r-2 border-primary-color pr-2 text-sm lg:w-2/4'>{data.description}</p>
                        </div>
                    ))
                }


            </div>
        </div>
        <div className='flex justify-center items-center pr-6 pb-6 lg:w-1/2 lg:h-1/2 lg:ml-8'>
            <img src={HeroImage} alt="" />
        </div>

    </div>
  )
}

export default Hero