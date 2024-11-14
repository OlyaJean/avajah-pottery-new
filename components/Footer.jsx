import React from 'react'
import fb from './../assets/fb.svg'
import instagram from './../assets/instagram.svg'
import pinterest from './../assets/pinterest.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footShadow py-10'>
        <section className='flex gap-20 justify-center mb-5 cursor-pointer'>    
           <Image alt='' src={fb} width={20}/>
           <Image alt='' src={instagram} width={20}/>
           <Image alt='' src={pinterest} width={20}/>
        </section>
        <section className='text-center'>    
            <p>Handmade ceramics and home goods</p>
            <p>&copy; 2024, Avajah pottery</p>
        </section>
  
    </div>
  )
}

export default Footer