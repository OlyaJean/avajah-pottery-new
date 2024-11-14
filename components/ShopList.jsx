import { assets, items } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import Link
 from 'next/link'
const ShopList = ({img,description,price,id}) => {
  return (
<Link href={`/shop/${id}`}><div className='body-image rounded-md w-40 sm:w-48 md:w-fit flex flex-col justify-center gap-2 p-5 cursor-pointer hover:shadow-none hover:border-[1px]'>
 <Image width={150} src={img} alt='' className='object-cover h-40 sm:h-48 w-36'/>
      <p className='text-center text-xs'>{description}</p>
      <hr />
      <p className='text-center'>${price}</p>
    </div></Link>
  )
}

export default ShopList