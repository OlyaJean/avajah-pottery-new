import React from 'react'

const AdminList = ({description,category, price, date }) => {
  return (
    <tr  className='flex justify-between'>
      <td>{description? description : "no name"}</td>
      <td>{category? category : 'no category'}</td>
      <td>{price? price : 'no price'}</td>
  
      <td className='cursor-pointer'>x</td>
    </tr>
  )
}

export default AdminList
