import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className=''>
                    <img src={assets.logo} className='md-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Discover a world of convenience and quality with our eCommerce platform, where shopping for your favorite products is just a click away

                    </p>
            </div>
            <div className=''>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li> 
                        <li>About us</li> 
                        <li>Delivery</li> 
                        <li>Privecy Policy</li>  

                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+919267999376</li>
                    <li>freelancer.software.dev@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
        <hr />
            <p className='py-5 text-m text-center'>Copyright @2024 baskitnest.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
