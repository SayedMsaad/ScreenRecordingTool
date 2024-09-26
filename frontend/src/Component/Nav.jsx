'use client'
import React from 'react'

const Nav = () => {
  return (
    <nav className='outline outline-red-600 w-full flex justify-evenly'>
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
       
            <button className='w-[5%] hover:bg-slate-100 hover:text-lg transition-all'>Sign In</button>
        
    </nav>
  )
}

export default Nav
