'use client'
import CustomerInfo from '@/components/CustomerInfo';
import OrderDetails from '@/components/OrderDetails';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [orders,setOrders] = useState([]);
  const [items,setItems] = useState([]);
  
  const fetchItems = async() => {
    const response = await axios.get('/api/orders')
    setOrders(response.data.items)
    
    console.log(response.data.items)

    for(let i = 0; i < response.data.items.length; i++){
      setItems(response.data.items[i].items);
      console.log(response.data.items[i].items)
    }

  }
  useEffect(()=>{
    fetchItems();
    console.log(items)
    console.log(orders)
  },[])
  return (
    <div className='mx-auto max-h-[100vh] overflow-y-scroll'>
    <h1 className='text-2xl text-center my-5 mx-10'>Orders</h1>
    <table className='border-2  mx-auto flex flex-col p-5 '>
      <thead>
        <tr className='flex justify-between text-orange-300'>
        <th className='w-48'>Name</th>
        <th className='w-48'>Email</th>
        <th className='w-48'>Address</th>
          <th className='w-48'>Product</th>
          <th className='w-48'>Category</th>
          <th className='w-48'>Price</th>
          <th className='w-48'>Quantity</th>
         
          <th className='w-48'>Action</th>
        </tr>
      </thead>
      <tbody>

    {!orders ? "" : orders.map((order,index)=>{ return <CustomerInfo className="border-x-2" key={index}     name={order.customer.name} email={order.customer.email} address={order.customer.address}  items={items}/> }) }
   
      </tbody>
    </table>
    </div>
  )
}

export default page
