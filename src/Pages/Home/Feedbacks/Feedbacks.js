import React from 'react';
import img1 from '../../../Images/customer-2.png'
import img2 from '../../../Images/customer-1.png'
import img3 from '../../../Images/customer-3.png'

const Feedbacks = () => {
    return (
        <div className='h-1/2 bg-white pb-40'>
            <h1 className='text-3xl font-bold py-16'>Clients <span className='text-green-500'>Feedback</span></h1>
            <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-2'>
                <div className="flex justify-center items-center">
                    <div className="block px-4 pt-2 pb-4 rounded-md border-2 border-slate-400 bg-white max-w-sm">
                        <div className="flex pb-4 ">
                            <img src={img1} className='w-14 mr-4' alt="" />
                            <div className='flex flex-col text-left'>
                                <h5 className="text-xl leading-tight font-bold mb-1">Barron Howk</h5>
                                <p className='font-semibold'>CEO, NeoTech</p>
                            </div>
                        </div>
                        <p className="text-base text-gray-500 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam ut soluta dolorem cupiditate fugiat magni iure est? Repellat, nam.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="block px-4 pt-2 pb-4 rounded-md border-2 border-slate-400 bg-white max-w-sm">
                        <div className="flex pb-4 ">
                            <img src={img2} className='w-14 mr-4' alt="" />
                            <div className='flex flex-col text-left'>
                                <h5 className="text-xl leading-tight font-bold mb-1">Mabi Jhon</h5>
                                <p className='font-semibold'>CEO, Softworld</p>
                            </div>
                        </div>
                        <p className="text-base text-gray-500 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam ut soluta dolorem cupiditate fugiat magni iure est? Repellat, nam.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="block px-4 pt-2 pb-4 rounded-md border-2 border-slate-400 bg-white max-w-sm">
                        <div className="flex pb-4 ">
                            <img src={img3} className='w-14 mr-4' alt="" />
                            <div className='flex flex-col text-left'>
                                <h5 className="text-xl leading-tight font-bold mb-1">Rafid jams</h5>
                                <p className='font-semibold'>CEO, Devhouse</p>
                            </div>
                        </div>
                        <p className="text-base text-gray-500 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam ut soluta dolorem cupiditate fugiat magni iure est? Repellat, nam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedbacks;