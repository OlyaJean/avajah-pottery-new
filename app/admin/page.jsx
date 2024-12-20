'use client'
import SidebarAdmin from "@/components/SidebarAdmin";
import { useSession,signIn, signOut } from "next-auth/react";

export default function Page(){
 const {data: session} = useSession()
if(session){
  return (
    <>
    
      <section className="flex flex-col items-center w-full mt-10">
      Signed in as {session.user.email} <br />
     
      <button className='bg-neutral-400 rounded-md text-neutral-100 p-2  m-2 shadow-md active:shadow-none ' onClick={() => signOut()}>Sign out</button>
      </section>
     
    </>
  )
}
return (
  <>
  <section className="flex flex-col items-center w-full mt-10">
    Not signed in <br />
    
    <button className='bg-neutral-400 rounded-md text-neutral-100 p-2  m-2 shadow-md active:shadow-none ' onClick={() => signIn('google')}>Sign in</button>
    </section>
  </>
)
}