"use client"

import CartCard from "../_components/cart-card";
import Link from "next/link";
import { useCart } from "react-use-cart";


const page = () => {

const {isEmpty, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) return <p className="bg-[#e5dccd] flex items-center justify-center text-[#24180c] text-center text-4xl h-[90vh]">Your cart is empty</p>;

  return (
    <div>
      <div className="bg-[#e5dccd] flex flex-col lg:flex-row justify-center w-full min-h-screen">
        <div className="grid md:grid-rows-1  md:gap-4 gap-1 md:p-4 lg:justify-end justify-center md:pr-2 p-2">
            {
                items.map((item, i)=>(
                    <CartCard key={i} id={item.id} image={item.image} title={item.name} size={item.size} color={item.color} quantity={item.quantity} price={item.price} />
                ))
            }
        </div>
        <div className=" lg:w-[40%] p-4 pl-2">
          <div className="bg-[#24180c]/70 text-left p-7 flex flex-col gap-5">
            <div>
              <h1 className="text-xl">CART TOTAL</h1>
              
            </div>
            <h1 className="text-xl">ITEM TOTAL</h1>
            <h1 className="text-xl">TOTAL</h1>
            <Link href="/cart/checkout" className="bg-[#e5dccd] text-center text-2xl text-[#24180c] p-3 w-full">
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default page;
