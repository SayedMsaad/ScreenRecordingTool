'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'


const Nav = () => {
   const router = useRouter();

   const navigate =()=>
   {
    router.push("/Authenticate");
   }
  return (
    <nav className='w-full flex justify-evenly'>
        <div className='w-[40%] flex items-center'>
            <img src="/images/record-button.svg" alt="Logo" className='h-[4rem]'/>
            <p className='font-bold text-lg'>Screen Snap</p>
        </div>
        <ul className='flex items-center w-[55%]'>

            <li className='mr-8 hover:bg-slate-100 hover:text-lg transition-all p-4'>
                Home
            </li>
            <li className='mr-8 hover:bg-slate-100 hover:text-lg transition-all p-4'>
                Record
            </li>
            <li className='mr-8 hover:bg-slate-100 hover:text-lg transition-all p-4'>
             Recordings
            </li>
            
        </ul>
       
            <Link href={"/Authenticate"} className='py-4 px-4 hover:bg-slate-100 hover:text-lg transition-all text-nowrap'>Sign In</Link>
        
    </nav>
  )
}

export default Nav
