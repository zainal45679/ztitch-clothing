import Image from "next/image";
import React from "react";
import img1 from "../../../../public/_images/IMG_8994.jpg";
import img2 from "../../../../public/_images/p-2.webp";
import img3 from "../../../../public/_images/p-3.webp";
import img4 from "../../../../public/_images/p-4.webp";

const Page = () => {
  return (
    <div className="h-[90vh] flex bg-[#e5dccd] text-[#24180c]">
      <div className="relative w-1/2 h-full p-10 grid grid-cols-2 grid-rows-2 gap-3">
        <div className="relative">
          <Image src={img1} alt="image1" fill className="object-cover" />
        </div>
        <div className="relative">
          <Image src={img2} alt="image2" fill className="object-cover" />
        </div>
        <div className="relative">
          <Image src={img3} alt="image3" fill className="object-cover" />
        </div>
        <div className="relative">
          <Image src={img4} alt="image4" fill className="object-cover" />
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl ">COCO-WHITE</h1>
        <h1 className="text-3xl ">TROPICAL PRINT CUBAN COLLAR SHIRT</h1>
        <h1 className="text-3xl ">MRP ₹ 3,499</h1>
        <h1 className="text-lg -mt-3 opacity-50 ">(Incl. of all taxes)</h1>
        <div className="flex pt-5">
          <button className="bg-[#e5dccd] text-[#24180c] border p-5 py-2 text-xl">ADD TO CART</button>
          <button className="bg-[#24180c] text-[#e5dccd] p-5 py-2 text-xl">BUY IT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
