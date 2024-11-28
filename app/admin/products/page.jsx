'use client'
import AdminList from '@/components/AdminList'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {

  const [items,setItems] = useState([]);
  const fetchItems = async() => {
    const response = await axios.get('/api/shop')
    setItems(response.data.items)
  }
  useEffect(()=>{
    fetchItems()
  },[])
  return (
    <table className='border-2 w-[50vw] mx-auto flex flex-col p-5 '>
      <thead>
        <tr className='flex justify-between'>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
         
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

    {!items? "" : items.map((item,index)=>{ return <AdminList key={index} description={item.description}  category={item.category} price={item.price}/> }) }
      
      </tbody>
    </table>
  )
}

export default page
