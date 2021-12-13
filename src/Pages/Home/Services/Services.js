import React from 'react';
import ser1 from '../../../Images/service1.png';
import ser2 from '../../../Images/service2.png';
import ser3 from '../../../Images/service4.png';

const Services = () => {
    return (
        <div className='bg-white'>
            <h2 className='text-3xl font-bold pb-12'>Which services are <span className='text-green-700'>available</span></h2>
            {/* Card container */}
            <div className="cards flex justify-center align-center flex-wrap gap-x-2 px-24 py-8 flex-direction-column md:flex-nowrap">
            {/* Single card */}
            <div className="card box-border">
                    <img src={ser1} style={{ width: '20%', margin: '1rem auto' }} alt="" />
                    <h4 className='text-xl font-bold my-4'>Web and Mobile design</h4>
                    <p className='pb-8 px-12 text-gray-600'>Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Pariatur, minima.</p>
                </div>
                <div className="card box-border shadow-lg">
                    <img src={ser2} style={{ width: '20%', margin: '1rem auto' }} alt="" />
                    <h4 className='text-xl font-bold my-4'>Graphic Design</h4>
                    <p className='pb-8 px-12 text-gray-600'>Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Pariatur, minima.</p>
                </div>
                <div className="card box-border">
                    <img src={ser3} style={{ width: '20%', margin: '1rem auto' }} alt="" />
                    <h4 className='text-xl font-bold my-4'>Web development</h4>
                    <p className='pb-8 px-12 text-gray-600'>Lorem ipsum Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Pariatur, minima.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;