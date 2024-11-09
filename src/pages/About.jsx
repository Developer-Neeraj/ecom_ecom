import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                  <p>At BaskitNest, we specialize in providing a seamless and enjoyable online shopping experience. Our e-commerce platform offers a diverse range of high-quality products, from the latest gadgets to stylish apparel, all at competitive prices. We are dedicated to delivering exceptional customer service and ensuring that every purchase is smooth and satisfying. At BaskitNest, our mission is to make online shopping effortless and enjoyable for everyone.</p>
                  <p>BaskitNest is dedicated to revolutionizing the online shopping experience with a broad range of top-tier products and unmatched convenience. Our platform is designed to offer everything from innovative tech gadgets to trendy fashion, all at great value. We focus on delivering a user-friendly experience and personalized customer service, ensuring that every interaction is pleasant and every purchase is seamless. At BaskitNest, we are passionate about making online shopping accessible and enjoyable for all.</p>
                  <b className='text-gray-800'>Our Mission</b>
                  <p>At BaskitNest, our mission is to provide a superior online shopping experience with top-quality products and exceptional service. We aim to make every transaction smooth and enjoyable, ensuring complete customer satisfaction.</p>
            </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'}  text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm md-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>At BaskitNest, we uphold the highest standards of quality in every product we offer. Through rigorous quality assurance processes, we ensure that each item meets our stringent criteria for excellence and reliability.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>We prioritize convenience by providing an effortless shopping experience. Our user-friendly platform and streamlined processes ensure that finding and purchasing the products you need is quick and hassle-free..</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>We are dedicated to delivering exceptional customer service. Our team is committed to providing prompt, personalized assistance and resolving any issues to ensure a smooth and satisfying shopping experience for every customer.</p>
            </div>
            
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About