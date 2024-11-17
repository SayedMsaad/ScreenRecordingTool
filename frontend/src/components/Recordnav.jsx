// 'use client'
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React from 'react'


// const Recordnav = () => {
//   const router = useRouter();
//     const routing =()=>
//     {  
//         router.push("/Record");
//     }
//   return (
//     <div className='bg-gray-200 rounded-2xl w-full'>
//         <div className='flex flex-col p-8 space-y-5'>

//             <p className='font-bold text-2xl'>Free online screen recorder</p>

//             <div className='bg-white p-3 flex rounded-2xl'>
//                 <ul className='flex gap-10 font-medium text-sm relative'>
//                     <li className='flex items-center gap-3'>
//                     <img src="/images/icons8-tick.svg" alt="tick" className='h-[2rem]'/>
//                      <p>Webcam</p></li>

//                     <li className='flex items-center gap-3'>
//                         <img src="/images/icons8-tick.svg" alt="tick" className='h-[2rem]'/> <p>Microphone</p></li>

//                     <li className='flex items-center gap-3'>
//                          <img src="/images/icons8-tick.svg" alt="tick" className='h-[2rem]'/>
//                    <p>Sound</p></li>
//                 </ul>
//             </div>
//             <Link href={"/Record"} className='border-2 border-black bg-transparent text-balck text-medium self-start p-4 flex gap-2 justify-center rounded-2xl'><img src="/images/record.svg" alt=""/>Start Recording</Link>

//             <div><p className='text-gray-500 text-xs'>Supported browsers: Google Chrome, Mozilla Firefox, Microsoft Edge, Opera</p></div>
//         </div>
      
//     </div>
//   )
// }

// export default Recordnav


'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Video, Mic, Volume2, Check } from 'lucide-react'

const Recordnav = () => {
  const router = useRouter()

  const routing = () => {
    router.push("/Record")
  }

  return (
    <div className='bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl w-full shadow-lg'>
      <div className='flex flex-col p-4 md:p-8 space-y-5'>
        <h2 className='font-bold text-2xl md:text-3xl text-gray-800'>Free online screen recorder</h2>

        <div className='bg-white p-3 rounded-2xl shadow-md'>
          <ul className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 font-medium text-sm'>
            <li className='flex items-center gap-2'>
              <div className='bg-green-100 p-2 rounded-full'>
                <Check className='h-4 w-4 text-green-600' />
              </div>
              <p>Webcam</p>
            </li>
            <li className='flex items-center gap-2'>
              <div className='bg-green-100 p-2 rounded-full'>
                <Check className='h-4 w-4 text-green-600' />
              </div>
              <p>Microphone</p>
            </li>
            <li className='flex items-center gap-2'>
              <div className='bg-green-100 p-2 rounded-full'>
                <Check className='h-4 w-4 text-green-600' />
              </div>
              <p>Sound</p>
            </li>
          </ul>
        </div>

        <Link 
          href="/Record" 
          className='border-2 border-blue-500 bg-transparent text-blue-600 font-medium self-start px-6 py-3 flex items-center gap-2 rounded-xl hover:bg-blue-50 transition-colors duration-300'
        >
          <Video className='h-5 w-5' />
          Start Recording
        </Link>

        <div>
          <p className='text-gray-500 text-xs'>
            Supported browsers: Google Chrome, Mozilla Firefox, Microsoft Edge, Opera
          </p>
        </div>
      </div>
    </div>
  )
}

export default Recordnav