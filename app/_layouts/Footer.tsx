import React from 'react'
import Facebook from '../../svg/Facebook'
import Instagram from '@/svg/Instagram'
import Twitter from '@/svg/Twitter'

const Footer = () => {
  return (
    <div >
        <div className='flex md:flex-row flex-col gap-3 md:justify-between max-md:items-center md:px-20 px-5 py-8 bg-[#24180c] '>
            <div className='text-gray-200 md:text-3xl text-2xl max-md:text-center w-full'>Z'TITCH</div>
            <div className='w-full flex flex-col items-center'>
                <div className='flex justify-center text-gray-200 md:text-2xl'>Links</div>
                <div className='flex gap-2 text-gray-400 md:text-2xl'>
                    <span>Login</span>
                    <span>Contact</span>
                    <span>Shop</span>                
                </div>

            </div>
            <div className='w-full flex flex-col max-md:items-center' >
                <div className='text-gray-200 md:text-2xl'>Get In Touch</div>
                <div className=' text-gray-500 md:text-2xl'>Kootanad (Via), Palakkad District</div>
                <div className='flex items-center -ml-1 gap-3 pl-0 pt-2 '>
                    <Facebook className='h-9 w-9 text-gray-400'/>
                    <Instagram className='h-7 w-7 text-gray-400'/>
                    <Twitter className='h-7 w-7 pl-0.5 text-gray-400'/>
                </div>
            </div>
        </div>
        <div className='flex w-full justify-center bg-[#312111] text-gray-200/70 py-1 '>Crafted by UrbanHub Innovations</div>
    </div>
  )
}

export default Footer