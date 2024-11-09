import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    
    // Fix: Correctly using array destructuring
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5)); // Set only the top 5 bestsellers
    }, []); 

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLER'} />
                <p className='w-3/4 m-auto sm:text-base text-gray-600'>
                    Discover a world of convenience and quality with our eCommerce platform, where shopping for your favorite products is just a click away.
                </p>
            </div>
            {/* Rendering BestSeller Products */}
            <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                    
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

                ))
                }
            </div>
            
        </div>
    );
}

export default BestSeller;
