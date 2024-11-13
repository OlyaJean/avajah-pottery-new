import React from 'react'
import fb from './../assets/fb.svg'
import instagram from './../assets/instagram.svg'
import pinterest from './../assets/pinterest.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footShadow py-10'>
        <section className='flex gap-10 justify-center mb-5 cursor-pointer'>    
           <Image alt='' src={fb}/>
           <Image alt='' src={instagram}/>
           <Image alt='' src={pinterest}/>
        </section>
        <section className='text-center'>    
            <p>Handmade ceramics and home goods</p>
            <p>&copy; Avajah pottery</p>
        </section>
  
    </div>
  )
}

export default Footer