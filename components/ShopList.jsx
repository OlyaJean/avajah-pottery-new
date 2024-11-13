
import Image from 'next/image'
import React from 'react'

const ShopList = ({img,description,price,id}) => {
  return (
    <div className='body-image rounded-md w-40 sm:w-48 md:w-fit flex flex-col justify-center gap-2 p-5 cursor-pointer hover:shadow-none hover:border-[1px]'>
      <Image width={150} src={img} alt='' className='object-cover h-2/3 w-36'/>
      <p className='text-center text-xs'>{description}</p>
      <hr />
      <p className='text-center'>${price}</p>
    </div>
  )
}

export default ShopList