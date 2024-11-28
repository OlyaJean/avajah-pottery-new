'use client'
import React from 'react'
import { useCart } from './../../../context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const page = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/main/cart/[id]');
  };

  return (
    <div className='h-[93vh]'>
       <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item._id}>
            <section>
            <h3>{item.description}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </section>
            <Image alt='' width={150} height={150} src={item.img}></Image>
          </div>
        ))
      )}
      {cart.length > 0 && <button onClick={handleCheckout}>Proceed to Checkout</button>}
      
    </div>
  )
}

export default page



