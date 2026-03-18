"use client"
import React, { Children, ReactNode } from 'react'
import { CartProvider } from 'react-use-cart'


type Props = {
    children : ReactNode
}

const ProviderClient = ({children}:Props) => {
  return (
    <div>
        <CartProvider>
            {children}
        </CartProvider>
    </div>
  )
}

export default ProviderClient