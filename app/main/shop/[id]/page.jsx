'use client'
import { assets, items } from '@/assets/assets';
import Image from 'next/image';

import React, { useEffect, useState } from 'react'

  function  page ({params}){
  
    const param = React.use(params)
    const [data,setData] = useState(null);

    const fetchData = () => {
       for(let i = 0; i < items.length; i++){
        if(Number(param.id) === items[i].id){
            setData(items[i]);
           
            break;
        }
       } 
       
       }
      console.log(data)
   
    useEffect(()=>{
        fetchData()
    },[])
    
   
  return (
    <div className='min-h-[93vh] flex flex-col items-center justify-center gap-5 p-10'>
{data? <>
    <p className='text-lg'>{data.description}</p>
<Image src={data.img} alt='' width={270} className='border-8 border-solid rounded-md border-neutral-400'/>
 
  <p>${data.price}</p>
  <p className='text-center'>{data.story}</p>
  <button className='bg-neutral-400 rounded-md text-neutral-100 py-2 px-6 shadow-md active:shadow-none'>add</button>
</>:<></>}
 
    </div>
  )
}

export default page
