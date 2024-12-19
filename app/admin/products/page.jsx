'use client'
import AdminList from '@/components/AdminList'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Page = () => {

  const [items,setItems] = useState([]);
  const fetchItems = async() => {
    const response = await axios.get('/api/shop')
    setItems(response.data.items)
    console.log(response.data.items)
  }
  const deleteItem = async(itemId) =>{
    const response = await axios.delete('/api/shop', {params:{
      id:itemId
    }})
    fetchItems();
  }
  useEffect(()=>{
    fetchItems()
  },[])
  return (
    <div className='mx-auto max-h-[100vh] overflow-y-scroll'>
    <h1 className='text-2xl text-center my-5 mx-10'>All products</h1>
    <table className='border-2  mx-auto flex flex-col p-5 '>
      <thead>
        <tr className='flex justify-between text-orange-300'>
          <th className='w-48'>Product</th>
          <th className='w-48'>Category</th>
          <th className='w-48'>Price</th>
         
          <th className='w-48'>Action</th>
        </tr>
      </thead>
      <tbody>

    {!items? "" : items.map((item,index)=>{ return <AdminList key={index} description={item.description} itemId={item._id}  category={item.category} price={item.price} deleteItem={deleteItem}/> }) }
      
      </tbody>
    </table>
    </div>
  )
}

export default Page
