'use client'
import React, { useState } from 'react'
import { useCart } from './../../../context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';


const Page = () => {
  const { cart, removeFromCart,incrementQuantity, decrementQuantity, getTotal,getTotalItems, clearCart } = useCart();
  const router = useRouter();


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


  const handleCheckout = async(e) => {
    e.preventDefault()
    console.log(cart)
    //router.push('/main/cart/[id]');
    const filteredCart = cart.map((item,i) => ({
      description:cart[i].description,
      id:cart[i]._id, 
      category: cart[i].category, 
      price: cart[i].price,
      quantity: cart[i].quantity
    }))
    console.log(filteredCart)
    try {
      const response = await axios.post('/api/checkout', {
        cartItems: filteredCart,
        customerInfo: customerInfo,
       
      });

      // Redirect to Stripe Checkout
      window.location.href = response.data.url;
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Failed to initiate checkout. Please try again.');
    }
    clearCart();
  };
 
 

  return (
    <div className='min-h-[100vh] px-10'>
     
       <h2 className='text-center mt-10 mb-5  md:text-2xl py-5  rounded-md  bg-slate-300'>Your Cart</h2>
      {cart.length === 0 ? (
        <p className='text-3xl text-center'>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className='flex gap-5 items-center justify-center border-2 rounded-md md:w-[45vw] p-5 sm:p-10 mb-5' key={item._id}>
            <section className='w-44 sm:w-56 flex flex-col gap-5'>
            <h3 className='font-extrabold '>{item.description}</h3>
            
            <hr />
       
            <p>Price: ${item.price}</p>
          
            <p className='border-2  flex justify-evenly w-16 '> 
              <span className='font-extrabold text-lg cursor-pointer' onClick={()=>decrementQuantity(item._id)}>-</span>
              {item.quantity}
              <span className='font-extrabold text-lg cursor-pointer' onClick={()=> incrementQuantity(item._id)}>+</span></p>
            
            <button className='bg-neutral-400 w-36 rounded-md text-neutral-100 py-2 px-6  shadow-md active:shadow-none  ' onClick={() => removeFromCart(item._id)}>Remove</button>
            </section>
            <section className='flex flex-col gap-10'>
            <Image alt='' width={100} height={100} src={item.img} className='border-2 rounded-md'></Image>

            <p className='text-lg text-center underline'>Subtotal ${item.quantity * item.price}</p>
            </section>
          </div>
        ))
      )}
      {cart.length > 0 && <section className='md:absolute md:top-[200px] md:right-10  md:min-w-[40vw]  mb-5 text-center bg-neutral-200 p-5 rounded-lg mx-auto'>
       
      <h2 className='text-xl lg:text-3xl my-5'>Your shipping information</h2>
      <form  className='flex flex-col gap-4  sm:w-3/4 mx-auto' onSubmit={handleCheckout}>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={customerInfo.name}
          onChange={handleChange}
         className='p-1 rounded-md'
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street name"
          value={customerInfo.street}
          onChange={handleChange}
          className='p-1 rounded-md'
          required
        />
         <input
          type="text"
          name="city"
          placeholder="City"
          value={customerInfo.city}
          onChange={handleChange}
          className='p-1 rounded-md'
          required
        />
         <input
          type="text"
          name="state"
          placeholder="State"
          value={customerInfo.state}
          onChange={handleChange}
          className='p-1 rounded-md'
          required
        />
         <input
          type="text"
          name="zipcode"
          placeholder="Zip Code"
          value={customerInfo.zipcode}
          onChange={handleChange}
          className='p-1 rounded-md'
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={customerInfo.email}
          onChange={handleChange}
          className='p-1 rounded-md'
          required
        />
       
       <p className='text-xl'>Total items: {getTotalItems()}</p>
      <p className='text-xl'>Total amount: ${getTotal()} </p>
       <button  type='submit' className='bg-neutral-400 rounded-md text-neutral-100 p-2  shadow-md active:shadow-none  '>Proceed to Checkout</button>
       <button onClick={()=> clearCart()} className='bg-neutral-400 rounded-md text-neutral-100 p-2  m-2 shadow-md active:shadow-none '>Clear cart</button>
      </form>
      
    

      </section>}

    </div>
  )
}

export default Page



