'use client'
import React from 'react'

const page = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5101efe0-2225-4b4e-82fd-14e14c112c8d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  return (
    <div className='flex flex-col min-h-[93vh]'>
    <div>
        <h3 className='text-center mt-10 mb-5 mx-10 md:text-2xl py-5  rounded-md  bg-slate-300'>Contact</h3>
        <p className='text-center text-sm md:text-lg mx-5'>To contact us for all other matters, please send an email to avajahceramics@gmail.com or fill out the form below.</p>
       
    </div>
  <div >
    <form onSubmit={onSubmit} className='flex flex-col gap-2 w-3/4 mx-auto my-10'>
        <label>Your name:</label>
        <input type="text" name="name" placeholder='Enter your name' />
        <label>Phone Number:</label>
        <input type="tel" name='phone' placeholder='Enter your phone number' />
        <label>Write your message here:</label>
        <textarea name="message" rows='6' placeholder='Enter your message' ></textarea>
        <button type='submit' className='my-10 bg-neutral-400 rounded-md w-48 mx-auto text-neutral-100 p-2 shadow-md active:shadow-none '>Submit </button>
    </form>
    <span>{result}</span>
  </div>
</div>
  )
}

export default page
