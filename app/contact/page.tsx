import Image from "next/image";
import React from "react";
import img1 from "../../public/_images/Contact1.jpg";
import img2 from "../../public/_images/ContactSmall.png"
import Mail from "@/svg/Mail";
import Phone from "@/svg/Phone";
import Location from "@/svg/Location";

const Contact = () => {
  return (
    <div className="relative md:h-[90vh] h-[60vh] bg-[#e5dccd]">
      <Image
        src={img1}
        alt="Bg"
        fill
        className="object-cover hidden md:block"
      />
      <Image
        src={img2}
        alt="Bg"
        fill
        className="object-cover block md:hidden"
      />
      <div className="absolute left-1/2 -translate-x-1/2 md:top-10 top-5 md:text-6xl text-3xl text-[#24180c]/40">- CONTACT US -</div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex max-md:flex-col md:gap-10 gap-3 bg-[#24180c]/80 text-gray-200 md:p-10 p-6">
        <div className="text-left flex items-center  gap-4">
          <Location className="md:w-8 w-7 md:h-8 h-7 text-gray-200" />
          <div>
            <h1 className="md:text-3xl">ADDRESS</h1>
            <h1 className="md:text-xl">RR-CP NEW DELHI</h1>
          </div>
        </div>

        <div className="text-left flex items-center gap-5">
          <Phone className="md:w-7 w-6 md:h-7 h-6 text-gray-200" />
          <div>
            <h1 className="md:text-3xl">CALL</h1>
            <h1 className="md:text-xl">+91 9744145679</h1>
            
          </div>
        </div>

        <div className="text-left flex items-center gap-4">
          <Mail className="md:w-9 w-7 md:h-10 h-7 text-gray-200" />
          <div>
            <h1 className="md:text-3xl">EMAIL</h1>
            <p className="md:text-lg text-gray-300">ztitchcloting@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
