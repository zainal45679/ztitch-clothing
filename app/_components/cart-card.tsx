"use client";
import React from "react";
import Image from "next/image";
import Bin from "@/svg/Bin";
import { useCart } from "react-use-cart";

type itemsCart = {
  id: string;
  image: any;
  title: string;
  size: string;
  color: string;
  quantity: any;
  price: number;
};

const CartCard = ({
  id,
  image,
  title,
  size,
  color,
  quantity,
  price,
}: itemsCart) => {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <div className="flex md:gap-6 gap-4 p-4 md:p-6 w-full max-w-3xl bg-white h-fit mb-4">
      
      {/* Product Image */}
      <div className="relative w-28 h-36 md:w-36 md:h-48 flex-shrink-0 bg-gray-50 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h2 className="md:text-[18px] text-base font-semibold text-[#24180c] uppercase tracking-wide">
              {title}
            </h2>
            
            <p className="text-sm text-gray-500 font-medium mt-1">
              {color && <span className="capitalize">{color}</span>}
              {color && size && <span className="mx-2">•</span>}
              {size && <span>Size: {size}</span>}
            </p>
          </div>

          <button 
            onClick={() => removeItem(id)}
            className="p-1 text-gray-600 hover:text-red-500 transition-colors"
          >
            <Bin className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end mt-6">
          
          <div className="flex flex-col gap-3">
            {/* UPDATED: High Visibility Quantity Selector */}
            <div className="flex items-center border border-[#24180c]/30 rounded-sm w-fit">
              <button
                onClick={() => updateItemQuantity(id, (quantity ?? 0) - 1)}
                className="w-10 h-9 flex items-center justify-center text-2xl text-[#24180c] hover:bg-gray-100 transition-colors font-medium pb-1"
              >
                -
              </button>
              <div className="w-12 h-9 flex items-center justify-center border-x border-[#24180c]/30 text-base font-bold text-[#24180c]">
                {quantity}
              </div>
              <button
                onClick={() => updateItemQuantity(id, (quantity ?? 0) + 1)}
                className="w-10 h-9 flex items-center justify-center text-2xl text-[#24180c] hover:bg-gray-100 transition-colors font-medium pb-1"
              >
                +
              </button>
            </div>

            {/* Wishlist */}
            <button className="text-[11px] font-bold text-gray-500 hover:text-[#24180c] underline underline-offset-4 tracking-wider transition-colors text-left uppercase">
              MOVE TO WISHLIST
            </button>
          </div>

          <p className="font-bold text-lg md:text-xl text-[#24180c]">
            ₹{price?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;