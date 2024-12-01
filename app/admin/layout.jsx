import SidebarAdmin from '@/components/SidebarAdmin'
import React from 'react'


const layout = ({children}) => {
  return (
    <div className='sm:flex  w-screen'>
      
      <SidebarAdmin/>
      {children}
    </div>
  )
}

export default layout
