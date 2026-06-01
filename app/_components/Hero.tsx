"use client";
import Image from "next/image";
import React, { useState } from "react";
import Arrow from "@/svg/Arrow";
import img1 from "../../public/_images/Final_image_1.png";
import img2 from "../../public/_images/Final_image_2.png";
import img3 from "../../public/_images/Final_image_3.png";
import img4 from "../../public/_images/Final_image_4.png";
import imgs1 from "../../public/_images/Final_image_small_2.jpg";
import imgs2 from "../../public/_images/Final_image_small_1.jpg";
import imgs3 from "../../public/_images/Final_image_small_3.jpg";
import imgs4 from "../../public/_images/Final_image_small_4.jpg";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { bannerApi } from "@/api/banner-api";
import { baseUrl, storageUrl } from "@/utils/base-url";

const Hero = () => {
  // const images = [
  //   {
  //     image: img2,
  //     subheading: "SUMMER SALE",
  //     heading: "30% Discount",
  //     description: "Grab It before the SALE ends",
  //     imageSmall: imgs3
  //   },
  //   {
  //     image: img1,
  //     subheading: "BLACK FRIDAY SALE",
  //     heading: "20% Discount",
  //     description: "Offers only Till 31st",
  //     imageSmall: imgs2
  //   },
  //   {
  //     image: img3,
  //     subheading: "ELEVATE YOUR STYLE",
  //     heading: "Modern Formals",
  //     description: "Confidence in every   Z'titch.",
  //     imageSmall: imgs1
  //   },
  //   {
  //     image: img4,
  //     subheading: "SUMMER BLOOMS",
  //     heading: "Timeless Florals",
  //     description: "Soft prints. Bold charm",
  //     imageSmall: imgs4
  //   },
  // ];

  const [index, setIndex] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ["banners"],
    queryFn: bannerApi.getAllBanner,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const banners = data?.data?.banners;

  const textColor = index > 1 ? "text-[#4b2e2e]" : "text-gray-200";
  const textColorSmall =
    index == 0 || index == 3 ? "text-[#4b2e2e]" : "text-gray-400";

  const handleNext = () => {
    index == banners?.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const handlePrev = () => {
    index == 0 ? setIndex(banners?.length - 1) : setIndex(index - 1);
  };

  return (
    <div className="relative h-[90vh] w-auto ">
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-w-full h-full relative"
        >
          <Image
            src={`${storageUrl}${banners[index].image}`}
            alt="banner"
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>
      </div>
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="h-full"
      >
        <div
          className={`${index <= 1 ? "md:text-gray-200" : "md:text-[#24180c]"} ${textColorSmall} absolute flex flex-col md:items-center max-md:gap-3 max-md:p-10 justify-center max-md:justify-end max-md:pb-20 inset-0`}
        >
          <h1 className="md:text-[70px] text-[35px] font-bold -mt-7">
            {banners[index].description}
          </h1>
          {/* <p className="md:text-2xl text-[20px] md:-mt-4 -mt-6">{data[index].description}</p> */}
        </div>
      </motion.div>
      <Arrow
        onClick={handlePrev}
        className="absolute flex flex-col items-center justify-center md:w-10 w-8 top-1/2 md:left-7 left-3 -translate-y-1/2 text-[#24180c]/40"
      />
      <Arrow
        onClick={handleNext}
        className="absolute flex flex-col items-center justify-center md:w-10 w-8 top-1/2 md:right-7 right-3 -translate-y-1/2 rotate-180 text-[#24180c]/40"
      />
    </div>
  );
};

export default Hero;
