import Link from 'next/link'
import React from 'react'

const SidebarAdmin = () => {

  return (
  
    <div className='bg-neutral-500 flex sm:flex-col sm:text-end sm:h-screen w-screen  sm:w-fit sm:p-5 py-5 px-2 sm:text-2xl justify-between items-center sm:justify-start sm:items-end text-neutral-100 tracking-widest gap-1 text-center sm:gap-10 border-2'>

    <Link href={'/admin'}><h2 className='cursor-pointer hover:text-orange-300'>Dashboard</h2></Link>
    <Link href={'/admin/products'}><h2 className='cursor-pointer hover:text-orange-300'>Products</h2></Link>
   
    <Link href={'/admin/addProducts'}><h2 className='cursor-pointer hover:text-orange-300'>Add products</h2></Link>
 
  
  
    <Link href={'/admin/orders'}><h2 className='cursor-pointer hover:text-orange-300'>Orders</h2></Link>
    
    </div>
  
  
  )
}

export default SidebarAdmin
