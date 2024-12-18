
import SidebarAdmin from '@/components/SidebarAdmin'
import React from 'react'
import AuthProvider from "@/components/nextauth-session-provider";


const layout = ({children}) => {



 
    return ( 
      <AuthProvider>
      <div className='sm:flex  w-screen' >
      <SidebarAdmin/>
        {children} 
     
    </div>
    </AuthProvider>)
  
  
}
export default layout



