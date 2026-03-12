"use client"

import CloseEye from '@/svg/CloseEye'
import Eye from '@/svg/Eye'
import { title } from 'process'
import React, { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type props = {
    type : string,
    title : string,
    place : string,
    className1 : string,
    className2 : string,
    registration : UseFormRegisterReturn
}

const Password = ({title , place, className1, className2, registration }:props) => {

const [pass, setPass] = useState(true)

const handleClick = ()=>{
  setPass(!pass)
}

  return (
    <div className='relative -mb-7'>
      <div>
        <h1 className={className1}>{title}</h1>
        <input {...registration} type={pass ? "password" : "text"} placeholder={place} className={className2}/>
      </div>
      <button type='button' onClick={handleClick}>
        {
          pass ? <Eye className='h-6 absolute bottom-9 right-3'/> : <CloseEye className='h-6 absolute bottom-9 right-3'/>
        }
        
      </button>
    </div>
    
    
  )
}

export default Password