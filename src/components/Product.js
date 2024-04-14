import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { StarIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-formatter'; 
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { useEffect } from 'react';


const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({id, title, price, description, category, image}) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(1);

  const [hasPrime, setHasPrime] = useState(true);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);


const addItemToBaskat = () => {
  // dispatch the item into the data layer
  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    hasPrime,
  };

  // Sending the product as an action to the REDUX store... the basket slice
  dispatch(addToBasket(product));
};

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 '>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400 '>{category}</p>
        <div className="flex justify-center"> {/* Center the image */}
        <Image src={image} height={200} width={200} objectFit="contain" />
        </div>
        <h4 className='my-3'>{title}</h4>

        <div className='flex'>
          {Array(rating).fill().map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
        </div>
        
        <p className=' text-xs mt-2 my-2 line-clamp-2 '>{description}</p>
        <div className='mb-5'>
          <Currency quantity={price} currency="USD"/>
        </div>

        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5 '>
            <img src="https://tse3.mm.bing.net/th?id=OIP.XviBn-Aa8BeooSyXQ2rZ9QHaHa&pid=Api&P=0&h=180" alt="" className="w-9" />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}

        <button onClick={addItemToBaskat} className='mt-auto button'>Add to Basket</button>


    </div>
  )
}

export default Product
