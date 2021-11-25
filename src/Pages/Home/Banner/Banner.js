import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../../Images/Frame.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='line '> 
            <div className='flex justify-between items-center flex-wrap bg-yellow-300'>
                <div className='px-5 w-full md:w-1/2 md:px-24'>
                    <div >
                        <div className='text-2xl font-bold text-left md:pl-3 md:text-4xl'>
                            Make Your Brand Grow For The Future World
                        </div>
                        <div className='text-md text-left md:pl-4 py-5 font-serif'>
                            We are the service prodivor for growing up your brand in your town.
                            Our team always try to make customers satisfied in the budget amount.
                        </div>
                        <div className='text-left md:pl-4'>
                            <NavLink to='/hire' className="bg-indigo-900 px-8 py-2 rounded-md text-white hover:bg-green-700 active:bg-indigo-600 focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none">Hire Us</NavLink>
                        </div>
                    </div>
                </div>
                <div className='w-full p-5 md:w-1/2 md:pr-24'>
                    <img src={banner} style={{ width: '100%' }} alt="bannerImage" />
                </div>
            </div>
        </div>
    );
};

export default Banner;