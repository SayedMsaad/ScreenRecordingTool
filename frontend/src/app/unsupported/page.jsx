import Link from 'next/link'
import { ArrowLeft, Laptop, Smartphone } from 'lucide-react'

export default function UnsupportedDevice() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
        Screen Snap
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Device Not Supported</h2>
        <p className="text-gray-600 mb-6">
          We're sorry, but screen recording is currently only supported on desktop devices. 
          Mobile devices are not supported at this time.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex flex-col items-center">
            <Laptop className="h-16 w-16 text-green-500 mb-2" />
            <span className="text-sm text-gray-500">Supported</span>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone className="h-16 w-16 text-red-500 mb-2" />
            <span className="text-sm text-gray-500">Not Supported</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">What you can do:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          <li>Access Screen Snap from a desktop computer or laptop</li>
          <li>Use a desktop browser like Chrome, Firefox, or Edge</li>
          <li>Ensure your desktop browser is up to date</li>
          <li>Check back later for mobile support updates</li>
        </ul>
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 w-full"
        >
          <ArrowLeft className="h-5 w-5" />
          Return to Home
        </Link>
      </div>
    </div>
  )
}