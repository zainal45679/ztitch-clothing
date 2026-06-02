"use client"

import CartCard from "../_components/cart-card";
import Link from "next/link";
import { useCart } from "react-use-cart";

const page = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } = useCart();

  if (isEmpty) return <p className="bg-[#e5dccd] flex items-center justify-center text-[#24180c] text-center text-4xl h-[90vh]">Your cart is empty</p>;

  return (
    <div>
      {/* Changed align-items to flex-start so the columns don't stretch to the bottom of the screen */}
      <div className="bg-[#e5dccd] flex flex-col lg:flex-row justify-center items-start w-full px-30 min-h-screen pt-8">
        
        {/* Left Column: Changed grid to flex flex-col */}
        <div className="flex flex-col gap-4 p-2 md:p-4 w-full lg:w-[55%] lg:items-end">
            {/* Inner wrapper to keep cards from getting too wide */}
            <div className="w-full max-w-3xl flex flex-col gap-4">
              {
                  items.map((item, i)=>(
                      <CartCard key={i} id={item.id} image={item.image} title={item.name} size={item.size} color={item.color} quantity={item.quantity} price={item.price} />
                  ))
              }
            </div>
        </div>
        
        {/* Right Column: Checkout Total */}
        <div className="lg:w-[35%] w-full p-4 pl-2 sticky top-8">
          <div className="bg-[#24180c] text-white text-left p-7 flex flex-col gap-5">
            <div className="border-b border-white/20 pb-4">
              <h1 className="text-3xl font-bold">CART TOTAL</h1>
            </div>
            
            <div className="flex justify-between items-center">
              <h1 className="text-xl">ITEM TOTAL</h1>
              <h1 className="text-xl">₹{cartTotal.toFixed(2)}</h1>
            </div>

            <div className="flex justify-between items-center font-bold">
              <h1 className="text-xl">TOTAL</h1>
              <h1 className="text-xl">₹{cartTotal.toFixed(2)}</h1>
            </div>

            <Link href="/cart/checkout" className="bg-[#e5dccd] font-semibold text-center text-2xl text-[#24180c] p-3 w-full hover:bg-white transition-colors">
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;