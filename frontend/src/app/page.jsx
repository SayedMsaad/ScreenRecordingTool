'use client'
import Image from "next/image";
import Nav from "@/components/Nav";
import Recordnav from "@/components/Recordnav";

import localFont from "next/font/local";

const local = localFont({src:'../Fonts/GrandisExtended-Bold.ttf'})


export default function Home() {
  return (
    <div className="mx-[5%]">
      <Nav>
    </Nav>
    
    <div className="w-full flex mt-8">
      <div className="w-[55%] flex flex-col justify-evenly">
        <div className={`${local.className} text-4xl`}><p>DESKTOP SCREEN</p>
        <p>RECORDER</p></div>
        
        <ul className="flex gap-4">
          <li className="flex gap-2 w-[33.33%]"><img src="/images/icons8-monitor-30.png" alt="" className="h-6" />
          <p className="text-xs font-medium">Capture everything, not just your browser tabs</p>
            </li>
          <li className="flex gap-2 w-[33.33%]"><img src="/images/icons8-microphone-50.png" alt="" className="h-6" />
          <p className="text-xs font-medium">Allows audio and microphone to be recorded</p>
            </li>
          <li className="flex gap-2 w-[33.33%]"><img src="/images/icons8-cloud-24.png" alt="" className="h-6" />
          <p className="text-xs font-medium">Store and View from any where</p>
            </li>
        </ul>

        <button className={`bg-green-400 self-start py-4 px-6 rounded-2xl`}>Get Started</button>

      </div>
      <div className="w-[45%]"><Recordnav/></div>
    </div>
    <div className="w-full flex flex-col justify-center items-center mt-[5rem]">
      <p className={`${local.className} text-3xl`}>RECORD VIDEO ONLINE FOR FREE</p>
      <p className="w-[70%] text-sm text-center mt-4">A free online screen recorder is perfect for saving anything shown on your display in just a couple of clicks. Use our no-install tool for recording screens as many times as you want – no download or payment needed!</p>
    </div>

    </div>
    //ending tag
    
  )
}
