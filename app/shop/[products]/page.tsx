"use client";

import React, { useEffect, useState } from "react";
import img1 from "../../../public/_images/IMG_9027.jpg";
import img2 from "../../../public/_images/IMG_8992.jpg";
import img3 from "../../../public/_images/IMG_8994.jpg";
import img4 from "../../../public/_images/IMG_9024.jpg";
import img5 from "../../../public/_images/IMG_9025.jpg";
import Card from "@/app/_components/Card";
import CardSkeleton from "@/app/_components/CardSkeleton";
import { productApi } from "@/api/product-api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { storageUrl } from "@/utils/base-url";

const page = () => {
  // console.log(data);

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

  const params = useParams();
  const categoryId = params.products as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ["Products", categoryId],
    queryFn: () => productApi.getProductsByCategory(categoryId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const apiProducts = data?.data?.data?.products;

  const filteredProduct = apiProducts.filter((product : any) =>
    product?.name?.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const sortedArray = [...filteredProduct].sort((a, b) => {
    return a.price - b.price;
  });

  return (
    <div className="bg-[#e5dccd]">
      <div className="bg-[#24180c]/30 h-13 px-4">
        <div className="flex items-center justify-between h-full gap-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent rounded px-2 py-1 md:text-2xl outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1 className="md:text-3xl text-sm">5 PRODUCTS</h1>
          <button
            onClick={() => {
              setHandleSort(!handleSort);
            }}
            className="text-white bg-[#24180c]/70 md:px-3 px-2 py-1 md:text-2xl text-sm"
          >
            SORT BY PRICE
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:grid-rows-2 md:gap-4 gap-2 md:pt-4 max-md:py-4 px-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)
          : (handleSort ? filteredProduct : sortedArray).map((items:any) => (
              <Card
                key={items._id}
                image={`${storageUrl}${items.image}`}
                title={items.name}
                caption={items.description}
                price={items.price}
                size={items.size}
                color={items.color}
                id={items._id}
                quantity={items.quantity}
              />
            ))}
      </div>
    </div>
  );
};

export default page;
