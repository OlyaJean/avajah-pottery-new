'use client'
import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'








export default function Home() {
  return (
    <>
      <Image src={assets.bg1} alt='' className='main-image w-[100%] h-[93vh] bg-center object-cover relative opacity-50'/>
         <h1 className='absolute top-[50vh] left-[10vw] text-3xl md:text-5xl text-neutral-500 font-thin tracking-widest'>AVAJAH POTTERY</h1>
         <p className='absolute top-[60vh] left-[10vw] md:text-2xl'>love-made goods for your love-filled HOME</p>
    </>
  )
}