import Link from 'next/link'
import React from 'react'

const SidebarAdmin = () => {

  return (
  
    <aside className='bg-neutral-600 flex flex-col h-screen w-fit p-5 text-2xl text-neutral-100 tracking-widest gap-5 border-2'>

    <Link href={'/admin'}><h2 className='cursor-pointer'>Dashboard</h2></Link>
    <Link href={'/admin/addProducts'}><h2 className='cursor-pointer'>Add products</h2></Link>
    <Link href={'/admin/products'}><h2 className='cursor-pointer'>Products</h2></Link>
    <Link href={'/admin/orders'}><h2 className='cursor-pointer'>Orders</h2></Link>
    </aside>
  
  
  )
}

export default SidebarAdmin
