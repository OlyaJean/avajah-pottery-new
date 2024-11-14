'use client'
import React, {  useState } from 'react'
import { items } from '@/assets/assets'


import ShopList from '@/components/ShopList'



const page = () => {
  const [menu,setMenu] = useState("All");
 

  
  return (
    <>
       <h1 className='text-center pt-10 md:text-2xl' id="shopTitle">Our Products</h1>
       <ul className='flex flex-wrap justify-center gap-3 md:gap-5 px-16 items-center mt-5 text-sm md:text-[1rem]'>
       <li onClick={()=>{setMenu("All")}} className={menu==="All" ?'underline cursor-pointer': 'cursor-pointer'}>All products</li>
              <li onClick={()=>{setMenu("Decor")}} className={menu==="Decor"? 'underline cursor-pointer': 'cursor-pointer'}>Decor & Objects</li>
              <li onClick={()=>{setMenu("Kitchen")}} className={menu==="Kitchen"? 'underline cursor-pointer': 'cursor-pointer'}>Kitchen & Dining</li>
              <li onClick={()=>{setMenu("Jewelry")}} className={menu==="Jewelry" ? 'underline cursor-pointer': 'cursor-pointer'}>Jewelry & Holders</li>
       </ul>
     
       <div className='flex flex-wrap px-10 py-10 gap-5 md:gap-10 justify-center'>

    {items.filter((item)=>  menu==="All"? true : item.category === menu).map((item,index)=>{ return <ShopList key={index} id={item.id} img={item.img} description={item.description} price={item.price}/> })  }
  </div>

  </>
  )
}

export default page
