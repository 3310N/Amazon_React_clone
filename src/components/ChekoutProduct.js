import React from 'react'
import Image from 'next/image'
import {StarIcon} from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'




function ChekoutProduct({id, title, price, description, category, image, hasPrime, rating}) {
    
    const dispatch = useDispatch();
    const addItemToBasket = () => {
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
    }

    const removeItemFromBasket = () => {
        // remove the item from the data layer
        dispatch(removeFromBasket({id}));
    
    };

  return <div className='grid grid-cols-5'>
         <Image src={image} 
            height={200}
            width={200}
            objectFit='contain'
            />
            {/* middle */} 
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500'/>
                    ))} 
            </div>
            <p className='text-xs my-2 line-clamp-3'>{description}</p> 
            <Currency quantity={price} currency='USD' />
            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img className='w-12' src='https://tse3.mm.bing.net/th?id=OIP.XviBn-Aa8BeooSyXQ2rZ9QHaHa&pid=Api&P=0&h=180' alt='' loading='lazy'/>
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            )}
    </div>
    {/* right add/remove buttons */}
    <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>Add to Basket</button>
        <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>

    </div>
</div>
  
}

export default ChekoutProduct
