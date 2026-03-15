"use client"

import React, { useState } from 'react'
import Password from '../_components/password'
import Eye from '@/svg/Eye'
import Link from 'next/link'
import z from 'zod'
import { da } from 'zod/locales'
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import img1 from "../../public/_images/signup.png"
import img2 from "../../public/_images/signupsmall.png"
import img3 from "../../public/_images/signupsmall2.png"
import Image from 'next/image'

const page = () => {

const signUpSchema = z
  .object({
    username: z.string().min(8),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
  });

const [pass, setPass] = useState("password")

type Tlogin = z.infer<typeof schema>

const { register, handleSubmit, formState : { errors } } = useForm({ resolver: zodResolver(signUpSchema)})

const submit = (data : Tlogin) =>{
    console.log(data);
}

  return (
    <div className='flex relative md:items-center items-start max-md:pt-[10%] md:justify-end md:pr-[15%] justify-center min-h-[90vh] bg-[#e5dccd]'>
        <div className="absolute inset-0">
            <Image src={img2} alt="mobile bg" fill className="object-cover md:hidden" />
            <Image src={img3} alt="tablet bg" fill className="object-cover hidden md:block xl:hidden" />
            <Image src={img1} alt="desktop bg" fill className="object-cover hidden xl:block" />
        </div>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col relative z-10  md:gap-4 gap-1 bg-[#24180c]/70 md:p-10 p-4 md:w-100 w-[85%]'>
            <div className='flex flex-col items-center'>
                <h1 className='md:text-4xl text-3xl'>CREATE ACCOUNT</h1>
                <h1 className='text-xl'>sign up to get started</h1>
            </div>
            <div>
                <h1 className='text-2xl'>Username</h1>
                <input {...register("username")} type="text" placeholder='Choose a username' className='border border-[#e5dccd]/30 w-full p-2 text-xl'/>
                {errors.username && ( <p className='text-red-500'> {errors.username.message as string} </p>)}
            </div>
            <div>
                <h1 className='text-2xl'>Email</h1>
                <input {...register("email")} type="text" placeholder='Choose a username' className='border border-[#e5dccd]/30 w-full p-2 text-xl' />
                {errors.email && ( <p className='text-red-500'> {errors.email.message as string} </p>)}
            </div>
            <div className='relative'>
                <Password registration={register("password")} type={pass} title='Password' place='Enter a password' className1='text-2xl' className2='border border-[#e5dccd]/30 w-full p-2 text-xl'/>
                {errors.password && ( <p className='text-red-500'> {errors.password.message as string} </p>)}
            </div>
            <div className='relative'>
                <Password registration={register("confirmPassword")} type={pass} title='Confirm Password' place='Re-enter your password' className1='text-2xl' className2='border border-[#e5dccd]/30 w-full p-2 text-xl'/>
                {errors.confirmPassword && ( <p className='text-red-500'> {errors.confirmPassword.message as string} </p>)}
            </div>
            <div className='flex justify-center mt-3'>
                <button className='bg-[#e5dccd]/70 text-[#24180c] w-[50%] text-2xl font-medium md:p-2 p-1 mb-2'>SIGN UP</button>
            </div>
            <hr className='opacity-20' />
            <div>
                <h1 className='text-xl max-md:text-center'> Already hanve an Account ? <Link href="/login" className='text-blue-400'> Login Here</Link> </h1>
            </div>
        </form>
    </div>
  )
}

export default page