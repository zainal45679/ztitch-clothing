"use client"

import React, { useState } from 'react'
import Password from '../_components/password'
import Eye from '@/svg/Eye'
import Link from 'next/link'
import z from "zod";
import { ZodAny } from 'zod'
import { Form, useForm } from 'react-hook-form'
import { error } from 'console'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'
import img1 from "../../public/_images/Contact2.jpg"
import img2 from "../../public/_images/ContactSmall2.png"
import Image from 'next/image'


const loginSchema = z.object({
    username: z.string().min(1, "Username is Required").email({message:"Invalid Email"}),
    password: z.string().min(8, "Minimum 8 characters required")
})

type Tlogin = z.infer<typeof schema>

const page = () => {

const { register, handleSubmit, formState : { errors } } = useForm({ resolver: zodResolver(loginSchema)})

const [pass, setPass] = useState("password")

const submit = (data : Tlogin) =>{
    console.log(data);
}

  return (
    <div className='flex relative items-center max-md:justify-center justify-end md:pr-[15%] h-[90vh] bg-[#e5dccd]'>
        <div className="absolute inset-0">
            <Image src={img1} alt="bg" fill className="object-cover max-md:hidden" />
            <Image src={img2} alt="bg" fill className="object-cover md:hidden" />
        </div>
        <form onSubmit={handleSubmit(submit)} className='flex relative z-10 flex-col  md:gap-4 gap-1 bg-[#24180c]/80 md:p-10 p-4 md:w-100 w-[85%]'>
            <div className='flex flex-col items-center'>
                <h1 className='md:text-4xl text-3xl'>LOG IN </h1>
                <h1 className='md:text-xl'>Sign in to get started</h1>
            </div>
            <div>
                <h1 className='text-2xl'>Email</h1>
                <input {...register("username")} type="text" placeholder='Enter your username' className='border border-[#e5dccd]/30 w-full p-2 text-xl' />
                {errors.username && ( <p className='text-red-500'> {errors.username.message as string} </p>)}
            </div>
            <div className='relative'>
                <Password registration={register("password")} type={pass} title='Password' place='Enter your password' className1='text-2xl' className2='border border-[#e5dccd]/30 w-full p-2 text-xl'/>
                {errors.password && ( <p className='text-red-500'> {errors.password.message as string} </p>)}
            </div>
            <div className='flex justify-center mt-3'>
                <button className='bg-[#e5dccd]/70 text-[#24180c] w-[50%] md:text-2xl text-xl font-medium md:p-2 p-1 mb-2'>LOG IN</button>
            </div>
            <hr className='opacity-20' />
            <div>
                <h1 className='text-xl'> Don't have an account ? <Link href="/signup" className='text-blue-400'> SignUp Here</Link> </h1>
            </div>
        </form>
    </div>
  )
}

export default page