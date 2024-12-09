'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center justify-center mt-20 gap-5'>
      <h1>Payement Successful</h1>
      <p>Thank you for your purchase!</p>
      <button onClick={()=>router.push('/main')} className='bg-neutral-400 w-36 rounded-md text-neutral-100 py-2 px-6  shadow-md active:shadow-none  '>back home</button>

    </div>
  )
}

export default page
