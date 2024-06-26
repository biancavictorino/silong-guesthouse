import React from 'react'
import Logo from '../assets/events-icon.png'

const Footer = () => {
  return (
    <div className='px-8 pt-12 pb-2 bg-primary-color text-secondary-color font-extralight lg:px-28'>
        <div className='flex flex-col gap-8 lg:flex-row lg:justify-around'>
            <div className='icon flex flex-col'>
                <img src={Logo} alt="" className='h-10 w-16'/>
                <p className='text-md w-3/4'>Unwind at Silong, your beachfront oasis for unforgettable experiences.</p>
            </div>
            <div className='about flex flex-col gap-2'>
                <h1 className='font-extrabold'>About</h1>
                <ul className='text-md flex flex-col gap-2'>
                    <li className='w-fit cursor-pointer relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-width before:duration-300 hover:before:w-full'>Home</li>
                    <li className='w-fit cursor-pointer relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-width before:duration-300 hover:before:w-full'>Rooms</li>
                    <li className='w-fit cursor-pointer relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-width before:duration-300 hover:before:w-full'>Events</li>
                    <li className='w-fit cursor-pointer relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-width before:duration-300 hover:before:w-full'>Cuisine</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-extrabold'>Reservations</h1>
                <ul className='text-md flex flex-col gap-2'>
                    <li className='w-fit cursor-pointer relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-width before:duration-300 hover:before:w-full'>Request an invoice</li>
                    <li className='w-fit cursor-pointer relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-width before:duration-300 hover:before:w-full'>Find a reservation</li>
                    <li className='w-fit cursor-pointer relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-width before:duration-300 hover:before:w-full'>Email Preferences</li>
                    <li className='w-fit cursor-pointer relative inline-block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-current before:transition-width before:duration-300 hover:before:w-full'>Book Now</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-extrabold'>Follow Us</h1>
                <ul className='flex flex-row gap-3'>
                    <li>
                        <svg className='hover:scale-125 transition ease-in-out' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="white"/>
                        </svg>
                    </li>
                    <li>
                        <svg className='hover:scale-125 transition ease-in-out' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3 5.55011C14.54 5.54999 13.8103 5.84824 13.2679 6.38068C12.7256 6.91313 12.4139 7.63721 12.4 8.39711L12.372 9.97211C12.3704 10.0567 12.3509 10.1399 12.3148 10.2164C12.2787 10.2929 12.2269 10.3609 12.1627 10.416C12.0985 10.471 12.0233 10.5119 11.9422 10.5359C11.8611 10.5599 11.7758 10.5664 11.692 10.5551L10.131 10.3431C8.07702 10.0631 6.10902 9.11711 4.22102 7.54411C3.62302 10.8541 4.79102 13.1471 7.60402 14.9161L9.35102 16.0141C9.43403 16.0663 9.50299 16.138 9.55187 16.223C9.60075 16.3079 9.62806 16.4036 9.63141 16.5016C9.63477 16.5996 9.61407 16.6969 9.57111 16.785C9.52816 16.8731 9.46426 16.9494 9.38502 17.0071L7.79302 18.1701C8.74002 18.2291 9.63902 18.1871 10.385 18.0391C15.103 17.0971 18.24 13.5471 18.24 7.69111C18.24 7.21311 17.228 5.55011 15.3 5.55011ZM10.4 8.36011C10.4175 7.39616 10.7189 6.45878 11.2666 5.66534C11.8142 4.87189 12.5838 4.25763 13.4789 3.89948C14.3741 3.54133 15.3549 3.45519 16.2988 3.65186C17.2426 3.84853 18.1074 4.31926 18.785 5.00511C19.496 5.00011 20.101 5.18011 21.454 4.36011C21.119 6.00011 20.954 6.71211 20.24 7.69111C20.24 15.3331 15.543 19.0491 10.777 20.0001C7.50902 20.6521 2.75702 19.5811 1.39502 18.1591C2.08902 18.1051 4.90902 17.8021 6.53902 16.6091C5.16002 15.7001 -0.32898 12.4701 3.27802 3.78611C4.97102 5.76311 6.68802 7.10911 8.42802 7.82311C9.58602 8.29811 9.87002 8.28811 10.401 8.36111L10.4 8.36011Z" fill="white"/>
                        </svg>
                    </li>
                    <li>
                        <svg className='hover:scale-125 transition ease-in-out' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.76462 4.53994 5.39541 4.78026 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.2338 19.4603 18.6027 19.2205 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" fill="white"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex flex-row gap-1 items-center justify-center pt-8 text-light text-sm lg:pt-16'>
            <p>Developed By</p>
            <a href="">Bianca Marie</a>
        </div>
    </div>
    
  )
}

export default Footer