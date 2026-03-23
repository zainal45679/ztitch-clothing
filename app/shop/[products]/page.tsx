"use client";

import React, { useEffect, useState } from "react";
import img1 from "../../../public/_images/IMG_9027.jpg";
import img2 from "../../../public/_images/IMG_8992.jpg";
import img3 from "../../../public/_images/IMG_8994.jpg";
import img4 from "../../../public/_images/IMG_9024.jpg";
import img5 from "../../../public/_images/IMG_9025.jpg";
import Card from "@/app/_components/Card";
import CardSkeleton from "@/app/_components/CardSkeleton";

const products = [
  {
    image: img1,
    title: "PHEX - BLACK",
    color: "BLACK",
    caption: "FLORAL PRINT REGULAR FIT",
    price: 2599,
    size: "S",
    quantity : 1
  },
  {
    image: img2,
    title: "ROW-S26 - DUSKY BLUE",
    color: "BLUE",
    caption: "REGULAR FIT MERCERISED POLO",
    price: 1999,
    size: "M",
    quantity : 1
  },
  {
    image: img3,
    title: "COCO - WHITE",
    color: "WHITE",
    caption: "TROPICAL PRINT CUBAN SHIRT",
    price: 2799,
    size: "L",
    quantity : 1
  },
  {
    image: img4,
    title: "MELFI - TEAL",
    color: "TEAL",
    caption: "REGULAR FIT CHECKED PRINT",
    price: 2999,
    size: "S",
    quantity : 1
  },
  {
    image: img5,
    title: "BEACH - GREEN",
    color: "GREEN",
    caption: "LOOSE FIT BEACH SHIRT",
    price: 2399,
    size: "XL",
    quantity : 1
  },
];

const page = () => {
  const [inputValue, setInputValue] = useState("");

  const [handleSort, setHandleSort] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // simulate loading

    return () => clearTimeout(timer);
  }, []);

  let order = "asc";

  const filteredProduct = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  const sortedArray = [...filteredProduct].sort((a, b) => {
    return a.price - b.price;
  });

  return (
    <div className="bg-[#e5dccd] ">
      <div className="bg-[#24180c]/30 h-13 px-4">
        <div className="flex items-center justify-between h-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent rounded px-2 py-1 text-2xl outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1 className="text-3xl">5 PRODUCTS</h1>
          <button
            onClick={() => {
              setHandleSort(!handleSort);
            }}
            className="text-white bg-[#24180c]/70 px-3 py-1 rounded text-2xl"
          >
            SORT BY PRICE
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:grid-rows-2 md:gap-4 gap-2 md:pt-7 pt-2 px-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)
          : (handleSort ? filteredProduct : sortedArray).map((items, i) => (
              <Card
                key={i}
                image={items.image}
                title={items.title}
                caption={items.caption}
                price={items.price}
                size={items.size}
                color={items.color}
                id={i.toString(16)}
                quantity={items.quantity}
              />
            ))}
      </div>
    </div>
  );
};

export default page;
