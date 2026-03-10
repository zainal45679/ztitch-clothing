"use client"

import React, { useState } from 'react'
import Password from '../_components/password'
import Eye from '@/svg/Eye'
import Link from 'next/link'

const page = () => {

const [pass, setPass] = useState("password")

  return (
    <div className='flex items-center justify-center h-[90vh] bg-[#e5dccd]'>
        <div className='flex flex-col  gap-4 bg-[#24180c]/70 p-10 w-100'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl'>LOG IN </h1>
                <h1 className='text-xl'>Sign in to get started</h1>
            </div>
            <div>
                <h1 className='text-2xl'>Email</h1>
                <input type="text" placeholder='Choose a username' className='border border-[#e5dccd]/30 w-full p-2 text-xl' />
            </div>
            <div className='relative'>
                <Password type={pass} title='Password' place='Enter a password' className1='text-2xl' className2='border border-[#e5dccd]/30 w-full p-2 text-xl'/>
            </div>
            <div className='flex justify-center mt-3'>
                <button className='bg-[#e5dccd]/70 text-[#24180c] w-[50%] text-2xl font-medium p-2'>LOG IN</button>
            </div>
            <hr className='opacity-20' />
            <div>
                <h1 className='text-xl'> Don't have an account ? <Link href="/signup" className='text-blue-400'> SignUp Here</Link> </h1>
            </div>
        </div>
    </div>
  )
}

export default page