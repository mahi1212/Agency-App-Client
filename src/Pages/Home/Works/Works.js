import React from 'react';
import img1 from '../../../Images/carousel-1.png'
import img2 from '../../../Images/carousel-2.png'
import img3 from '../../../Images/carousel-3.png'
import img5 from '../../../Images/carousel-5.png'

const Works = () => {
  return (
    <div className='bg-purple-900 py-8'>
      <h2 className='text-3xl font-semibold text-white pt-8'>Here are some of <span className='text-green-400'>our works</span></h2>
      <section class="overflow-hidden text-gray-700">
        <div class="container px-5 mx-auto h-min lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={img2} />
              </div>
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={img3} />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={img1} />
              </div>
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={img5} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;