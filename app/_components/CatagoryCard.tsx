import Image from 'next/image'
import React from 'react'
import img1 from '../../public/_images/woman-looking-black-shirt.jpg'
import Link from 'next/link'

type cartItems = {
    image : any,
    title : string,
}

const CatagoryCard = ({ image, title }:cartItems) => {

  return (
    <Link href={`/shop/${title}`} className="relative bg-white overflow-hidden shadow-xl hover:scale-105 transition duration-200 ease-in-out">
      <div className='relative h-65 w-full'>
        <Image 
        src={image} 
        alt="card"
        fill
        className='object-cover' />
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-2 text-[#24180c] text-lg bg-[#e5dccd]/70 px-2 '>{title}</div>
    </Link>
    );
}

export default CatagoryCard