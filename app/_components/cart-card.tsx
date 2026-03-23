
"use client"
import React, { useState } from "react";
import img1 from "../../public/_images/IMG_9027.jpg";
import Image from "next/image";
import Bin from "@/svg/Bin";
import { useCart } from "react-use-cart";

type itemsCart = {
    id : string,
    image : any,
    title : string,
    size : string,
    color : string,
    quantity : any,
    price : number
}



const CartCard = ({id, image, title, size, color, quantity, price}: itemsCart) => {

const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();


  return (
    <div className="flex md:gap-6 gap-3 border-b md:p-6 p-3 md:w-150 sm:w-100 w-92 h-fit bg-white">
      <Image src={image} alt="img" className="md:w-40 md:h-52 w-20 h-26 object-cover" />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="md:text-xl text-lg font-medium text-[#24180c]">
              {title}
            </h2>
            <p className="text-gray-500 max-md:text-sm ">{size} | {color} | QTY 
              <button onClick={() => updateItemQuantity(id, (quantity ?? 0) - 1)} className="w-10 h-10 text-lg hover:bg-gray-100 active:scale-95 transition ">-</button> 
              {quantity} 
              <button onClick={() => updateItemQuantity(id, (quantity ?? 0) + 1)} className="w-10 h-10 text-lg hover:bg-gray-100 active:scale-95 transition">+</button> </p>
          </div>
          <Bin onClick={() => removeItem(id)} className="md:w-7 w-3 md:p-1 hover:bg-gray-200 duration-200"/>
        </div>
        <div className="flex justify-between items-center">
          <button className="font-semibold md:hover:bg-gray-200 hover:px-2 md:py-1 duration-200 text-[#24180c]">
            MOVE TO WISHLIST
          </button>
          <p className="font-semibold text-[#24180c]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
