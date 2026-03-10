import Image from 'next/image'
import React from 'react'
import img1 from '../../public/_images/woman-looking-black-shirt.jpg'
import Link from 'next/link'

type cartItems = {
    image : any,
    title : string,
    caption : string,
    price : string
}

const Card = ({ image, title, caption, price }:cartItems) => {

  return (
    <Link href={`/shop/products/${title}`} className=" bg-white overflow-hidden shadow-xl hover:scale-105 transition duration-200 ease-in-out">
      <div className='h-65'>
        <Image 
        src={image} 
        alt="card"
        className='h-full object-cover' />
      </div>
      <div className='flex flex-col md:gap-1 p-3 -my-2'>
        <div>
          <h1 className="text-[#24180c] lg:text-2xl md:text-xl font-darker">{title}</h1>
          <p className="text-[#24180c] opacity-60 md:text-sm text-xs mb-1">{caption}</p>
        </div>
        <hr />
        <div className='flex items-end justify-end'>
          <h1 className="text-[#24180c] md:text-xl">
            {price}<span className="md:text-xl text-gray-700 opacity-75"> INR</span>
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default Card