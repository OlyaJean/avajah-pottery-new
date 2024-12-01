'use client'
import React, { useState } from 'react'
import { useCart } from './../../../context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const page = () => {
  const { cart, removeFromCart,incrementQuantity, decrementQuantity, getTotal,getTotalItems, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/main/cart/[id]');
  };
 
 

  return (
    <div className='min-h-[93vh] px-10'>
     
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
            <Image alt='' width={100} height={100} src={item.img} className='border-2'></Image>

            <p className='text-lg text-center underline'>Subtotal ${item.quantity * item.price}</p>
            </section>
          </div>
        ))
      )}
      {cart.length > 0 && <section className='md:fixed md:top-[200px] md:right-10  md:max-w-[40vw] text-center bg-neutral-200 p-10 rounded-lg'>
        <p className='text-xl lg:text-3xl'>Total items: {getTotalItems()}</p>
      <p className='text-xl  lg:text-3xl my-5'>Total amount: ${getTotal()} </p>
       <button onClick={handleCheckout} className='bg-neutral-400 rounded-md text-neutral-100 p-2 m-2   shadow-md active:shadow-none  '>Proceed to Checkout</button>
       <button onClick={()=> clearCart()} className='bg-neutral-400 rounded-md text-neutral-100 p-2  m-2 shadow-md active:shadow-none  '>Clear cart</button>
      </section>}
    </div>
  )
}

export default page



