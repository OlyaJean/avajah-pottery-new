'use client'
import CustomerInfo from '@/components/CustomerInfo';
import OrderDetails from '@/components/OrderDetails';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/saveOrder');
        setOrders(response.data.items); // Assuming response.data.items contains the array of orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);
  return (
    <div className='mx-auto max-h-[100vh] overflow-y-scroll'>
    <h1 className='text-center mt-5 text-2xl'>Orders</h1>
    <div>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className='border-2 rounded-md p-5 m-5 '>
            <h2 className='text-center text-lg'>Order {index + 1}</h2>
            <div>
              <h3 className='text-center text-lg'>Customer Information</h3>
              <p>Name: {order.customerInfo.name}</p>
              <p>Email: {order.customerInfo.email}</p>
              <p>Address: {order.customerInfo.street}, {order.customerInfo.city}, {order.customerInfo.state}, {order.customerInfo.zipcode}</p>
            </div>
            <div>
              <h3 className='text-center text-lg'>Items</h3>
              <ul>
                {order.cartItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <p>Name: {item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  </div>
  )
}

export default Page
