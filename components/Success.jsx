


'use client'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import { Suspense } from 'react'
import axios from "axios";

const  Success = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const session_id = searchParams.get('session_id')
  // Get session_id from query params
 

 


  useEffect(() => {
    const fetchSession = async () => {
   
      console.log(session_id )
      if (!session_id) return;
  

      try {
        // Fetch session details from the new API route
        const response  = await fetch(`/api/checkout-session?session_id=${session_id}`);
        const session = await response.json();
      
        console.log('Session details:', session);

        const orderData = {
          customerInfo:{
            name: '',
            email: '',
            street: '',
            city:'',
            state:'',
            zipcode:''
          },
          cartItems:[{
            _id:'', description:'', quantity: null, price:null
          },]
        }

          // Save the order in MongoDB
          const orderResponse =  await axios.post("/api/saveOrder", {
            customerInfo:JSON.parse( session.session.metadata.customerInfo),
            cartItems:JSON.parse( session.session.metadata.cartItems),
          });
       const test = JSON.parse( session.session.metadata.cartItems)
       const test1 = JSON.parse( session.session.metadata.customerInfo)
          console.log(test1)
          alert("Payment successful and order saved!");
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, [session_id]);
    
   
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className='flex flex-col items-center justify-center mt-20 gap-5'>
      <h1>Payment Successful</h1>
      <p>Thank you for your purchase!</p>
      <button onClick={()=>router.push('/main')} className='bg-neutral-400 w-36 rounded-md text-neutral-100 py-2 px-6  shadow-md active:shadow-none  '>back home</button>

    </div>
    </Suspense>
  )
}


export default Success
