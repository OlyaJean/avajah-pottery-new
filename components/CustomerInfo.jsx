import React from 'react'
import OrderDetails from './OrderDetails'

const CustomerInfo = ({name,address,email,items}) => {
  return (
    <>
    <tr  className='flex justify-between items-center text-center border-t-2 my-2'>
    <td className='w-48'>{name? name : 'no name'}</td>
    <td className='w-48'>{address? address : 'no address'}</td>
    <td className='w-48'>{email? email : 'no email'}</td>
  
  </tr>
  {items?  items.map((item,index) => {return <OrderDetails key={index}  price={item.price} quantity={item.quantity} description={item.description} category={item.category}/>}) : ''}
  </>
  )
}

export default CustomerInfo