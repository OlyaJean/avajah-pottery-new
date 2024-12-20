'use client'
import React from 'react'
import cartIcon from '/assets/cart.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from './../context/CartContext';


const Header = () => {
  const { cart, getTotalItems} = useCart();

  return (
    <div className='navShadow flex justify-between px-10 sm:px-0 sm:justify-evenly items-center  bg-neutral-100 sticky top-0 z-40'>
    <span className='  text-center font-extralight text-xs'>Avajah <hr />pottery</span>
    <nav>
      <ul  className='flex gap-3 sm:gap-5 my-5 md:gap-20 text-neutral-500 navbar md:text-[1.1rem]'>
          <Link href={'/main'}>Home</Link>
          <Link  href={'/main/shop'}>Shop</Link>
          <Link  href={'/main/about'}>About</Link>
          <Link  href={'/main/contact'}>Contact </Link>
      </ul>
   
    </nav>
    <Link href={'/main/cart'} ><Image alt='' src={cartIcon} width={20} className='cursor-pointer text-neutral-500 absolute top-5'/><span className='relative left-5 top-1 text-slate-700  font-extrabold'>{cart.length > 0? getTotalItems() : ''}</span></Link>
  </div>
  )
}

export default Header
