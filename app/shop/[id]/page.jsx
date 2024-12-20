'use client'

import axios from 'axios';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import {useRouter} from 'next/navigation';

import React, { useEffect, useState } from 'react'


  function  Page ({params}){
    const router = useRouter()
  
    const param = React.use(params)
    const [data,setData] = useState(null);
    const {cart, addToCart} = useCart()

    const fetchData = async() => {
      const response = await axios.get('/api/shop', {params:{
        id:param.id
      }})
       setData(response.data)
       console.log(response.data)
       }
     
   
    useEffect(()=>{
        fetchData()
    },[])
    
   
  return (
    <div className='min-h-[93vh] flex flex-col gap-5 p-10 items-center justify-center'>

  


  
{data? 
<>
    <div className='flex flex-col sm:flex-row gap-10 items-center justify-center mb-10 border-2 p-10'>
      <Image src={data.img} alt='null' width={270} height={350} className='border-2 border-solid rounded-md border-neutral-400'/>

     <section className='text-center flex flex-col gap-5 sm:w-1/3'>
      <p className='text-lg font-extrabold'>{data.description}</p>
      <hr />
      <p>${data.price}</p>
      <hr />
      <p className='text-center'>{data.story}</p>
    </section>
    </div>
    <div className='flex justify-center gap-5'>
       <button  className='bg-neutral-400 w-36 rounded-md text-neutral-100 py-2 px-6 shadow-md active:shadow-none' onClick={()=>router.push('/shop')}>back</button>
       <button className='bg-neutral-400 w-36 rounded-md text-neutral-100 py-2 px-6  shadow-md active:shadow-none  ' onClick={()=> addToCart(data)}>add to cart</button>
     
  </div>
</>:<></>}
 

    </div>
  
  )
}

export default Page
