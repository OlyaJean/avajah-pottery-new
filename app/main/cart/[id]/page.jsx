'use client'
import { useState } from 'react';
import { useCart } from '/context/CartContext';
import axios from 'axios';

const page = () => {
  const { cart, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
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
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
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
          name="address"
          placeholder="Address"
          value={customerInfo.address}
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
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default page;