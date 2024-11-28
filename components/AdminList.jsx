import React from 'react'

const AdminList = ({description,category, price, deleteItem,itemId }) => {
  return (
    <tr  className='flex justify-between'>
      <td>{description? description : "no name"}</td>
      <td>{category? category : 'no category'}</td>
      <td>{price? price : 'no price'}</td>
  
      <td onClick={()=>deleteItem(itemId)} className='cursor-pointer'>x</td>
    </tr>
  )
}

export default AdminList
