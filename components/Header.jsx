'use client'
import React from 'react'
import cart from './../assets/cart.svg'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
 

  return (
    <div className='navShadow flex justify-evenly items-center  bg-neutral-100 sticky top-0 z-40'>
    <span className='tracking-widest text-center font-extralight text-sm'>Avajah <hr />pottery</span>
    <nav>
      <ul  className='flex gap-3 sm:gap-5 my-5 md:gap-20 text-neutral-500 navbar md:text-[1.1rem]'>
          <Link href={'/'}>Home</Link>
          <Link  href={'/shop'}>Shop</Link>
          <Link  href={'/journal'}>Journal</Link>
          <Link  href={'/about'}>About </Link>
      </ul>
   
    </nav>
    <Image alt='' src={cart} width={20} className='cursor-pointer text-neutral-500'/>
  </div>
  )
}

export default Header
