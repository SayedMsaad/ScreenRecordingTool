'use client'
import Image from "next/image";
import Nav from "@/Component/Nav";
import Record from "@/Component/Record";
import { Roboto,Montserrat,Open_Sans,Nunito_Sans} from 'next/font/google'
import localFont from "next/font/local";

const local = localFont({src:'../Fonts/GrandisExtended-Bold.ttf'})
const roboto = Roboto({
  weight: ['500','900'],
  subsets: ['latin'],
})
const monst = Montserrat({
  weight: ['700'],
  subsets: ['latin'],
})
const openSans = Open_Sans({
  weight: ['600'],
  subsets: ['latin'],
})
const nunito = Nunito_Sans({
  weight: ['700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="mx-[5%]">
      <Nav>
    </Nav>
    <div className="w-full outline outline-yellow-400 flex">
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

        <button className={`bg-green-400 self-start py-4 px-6 rounded-2xl ${roboto.className}`}>Get Started</button>

      </div>
      <div className="w-[45%]"><Record/></div>
      
    </div>
    </div>
    
  )
}
