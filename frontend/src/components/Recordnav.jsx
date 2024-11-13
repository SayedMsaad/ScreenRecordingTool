'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'


const Recordnav = () => {
  const router = useRouter();
    const routing =()=>
    {  
        router.push("/Record");
    }
  return (
    <div className='bg-gray-200 rounded-2xl w-full'>
        <div className='flex flex-col p-8 space-y-5'>

            <p className='font-bold text-2xl'>Free online screen recorder</p>

            <div className='bg-white p-3 flex rounded-2xl'>
                <ul className='flex gap-10 font-medium text-sm relative'>
                    <li className='flex items-center gap-3'>
                    <img src="/images/icons8-tick.svg" alt="tick" className='h-[2rem]'/>
                     <p>Webcam</p></li>

                    <li className='flex items-center gap-3'>
                        <img src="/images/icons8-tick.svg" alt="tick" className='h-[2rem]'/> <p>Microphone</p></li>

                    <li className='flex items-center gap-3'>
                         <img src="/images/icons8-tick.svg" alt="tick" className='h-[2rem]'/>
                   <p>Sound</p></li>
                </ul>
            </div>
            <Link href={"/Record"} className='border-2 border-black bg-transparent text-balck text-medium self-start p-4 flex gap-2 justify-center rounded-2xl'><img src="/images/record.svg" alt=""/>Start Recording</Link>

            <div><p className='text-gray-500 text-xs'>Supported browsers: Google Chrome, Mozilla Firefox, Microsoft Edge, Opera</p></div>
        </div>
      
    </div>
  )
}

export default Recordnav
