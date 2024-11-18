import SidebarAdmin from '@/components/SidebarAdmin'
import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const layout = ({children}) => {
  return (
    <div className='flex w-screen'>
        <ToastContainer theme="dark"/>
      <SidebarAdmin/>
      {children}
    </div>
  )
}

export default layout
