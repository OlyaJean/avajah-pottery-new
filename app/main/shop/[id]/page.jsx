'use client'
import { assets, items } from '@/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

import React, { useEffect, useState } from 'react'

  function  page ({params}){
  
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
    <div className='min-h-[93vh] flex flex-col items-center justify-center gap-5 p-10'>
{data? <>
    <p className='text-lg'>{data.description}</p>
<Image src={data.img} alt='null' width={270} height={350} className='border-8 border-solid rounded-md border-neutral-400'/>
 
  <p>${data.price}</p>
  <p className='text-center'>{data.story}</p>
  <button className='bg-neutral-400 rounded-md text-neutral-100 py-2 px-6 shadow-md active:shadow-none' onClick={()=> addToCart(data)}>add</button>
</>:<></>}
 
    </div>
  )
}

export default page
