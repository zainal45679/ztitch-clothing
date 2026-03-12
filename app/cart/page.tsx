import React from "react";
import img1 from "../../public/_images/IMG_9027.jpg";
import img2 from "../../public/_images/IMG_8992.jpg";
import img3 from "../../public/_images/IMG_8994.jpg";
import img4 from "../../public/_images/IMG_9024.jpg";
import Image from "next/image";
import Cart from "../_layouts/Cart";
import CartCard from "../_components/cart-card";

const products = [
  {
    image: img1,
    title: "PHEX - BLACK",
    qty: 2,
    price: "2599/-",
    size : "S",
    color : "BLACK",
  },
  {
    image: img2,
    title: "ROW-S26 - DUSKY BLUE",
    qty: 1,
    price: "1999/-",
    size : "S",
    color : "BLUE",
  },
  {
    image: img3,
    title: "COCO - WHITE",
    qty: 2,
    price: "2799/-",
    size : "S",
    color : "WHITE",
  },
  {
    image: img4,
    title: "MELFI - TEAL",
    qty: 1,
    price: "2999/-",
    size : "S",
    color : "TEAL",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[#e5dccd] flex flex-col lg:flex-row justify-center w-full min-h-screen">
        <div className="grid md:grid-rows-1  md:gap-4 gap-1 md:p-4 lg:justify-end justify-center md:pr-2 p-2">
            {
                products.map((item, i)=>(
                    <CartCard key={i} image={item.image} title={item.title} size={item.size} color={item.color} qty={item.qty} price={item.price}/>
                ))
            }
        </div>
        <div className=" lg:w-[40%] p-4 pl-2">
          <div className="bg-[#24180c]/70 text-left p-7 flex flex-col gap-5">
            <h1 className="text-xl">CART TOTAL</h1>
            <h1 className="text-xl">ITEM TOTAL</h1>
            <h1 className="text-xl">TOTAL</h1>
            <button className="bg-[#e5dccd] text-2xl text-[#24180c] p-3 w-full">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default page;
