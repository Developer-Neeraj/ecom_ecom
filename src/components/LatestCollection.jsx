import React, {useContext, useState, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [LatestProducts, setLatestProduct] = useState([]);

    useEffect(() => {
        setLatestProduct(products.slice(0,10));
    },[])
      
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>

            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover a world of convenience and quality with our eCommerce platform, where shopping for your favorite products is just a click away
            </p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg-grid-cols-5 gap-4 gap-y-6'>
            {
                LatestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection