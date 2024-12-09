'use client'
import { useState } from 'react';
import { useCart } from './../../../../context/CartContext';
import axios from 'axios';

const page = () => {
  const { cart, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    street: '',
    city:'',
    state:'',
    zipcode:'',
    email: '',
  });

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
    console.log(cart)
    console.log(customerInfo)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save order to MongoDB
      const order = {
        customer: customerInfo,
        items: cart,
      };
      await axios.post('/api/orders', order);

      // Clear the cart after successful order
      clearCart();

      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
    }

   
  };

  return (
    <div className='min-h-[93vh] px-10'>
      <h2 className='text-center mt-10 mb-5  md:text-2xl py-5  rounded-md  bg-slate-300'>Checkout</h2>
      
     
      <form onSubmit={handleSubmit} className='flex flex-col gap-5  sm:w-3/4'>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={customerInfo.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={customerInfo.street}
          onChange={handleChange}
          required
        />
         <input
          type="text"
          name="city"
          placeholder="City"
          value={customerInfo.city}
          onChange={handleChange}
          required
        />
         <input
          type="text"
          name="state"
          placeholder="State"
          value={customerInfo.state}
          onChange={handleChange}
          required
        />
         <input
          type="text"
          name="zipcode"
          placeholder="Zip Code"
          value={customerInfo.zipcode}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customerInfo.email}
          onChange={handleChange}
          required
        />
        <button type="submit" className='bg-neutral-400 rounded-md text-neutral-100 p-2  m-2 shadow-md active:shadow-none  '>Place Order</button>
      </form>
    </div>
  );
};

export default page;