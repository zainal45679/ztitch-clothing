"use client"

import CloseEye from '@/svg/CloseEye'
import Eye from '@/svg/Eye'
import { title } from 'process'
import React, { useState } from 'react'

type props = {
    type : string,
    title : string,
    place : any,
    className1 : string,
    className2 : string
}

const Password = ({type, title , place, className1, className2 }:props) => {

const [pass, setPass] = useState(true)

const handleClick = ()=>{
  setPass(!pass)
}

  return (
    <div>
      <div>
        <h1 className={className1}>{title}</h1>
        <input type={pass ? "password" : "text"} placeholder={place} className={className2}/>
      </div>
      <button onClick={handleClick}>
        {
          pass ?  <CloseEye className='h-6 absolute bottom-9 right-3'/> : <Eye className='h-6 absolute bottom-3 right-3'/> 
        }
        
      </button>
    </div>
    
    
  )
}

export default Password