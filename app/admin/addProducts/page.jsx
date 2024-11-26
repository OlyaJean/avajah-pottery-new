'use client'

import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'


const page = () => {
 
  const [img,setImg] = useState(false)
    const [data,setData] = useState({
        description: '',
        price: '',
        story: '',
        category: "Decor",
        
      
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data)=> ({...data, [name]: value}))
    }// [name] dynamicly changes from one input to another with its value

   

    async function submitHandler(e){
       e.preventDefault()
       const formData = new FormData();
       formData.append('description', data.description);
       formData.append('story', data.story);
       formData.append('img', img);
       formData.append('price', data.price);
       formData.append('category', data.category);
      
       
      
     await axios.post('/api/shop',formData) // we created api on post method
    
    
    }
  return (
    <div className='flex flex-col p-5 gap-5'>
        <h1 className='text-2xl px-10'>Add new product</h1>
      <form action="" onSubmit={submitHandler} className='flex flex-col gap-2 px-10'>
        <p >Product: </p>
        <input type="text" name="description" value={data.description} className='w-60 border-2' required onChange={onChangeHandler}/>

        <p >Price: </p>
        <input type="text" name='price' value={data.price} className='w-60 border-2' required onChange={onChangeHandler}/>

        <p >Image: </p>
      
        <input type="file" name='img'  className='w-60 border-2' required onChange={(e)=>setImg(e.target.files[0])}/>

      

        <p >Product description:  </p>
        <textarea type="text" name='story'className='w-60 border-2' value={data.story} required onChange={onChangeHandler}/>


       
       <p>Category:
       </p>
       <select name="category" value={data.category} onChange={onChangeHandler}>
        <option required>choose one</option>
        <option value={'Jewelry'}>Jewelry</option>
        <option value={'Decor'}>Decor</option>
        <option value={'Kitchen'}>Kitchen</option>
       </select>
       <button className='border-2'>add</button>
      </form>
    </div>
  )
}

export default page
