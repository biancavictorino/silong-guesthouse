import React from 'react'
import EventsIcon from '../assets/events-icon.png'
import { Activity } from '../Data/Activities'
import Heart from '../assets/heart.png'
import Shine from '../assets/shine.png'
import Move from '../assets/move.png'

const Events = () => {
  return (
    <div className='h-auto relative lg:h-screen lg:flex flex-row lg:px-40'>
        <div className='px-8 py-12 bg-primary-color w-full lg:w-1/2'>
            <div className='flex flex-col items-center pb-12'>
                <img src={EventsIcon} alt="" className=''/>
                <p className='text-secondary-color text-sm font-extralight'>Special Events</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-secondary-color font-bold text-3xl'>Unleash Your Inner Surfer & Ignite Your Island Spirit!</h1>
                <p className='text-secondary-color font-light text-base leading-8'>Here at Silong, we offer a captivating calendar designed to immerse you in the rich culture, breathtaking beauty, and electrifying energy of our island paradise. From thrilling surfing adventures to captivating fire shows under the stars, prepare to create unforgettable memories.</p>
            </div>
        </div>
        <div className='relative px-8 py-16 flex flex-col items-center text-secondary-color lg:px-12'>
            <img src={Shine} alt="" className='absolute top-6 right-4'/>
            <img src={Move} alt="" className='absolute left-1 bottom-14 lg:bottom-10 lg:left-3'/>
            {
                Activity.map(act => (
                    <div className='relative'>
                        <img className='' src={act.image} alt="" />
                        <div className='bg-primary-color bg-opacity-70 w-4/5 py-2 pl-3 rounded-md absolute bottom-5 left-1'>
                            <h1 className='font-extrabold text-lg'>{act.title}</h1>
                            <p className='font-extralight text-sm'>{act.when}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Events