"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "../../public/_images/IMG_9033.jpg";
import img2 from "../../public/_images/IMG_8997.jpg";
import img3 from "../../public/_images/IMG_9032.jpg";
import img4 from "../../public/_images/IMG_8999.jpg";
import img5 from "../../public/_images/Belt.png";

const Grid = () => {
  return (
    <div className="bg-[#24180c] md:p-6 p-2 max-md:py-6">
      <div className="flex flex-col items-center justify-center md:gap-3 md:pb-6 pb-3 ">
        <h1 className="text-gray-200 font-normal md:text-6xl text-5xl">
          CATEGORIES
        </h1>
        <h2 className="text-gray-200 md:text-2xl text-lg">
          These are the categories
        </h2>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-6 md:gap-4 gap-2 h-[80vh]">
        <div className="md:row-span-2 row-span-3 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-full"
          >
            <Image
              src={img1}
              alt="Gents"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute bottom-3 left-3 md:text-2xl bg-[#24180c] px-3 py-1 text-gray-200 opacity-50">
            TOP-WEARS
          </div>
        </div>

        <div className="md:row-span-2 row-span-3 relative md:hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true}}
            className="h-full"
          >
          <Image
            src={img4}
            alt="Ladies"
            className="w-full h-full object-cover"
          />
          </motion.div>
          <div className="absolute bottom-3 left-3 md:text-2xl bg-[#24180c] px-3 py-1 text-gray-200 opacity-50">
            BOTTOM-WEARS
          </div>
        </div>
        <div className="md:row-span-2 row-span-3 relative md:block hidden">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true}}
            className="h-full"
          >
          <Image
            src={img4}
            alt="Ladies"
            className="w-full h-full object-cover"
          />
          </motion.div>
          <div className="absolute bottom-3 left-3 md:text-2xl bg-[#24180c] px-3 py-1 text-gray-200 opacity-50">
            BOTTOM-WEARS
          </div>
        </div>

        <div className="max-md:col-span-2 max-md:row-span-2 col-span-1 relative md:hidden">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="h-full"
          >
          <Image
            src={img3}
            alt="Daily"
            className="w-full h-full object-cover"
          />
          </motion.div>
          <div className="absolute bottom-3 left-3 md:text-2xl bg-[#24180c] px-3 py-1 text-gray-200  opacity-50">
            SNEAKERS
          </div>
        </div>
        <div className="max-md:col-span-2 max-md:row-span-2 col-span-1 relative md:block hidden">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="h-full"
          >
          <Image
            src={img3}
            alt="Daily"
            className="w-full h-full object-cover"
          />
          </motion.div>
          <div className="absolute bottom-3 left-3 md:text-2xl bg-[#24180c] px-3 py-1 text-gray-200  opacity-50">
            SNEAKERS
          </div>
        </div>
        <div className="max-md:col-span-2 relative col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-full"
          >
          <Image
            src={img2}
            alt="Sale"
            className="w-full h-full object-cover hidden md:block"
          />
          <Image
            src={img5}
            alt="Sale"
            className="w-full h-full object-cover block md:hidden"
          />
          </motion.div>
          <div className="absolute bottom-3 left-3 md:text-2xl bg-[#24180c] px-3 py-1 text-gray-200  opacity-50">
            BELTS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
