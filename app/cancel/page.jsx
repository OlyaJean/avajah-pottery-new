'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


const Page = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center justify-center mt-20 gap-5 h-[80vh]'>
      <h1>Payment Canceled</h1>
      <p>Your payment process was canceled. Please try again.</p>
      <button onClick={()=>router.push('/')} className='bg-neutral-400 w-36 rounded-md text-neutral-100 py-2 px-6  shadow-md active:shadow-none  '>back home</button>
    </div>
  )
}

export default Page
