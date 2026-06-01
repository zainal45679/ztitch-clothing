"use client";
import Image from "next/image";
import React from "react";
import img1 from "../../../../public/_images/IMG_8994.jpg";
import img2 from "../../../../public/_images/p-2.webp";
import img3 from "../../../../public/_images/p-3.webp";
import img4 from "../../../../public/_images/p-4.webp";
import { useCart } from "react-use-cart";
import { useQuery } from "@tanstack/react-query";
import { productApi } from "@/api/product-api";
import { useParams } from "next/navigation";
import { storageUrl } from "@/utils/base-url";

const Page = () => {
  const { addItem, items } = useCart();

  const params = useParams();
  const productId = params.product as string;
  console.log(productId);

  const { data, isLoading, error } = useQuery({
    queryKey: ["Products", productId],
    queryFn: () => productApi.getProductById(productId!),
    enabled: !!productId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const product = data?.data?.data?.product



  return (
    <div className="min-h-[90vh] flex md:flex-row flex-col bg-[#e5dccd] text-[#24180c]">
      {/*
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-[90vh] p-4 md:p-10 hidden md:grid grid-cols-2 grid-rows-2 gap-3">
        {products.image.map((img, i) => (
          <div key={i} className="relative">
            <Image src={img} alt="product" fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory w-full h-[50vh]">
        {products.image.map((img, i) => (
          <div key={i} className="relative min-w-full snap-center">
            <Image src={img} alt="product" fill className="object-cover" />
          </div>
        ))}
      </div>
      */}


      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image
          src={`${storageUrl}${product[0].image}`}
          alt="product"
          width={400}
          height={500}
          className="object-contain w-full h-auto max-h-[80vh]"
        />
      </div>


      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2 p-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl">{product[0].name}</h1>
        <h1 className="text-xl md:text-3xl">{product[0].description}</h1>
        <h1 className="text-2xl md:text-3xl">MRP ₹ {product[0].price}</h1>

        <h1 className="text-sm md:text-lg -mt-2 opacity-50">
          (Incl. of all taxes)
        </h1>

        <div className="flex pt-5 gap-2 flex-col md:flex-row w-full md:w-auto">
          <button
            key={product[0]._id}
            onClick={() =>
              addItem({
                id: product[0]._id,
                name: product[0].name,
                price: product[0].price,
                size: product[0].size,
                color: product[0].color,
                image: `${storageUrl}${product[0].image}`, 
              })
            }
            className="bg-[#e5dccd] text-[#24180c] border p-4 md:p-5 py-2 text-lg md:text-xl w-full md:w-auto"
          >
            ADD TO CART
          </button>

          <button className="bg-[#24180c] text-[#e5dccd] p-4 md:p-5 py-2 text-lg md:text-xl w-full md:w-auto">
            BUY IT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
