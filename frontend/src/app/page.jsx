// 'use client'
// import Image from "next/image";
// import Nav from "@/components/Nav";
// import Recordnav from "@/components/Recordnav";

// import localFont from "next/font/local";

// const local = localFont({src:'../Fonts/GrandisExtended-Bold.ttf'})


// export default function Home() {
//   return (
//     <div className="">
//       <Nav>
//     </Nav>
    
//     <div className="w-full flex mt-8">
//       <div className="w-[55%] flex flex-col justify-evenly">
//         <div className={`${local.className} text-4xl`}><p>DESKTOP SCREEN</p>
//         <p>RECORDER</p></div>
        
//         <ul className="flex gap-4">
//           <li className="flex gap-2 w-[33.33%]"><img src="/images/icons8-monitor-30.png" alt="" className="h-6" />
//           <p className="text-xs font-medium">Capture everything, not just your browser tabs</p>
//             </li>
//           <li className="flex gap-2 w-[33.33%]"><img src="/images/icons8-microphone-50.png" alt="" className="h-6" />
//           <p className="text-xs font-medium">Allows audio and microphone to be recorded</p>
//             </li>
//           <li className="flex gap-2 w-[33.33%]"><img src="/images/icons8-cloud-24.png" alt="" className="h-6" />
//           <p className="text-xs font-medium">Store and View from any where</p>
//             </li>
//         </ul>

//         <button className={`bg-green-400 self-start py-4 px-6 rounded-2xl`}>Get Started</button>

//       </div>
//       <div className="w-[45%]"><Recordnav/></div>
//     </div>
//     <div className="w-full flex flex-col justify-center items-center mt-[5rem]">
//       <p className={`${local.className} text-3xl`}>RECORD VIDEO ONLINE FOR FREE</p>
//       <p className="w-[70%] text-sm text-center mt-4">A free online screen recorder is perfect for saving anything shown on your display in just a couple of clicks. Use our no-install tool for recording screens as many times as you want – no download or payment needed!</p>
//     </div>

//     </div>
//     //ending tag
    
//   )
// }


'use client'
import Image from "next/image";
import Nav from "@/components/Nav";
import Recordnav from "@/components/Recordnav";
import Link from "next/link";
import { ArrowRight, Monitor, Mic, Cloud, Play, Download, Share } from 'lucide-react';

import localFont from "next/font/local";

const local = localFont({src:'../Fonts/GrandisExtended-Bold.ttf'})

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
      <Nav />
    
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row mt-8 gap-8">
          <div className="w-full md:w-[55%] flex flex-col justify-evenly space-y-8">
            <div className={`${local.className} text-4xl md:text-5xl lg:text-6xl`}>
              <p>DESKTOP SCREEN</p>
              <p>RECORDER</p>
            </div>
            
            <ul className="flex flex-col sm:flex-row gap-4">
              <li className="flex items-start gap-2 w-full sm:w-1/3">
                <Monitor className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <p className="text-xs font-medium">Capture everything, not just your browser tabs</p>
              </li>
              <li className="flex items-start gap-2 w-full sm:w-1/3">
                <Mic className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <p className="text-xs font-medium">Allows audio and microphone to be recorded</p>
              </li>
              <li className="flex items-start gap-2 w-full sm:w-1/3">
                <Cloud className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <p className="text-xs font-medium">Store and View from anywhere</p>
              </li>
            </ul>

            <Link href="/record" className="bg-green-400 hover:bg-green-500 transition-colors duration-300 self-start py-4 px-6 rounded-2xl text-white font-semibold flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="w-full md:w-[45%]">
            <Recordnav />
          </div>
        </div>

        <section className="mt-20 text-center">
          <h2 className={`${local.className} text-3xl md:text-4xl mb-4`}>RECORD VIDEO ONLINE FOR FREE</h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600">
            A free online screen recorder is perfect for saving anything shown on your display in just a couple of clicks. 
            Use our no-install tool for recording screens as many times as you want – no download or payment needed!
          </p>
        </section>

        <section className="mt-20">
          <h2 className={`${local.className} text-3xl md:text-4xl mb-8 text-center`}>HOW IT WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Play className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Start Recording</h3>
              <p className="text-gray-600">Click the 'Start Recording' button and choose the area of your screen you want to capture.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Monitor className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Capture Content</h3>
              <p className="text-gray-600">Record your screen, add audio commentary, or include webcam footage as needed.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Download className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Save and Share</h3>
              <p className="text-gray-600">When you're done, save your recording and easily share it with others.</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className={`${local.className} text-3xl md:text-4xl mb-8 text-center`}>WHY CHOOSE US</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">No technical skills required. Start recording with just a few clicks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600">Capture your screen in high definition for crystal clear recordings.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">Your recordings are private and secure. Only you control who can access them.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-gray-600">Enjoy our core features without any cost. No hidden fees or subscriptions required.</p>
            </div>
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className={`${local.className} text-3xl md:text-4xl mb-4`}>READY TO GET STARTED?</h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 mb-8">
            Join thousands of users who are already creating amazing screen recordings with our tool.
          </p>
          <Link href="/record" className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors duration-300 py-4 px-8 rounded-2xl text-white font-semibold text-lg">
            Start Recording Now
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className={`${local.className} text-2xl`}>Screen Snap</h2>
              <p className="text-sm text-gray-400">© 2024 Screen Snap. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/about" className="hover:text-blue-300">About</Link>
              <Link href="/privacy" className="hover:text-blue-300">Privacy</Link>
              <Link href="/terms" className="hover:text-blue-300">Terms</Link>
              <Link href="/contact" className="hover:text-blue-300">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}