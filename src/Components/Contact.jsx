import React from 'react'
import ContactImage from '../assets/contact-image.png'
import Shine from '../assets/shine.png'
import PrimaryButton from './PrimaryButton'
import Input from './Input'

const Contact = () => {
  return (
    <div className='px-10 py-24 h-auto text-secondary-color lg:px-28 relative'>
        <img src={Shine} alt="" className='absolute top-10 right-2 lg:right-16 lg:top-14'/>
        <img src={Shine} alt="" className='absolute bottom-11 left-2 lg:left-16 lg:bottom-14'/>
        <div className='bg-primary-color p-8 flex flex-col-reverse rounded-2xl items-center overflow-hidden lg:flex-row-reverse lg:justify-between'>
            <div>
                <img className='p-2 lg:p-0' src={ContactImage} alt="" />
            </div>
            <div className='p-2 flex flex-col gap-3 items-start w-full pb-6 lg:w-1/2 lg:px-8'>
                <h1 className='font-bold text-2xl lg:text-4xl lg:py-3'>Book your stay now!</h1>
                <form action="" className='flex flex-col gap-3 w-full overflow-hidden font-extralight'>
                    <Input 
                        inputLabel={'Name:'} 
                        inputType={'text'} 
                    />
                    <div className='flex flex-row gap-3'>
                        <div className='w-1/2'>
                            <Input 
                                inputLabel={'Check-In:'} 
                                inputType={'date'} 
                            />
                        </div>
                        <div className='w-1/2'>
                            <Input 
                                    inputLabel={'Check-In:'} 
                                    inputType={'date'} 
                            />
                        </div>
                    </div>
                    <Input 
                        inputLabel={'Room Preference:'} 
                        inputType={'text'} 
                    />
                    <div className='py-3'>
                        <PrimaryButton 
                            btnText={'Book Now'} 
                            styles={'border-secondary-color text-secondary-color font-semibold hover:scale-95 hover:bg-secondary-color hover:text-primary-color transition ease-in-out'} 
                        />
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact