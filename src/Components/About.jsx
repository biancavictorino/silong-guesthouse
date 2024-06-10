import React from 'react'
import { Heart } from '../Data/About'
import AboutImage from '../assets/about-image.png'

const About = () => {
  return (
    <section className='bg-tertiary-color px-8 py-12 flex flex-col justify-center items-center gap-8 md:flex-row-reverse lg:px-48 lg:gap-3 lg:py-24'>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-primary-color font-bold text-3xl md:text-4xl lg:text-4xl'>Mabuhay!</h1>
                <p className='text-text-color font-light text-sm leading-7 md:text-lg lg:text-base lg:items-center lg:leading-8'>Calling all surfers and adventure seekers! Our charming guesthouse is a surfer's paradise, located in the heart of Palawan, known for its epic breaks.  We offer cozy accommodations, warm hospitality, and can help you arrange unforgettable surfing adventures. Silong isn't just a guesthouse; it's a piece of the Philippines, where breathtaking beauty meets genuine hospitality.</p>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    Heart.map(about => (
                        <div className='flex flex-row' key={about.id}>
                            <img className='flex' src={about.image} alt="heart" />
                            <p className='text-primary-color text-sm font-medium lg:text-base'>{about.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='lg:h-96'>
            <img className='w-screen h-72 lg:h-96 lg:p-5' src={AboutImage} alt="" />
        </div>
    </section>
    // <div >
        
    // </div>
  )
}

export default About