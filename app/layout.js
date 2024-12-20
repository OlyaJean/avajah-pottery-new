
import {Raleway} from "next/font/google";
import "./globals.css";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { CartProvider } from '@/context/CartContext'
import React from 'react'





const raleway = Raleway({
  subsets: ['latin'],
    weight: ["300","400","500","600"]
  });

export const metadata = {
  title: "avajah pottery",
  description: "handmade ceramic goods",
};

export default function RootLayout({ children,pageProps }) {
  return (
    <>
    <html lang="en">
      <body className={raleway.className}>
      
     
      <CartProvider>
       <div {...pageProps}>
      <Header/>
      {children}
      <Footer/>
    </div>
    </CartProvider>
   
       
      
      </body>
    </html>
    </>
  );
}

