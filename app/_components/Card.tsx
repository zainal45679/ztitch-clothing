"use client"
import Image from 'next/image'
import React from 'react'
import img1 from '../../public/_images/woman-looking-black-shirt.jpg'
import Link from 'next/link'
import { useCart } from 'react-use-cart'

type cartItems = {
    image : any,
    title : string,
    caption : string,
    price : number,
    size : string,
    color : string,
    id : string
    quantity : number
}



const Card = ({ image, title, caption, price, size, color, id, quantity }:cartItems) => {
  
const { addItem, items } = useCart();

const cardProducts = {
  
  image : image,
  name : title,
  size : size,
  color : color,
  price : price,
  id : id,
  quantity : quantity
}

  return (
<div className="bg-white overflow-hidden shadow-xl hover:scale-105 transition">

  <Link href={`/shop/products/${title}`}>
    <div className='h-65'>
      <Image 
        src={image} 
        alt="card"
        className='h-full object-cover'
      />
    </div>

    <div className='flex flex-col md:gap-1 p-3 -my-2'>
      <h1 className="text-[#24180c] lg:text-2xl md:text-xl">
        {title}
      </h1>
      <p className="text-[#24180c] opacity-60 md:text-sm text-xs mb-1">
        {caption}
      </p>
      <hr />
    </div>
    
  </Link>

  

  <div className='flex justify-between items-center p-3 pt-0 pb-2'>
    <button
      onClick={(e) => {
        addItem(cardProducts);
      }}
      className='text-sm text-[#24180c] hover:bg-gray-200 hover:px-2 duration-200'
    >
      ADD TO CART
    </button>

    <div className='text-[#24180c] text-xl'>
      {price}
      <span className="text-[#24180c] opacity-75"> INR</span>
    </div>
  </div>

</div>
  );
}

export default Card