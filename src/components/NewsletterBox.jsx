import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    }

  return (
    <div className='text-center'>
    <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
    <p className='text-gray-400 mt-3'>
    Discover a world of convenience and quality with our eCommerce platform, where shopping for your favorite products is just a click away

    </p>
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 items-center flex gap-3 mt-5 mx-auto border pl-3'>
        <input type="email" placeholder="Enter your email address" className="w-full sm:flex-1 outline-none" required/>
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
    </form>
    </div>
  )
}

export default NewsletterBox