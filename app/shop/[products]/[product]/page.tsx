import Image from "next/image";
import React from "react";
import img1 from "../../../../public/_images/IMG_8994.jpg";
import img2 from "../../../../public/_images/p-2.webp";
import img3 from "../../../../public/_images/p-3.webp";
import img4 from "../../../../public/_images/p-4.webp";

const Page = () => {
  return (
    <div className="min-h-[90vh] flex md:flex-row flex-col bg-[#e5dccd] text-[#24180c]">

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-full p-4 md:p-10 hidden md:grid grid-cols-2 grid-rows-2 gap-3">
        {[img1, img2, img3, img4].map((img, i) => (
          <div key={i} className="relative">
            <Image src={img} alt="product" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory w-full h-[50vh]">
        {[img1, img2, img3, img4].map((img, i) => (
          <div key={i} className="relative min-w-full snap-center">
            <Image src={img} alt="product" fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2 p-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl">COCO-WHITE</h1>
        <h1 className="text-xl md:text-3xl">
          TROPICAL PRINT CUBAN COLLAR SHIRT
        </h1>
        <h1 className="text-2xl md:text-3xl">MRP ₹ 3,499</h1>
        <h1 className="text-sm md:text-lg -mt-2 opacity-50">
          (Incl. of all taxes)
        </h1>

        <div className="flex pt-5 gap-2 flex-col md:flex-row w-full md:w-auto">
          <button className="bg-[#e5dccd] text-[#24180c] border p-4 md:p-5 py-2 text-lg md:text-xl w-full md:w-auto">
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