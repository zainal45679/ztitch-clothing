"use client"

import { schema } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const checkoutSchema = z.object({
    fname:z.string().min(5, "First Name is Required"),
    lname:z.string().min(3, "Last Name is Required"),
    phone:z.string().regex(/^\d+$/, "Phone number must contain only digits").min(10, "Phone Number should be minimum 10 numbers"),
    email:z.string().email({message : "Invalid Email"}),
    address:z.string().min(10, "Address is Required"),
    zip:z.string().regex(/^\d+$/, "Enter a valid PIN code").min(6, "ZIP code is Required"),
    country:z.string().min(5, "Please select a Country"),
})


type TcheckOut = z.infer<typeof checkoutSchema>

const submit = (data : TcheckOut) =>{
    console.log(data);
}

const page = () => {

const { register, handleSubmit, formState : { errors } } = useForm({ resolver: zodResolver(checkoutSchema)})


  return (
    <div>
      <div className="bg-[#e5dccd] min-h-[90vh] px-80">
        <div>
          <h1 className="text-4xl text-[#24180c] text-center p-5 ">
            - CHECK OUT -
          </h1>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#24180c]/85 w-[60%]">
            <div className="flex text-2xl p-5 w-full">
              <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3 w-full">
                <div className="flex gap-3 w-full">
                  <div className="w-full">
                    <input
                      {...register("fname")}
                      type="text"
                      placeholder="First Name"
                      className="border border-[#e5dccd]/30 p-2 w-full"
                    />
                    {errors.fname && ( <p className='text-red-500 text-sm'> {errors.fname.message as string} </p>)}
                  </div>
                  <div className="w-full">
                    <input
                      {...register("lname")} 
                      type="text"
                      placeholder="Last Name"
                      className="border border-[#e5dccd]/30 p-2 w-full"
                    />
                    {errors.lname && ( <p className='text-red-500 text-sm'> {errors.lname.message as string} </p>)}
                  </div>
                </div>
                <div>
                  <input
                    {...register("phone")}
                    type="text"
                    placeholder="Phone Number"
                    className="border border-[#e5dccd]/30 p-2 w-full"
                  />
                  {errors.phone && ( <p className='text-red-500 text-sm'> {errors.phone.message as string} </p>)}
                </div>
                <div>
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Email Address"
                    className="border border-[#e5dccd]/30 p-2 w-full"
                  />
                  {errors.email && ( <p className='text-red-500 text-sm'> {errors.email.message as string} </p>)}
                </div>
                <div>
                  <input
                    {...register("address")}
                    type="text"
                    placeholder="Address"
                    className="border border-[#e5dccd]/30 p-2 w-full"
                  />
                  {errors.address && ( <p className='text-red-500 text-sm'> {errors.address.message as string} </p>)}
                </div>
                <div>
                  <input
                    {...register("zip")}
                    type="text"
                    placeholder="Zip Code"
                    className="border border-[#e5dccd]/30 p-2 w-full"
                  />
                  {errors.zip && ( <p className='text-red-500 text-sm'> {errors.zip.message as string} </p>)}
                </div>
                <div>
                  <select {...register("country")} className="border text-[#e5dccd]/70 border-[#e5dccd]/30 p-2 w-full bg-transparent">
                        <option value="">Select Country / Region</option>
                        <option value="India">India</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="UAE">UAE</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Oman">Oman</option>
                   </select>
                   {errors.country && ( <p className='text-red-500 text-sm'> {errors.country.message as string} </p>)}
                </div>
                <div>
                  <button className="bg-[#e5dccd] text-[#24180c] w-full p-2">
                    SAVE & CONTINUE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col w-[40%] gap-2">
            <div className="bg-[#24180c]/90 h-fit p-5 text-2xl text-[#e5dccd] flex flex-col gap-2">
              <div className="flex justify-between">
                <h1>Item-total</h1>
                <h1>1000</h1>
              </div>
              <div className="flex justify-between">
                <h1>Shiping</h1>
                <h1>50</h1>
              </div>
              <div className="flex justify-between">
                <h1>Tax</h1>
                <h1>180</h1>
              </div>
              <hr className="opacity-30" />
              <div className="flex justify-between">
                <h1>TOTAL</h1>
                <h1>1230</h1>
              </div>
            </div>
            <div>
              <button className="text-2xl text-center bg-[#24180c] w-full p-2">CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
