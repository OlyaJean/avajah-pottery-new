import React from 'react'

const AdminList = ({description,category, price, deleteItem,itemId }) => {
  return (
    <tr  className='flex justify-between items-center text-center my-2'>
      <td className='w-48'>{description? description : "no name"}</td>
      <td className='w-48'>{category? category : 'no category'}</td>
      <td className='w-48'>{price? price : 'no price'}</td>
  
      <td onClick={()=>deleteItem(itemId)} className='cursor-pointer w-48 bg-neutral-400 rounded-md text-neutral-100 p-2  m-2 shadow-md active:shadow-none '>delete</td>
    </tr>
  )
}

export default AdminList
