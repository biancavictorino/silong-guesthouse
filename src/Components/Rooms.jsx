import React from 'react'
import SectionTitle from './SectionTitle'
import { Room } from '../Data/Room'
import PrimaryButton from './PrimaryButton'

const Rooms = () => {
  return (
    <div className='px-8 py-8 h-auto flex flex-col'>
        <div className='py-8 lg:py-12'>
            <SectionTitle 
                titleText={'Check Out Our Rooms'}
            />
        </div>
        <div className='flex flex-col gap-20 lg:px-28 lg:py-6'>
            {
                Room.map(silong => (
                    <div className='flex flex-col gap-2 lg:flex-row' key={silong.id}>
                        <img src={silong.image} alt="" />
                        <div className=''>
                            <h1 className='text-primary-color text-xl font-bold lg:text-2xl'>{silong.title}</h1>
                            <div className='flex flex-row gap-2 items-center text-text-color font-light'>
                                <img src={silong.star} alt="" className='h-4'/>
                                <p>{silong.rating}</p>
                            </div>
                            <p className='text-text-color py-4 leading-8 text-justify lg:text-lg lg:leading-8'>{silong.description}</p>
                            <PrimaryButton btnText={'Book Now'}/>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Rooms