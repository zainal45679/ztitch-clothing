"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Cart from '../../svg/Cart'
import Hamburger from '@/svg/Hamburger'
import Close from '@/svg/Close';

const Header = () => {

const [menu, setMenu] = useState(false);

    return (
    <div className='flex bg-[#24180c] md:h-15 items-center justify-between p-3 px-5  md:p-10 z-50'>
        <h2 className='text-gray-200 text-[25px] md:text-5xl p-0 '>Z'TITCH</h2>
        <div className='hidden md:flex  gap-8 text-gray-200 text-2xl'>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="">About</Link>
            <Link href="">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="">Page</Link>
        </div>
        <div className='flex gap-7'>
            <div className='flex relative cursor-pointer mt-2'>
                <Link href="/cart"><Cart className='md:w-6 w-5.5 md:h-6 h-5.5 text-gray-200 ' /></Link>
                <span className='absolute md:-top-5 md:-right-5 -top-3.5 -right-5 bg-gray-200/70 pb-0.5 text-gray-800 md:px-2 px-[7.5] max-md:text-sm rounded-full font-bold'>2</span>
            </div>
            <Hamburger onClick={() => setMenu(true)} className='h-8 w-8 md:hidden text-gray-200'/>
            { menu === true && 
            (<div className='bg-[#24180c]/95 fixed h-screen max-md:w-1/3 max-sm:w-1/2 z-50 right-0 top-0'>
                <div><Close onClick={()=>setMenu(false)} className='h-8 m-2 absolute top-1 right-2 text-[#e5dccd]/50'/></div>
                <div className='flex flex-col text-[#e5dccd]/90 px-7 py-15 text-2xl gap-2'>
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="">About</Link>
                    <Link href="">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="">Page</Link>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Header