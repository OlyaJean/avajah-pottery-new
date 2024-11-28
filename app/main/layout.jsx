'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { CartProvider } from '@/context/CartContext'
import React from 'react'

const layout = ({children,pageProps}) => {
  return (
    <CartProvider>
       <div {...pageProps}>
      <Header/>
      {children}
      <Footer/>
    </div>
    </CartProvider>
   
  )
}

export default layout
