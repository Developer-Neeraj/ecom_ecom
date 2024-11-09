import React from 'react'
import {assets} from '../assets/assets.js';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sx sm:text-sm md:text-base text-gray-700'>
        <div className=''>
            <img src={assets.exchange_icon} className='w-12 m-auto md-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We Offer hassle free exchange policy</p>
        </div>
        <div className=''>
            <img src={assets.quality_icon} className='w-12 m-auto md-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We Procide 7 day free return policy</p>
        </div>
        <div className=''>
            <img src={assets.support_img} className='w-12 m-auto md-5' alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
        </div>
    </div>
  )
}

export default OurPolicy