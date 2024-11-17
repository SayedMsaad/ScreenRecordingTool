// 'use client'
// import dynamic from 'next/dynamic';
// import React, { useEffect, useRef, useState } from 'react'
// // import { ReactMediaRecorder } from 'react-media-recorder-2'
// import axios from 'axios'
// import localFont from "next/font/local";
// import toast from 'react-hot-toast'
// // const {ReactMediaRecorder} =dynamic(() => import('react-media-recorder'), { ssr: false });
// const ReactMediaRecorder = dynamic(
//   () => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder),
//   { ssr: false }
// );

// const local = localFont({ src: '../../Fonts/GrandisExtended-Black.ttf' })
// const Record = () => {  
// //capital R
// const [isScreenSupported, setIsScreenSupported] = useState(false);
//   const mediaInstance = useRef(false);
//   const [blobUrl, setblobUrl] = useState(null);
//   const [blobdata, setblobdata] = useState(null);

//   const checkScreenCaptureSupport = () => {
//     return !!navigator.mediaDevices?.getDisplayMedia;
//   };

//   useEffect(() => {
//     setIsScreenSupported(checkScreenCaptureSupport());
//     if (!checkScreenCaptureSupport()) {
//       toast.error("Screen recording is not supported on mobile devices.");
//     }
//   }, [])
  
//   //seting BlobUrl from recatmediaComponent..
//   const fetchBlob = (url) => {
//     console.log('blob:' + Blob);
//     setblobUrl(url);
//     // setblobdata(blob);
//   }

//   const getBlobFromUrl = async () => {
//     try {
//       // Use fetch to download the blob URL
//       const response = await fetch(blobUrl);

//       // Convert the response into a Blob object
//       const blob = await response.blob();
//       console.log("blob genrated successfully");
//       return blob;
//     } catch (error) {
//       console.error('Error fetching blob from URL:', error);
//       return null;
//     }
//   };

//   //download functionality 
//   const downloadHandle = () => {
//     const a = document.createElement('a');

//     console.log(a);
//     a.href = blobUrl;
//     a.download = "MyVideo.mp4";

//     document.body.appendChild(a);
//     console.log(a);
//     a.click();
//     document.body.removeChild(a);
//   }

//   const uploadHandle = async () => {
//     const blob = await getBlobFromUrl();
//     if (blob) {


//       const fd = new FormData();

//       fd.append('file', blob);
//       fd.append('upload_preset', 'mypreset');
//       fd.append('cloud_name', 'dhrsze4te');

//       axios.post('https://api.cloudinary.com/v1_1/dhrsze4te/video/upload', fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then((result) => {
//         toast.success("File Uploaded successfully");
//         console.log(result.data);
//       }).catch((err) => {
//         toast.error("Cannot Upload File");
//         console.log(err);
//       });
//     } else {
//       console.log("No media blob present");
//     }
//   }
//   //Component to show video
//   const VideoFrame = () => {
//     return (
//       <video className='rounded-md' src={blobUrl} controls autoPlay></video>
//     )
//   }
//   //Screen return 
//   return (

//     <div>
//       <ReactMediaRecorder
//         video={false}
//         screen={true}
//         audio
//         render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
//           return (
//             <div className='w-full p-5 bg-gray-200 flex items-center justify-center space-x-4'>
//               <p className={`${local.className} rounded-full hover:text-lg transition-all duration-300`}>Status: {status}</p>
//               <button className={`${local.className} flex gap-2 text-green-500 rounded-full hover:text-lg transition-all duration-300`} onClick={startRecording}><img src="/images/record.svg" alt="" className='h-6' />Start Recording</button>
//               <button className={`${local.className} text-red-500 rounded-full hover:text-lg transition-all duration-300`} onClick={stopRecording}> Stop Recording</button>
//               <button disabled={!mediaBlobUrl && true} className={`${local.className} rounded-full hover:text-lg transition-all duration-300`} onClick={() => { fetchBlob(mediaBlobUrl) }}>show blob</button>
//             </div>
//           )
//         }}
//       />
//       {
//         blobUrl && (<div className='w-full px-8 flex mt-8'>

//           <div className='w-[45%] flex-col space-y-6'>
//             <p className={`${local.className} text-2xl`}>Well Done!</p>
//             <p className={`${local.className} text-sm`}>Here is your recording</p>
//             <div className='flex gap-4'><button className='p-4 bg-gray-800 rounded-lg text-white' onClick={downloadHandle}>
//               Download Video
//             </button>

//             <button className='p-4 bg-transparent rounded-lg border-2 border-black' onClick={uploadHandle}>
//               Upload
//             </button></div>
            
//           </div>

//           <div className='w-[55%] flex justify-between items-center'>

//           <div className='w-[70%] h-[90%] text-center rounded-md'><VideoFrame></VideoFrame></div>
//           </div>

//         </div>)}





//       {/* <p>{mediaRecorder.status}</p>
//     <button onClick={mediaRecorder.startRecording}>Start Recording</button>
//     <button onClick={mediaRecorder.stopRecording}>Stop Recording</button>
//     <video src={mediaRecorder.mediaBlobUrl} controls autoPlay loop /> */}

//     </div>
//   )
// }

// // export default dynamic(() => Promise.resolve(Record), { ssr: false });
// export default Record;

// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import dynamic from 'next/dynamic'
// import axios from 'axios'
// import { toast } from 'react-hot-toast'
// import { Camera, Download, Upload, Video, Play, AlertCircle, Maximize2 } from 'lucide-react'
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// const ReactMediaRecorder = dynamic(
//   () => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder),
//   { ssr: false }
// )

// export default function Record() {
//   const [isScreenSupported, setIsScreenSupported] = useState(false)
//   const [blobUrl, setBlobUrl] = useState(null)
//   const [showVideo, setShowVideo] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     const checkScreenCaptureSupport = () => {
//       return !!navigator.mediaDevices?.getDisplayMedia
//     }

//     const isSupported = checkScreenCaptureSupport()
//     setIsScreenSupported(isSupported)
//     if (!isSupported) {
//       router.push('/unsupported')
//     }
//   }, [router])

//   const fetchBlob = (url) => {
//     setBlobUrl(url)
//     setShowVideo(false)
//   }

//   const getBlobFromUrl = async (url) => {
//     try {
//       const response = await fetch(url)
//       return await response.blob()
//     } catch (error) {
//       console.error('Error fetching blob from URL:', error)
//       return null
//     }
//   }

//   const downloadHandle = () => {
//     if (blobUrl) {
//       const a = document.createElement('a')
//       a.href = blobUrl
//       a.download = "ScreenRecording.mp4"
//       document.body.appendChild(a)
//       a.click()
//       document.body.removeChild(a)
//     }
//   }

//   const uploadHandle = async () => {
//     if (blobUrl) {
//       const blob = await getBlobFromUrl(blobUrl)
//       if (blob) {
//         const fd = new FormData()
//         fd.append('file', blob)
//         fd.append('upload_preset', 'mypreset')
//         fd.append('cloud_name', 'dhrsze4te')

//         try {
//           const result = await axios.post(
//             'https://api.cloudinary.com/v1_1/dhrsze4te/video/upload',
//             fd,
//             { headers: { 'Content-Type': 'multipart/form-data' } }
//           )
//           toast.success("File uploaded successfully")
//           console.log(result.data)
//         } catch (err) {
//           toast.error("Cannot upload file")
//           console.error(err)
//         }
//       }
//     }
//   }

//   if (!isScreenSupported) {
//     return null // The useEffect hook will handle the redirection
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
//         Screen Snap
//       </h1>
//       <ReactMediaRecorder
//         video={false}
//         screen={true}
//         audio
//         render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
//           <div className="space-y-8">
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-gray-800">Record Your Screen</h2>
//               <p className="text-gray-600 mb-4">
//                 Capture your screen with ease. Perfect for tutorials, presentations, or bug reports.
//               </p>
//               <p className="text-lg font-semibold mb-4 text-blue-600">Status: {status}</p>
//               <div className="flex flex-wrap gap-4">
//                 <button
//                   className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
//                   onClick={startRecording}
//                 >
//                   <Camera className="h-5 w-5" />
//                   Start Recording
//                 </button>
//                 <button
//                   className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
//                   onClick={stopRecording}
//                 >
//                   <Video className="h-5 w-5" />
//                   Stop Recording
//                 </button>
//                 <button
//                   className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
//                   onClick={() => fetchBlob(mediaBlobUrl)}
//                   disabled={!mediaBlobUrl}
//                 >
//                   <Play className="h-5 w-5" />
//                   Save Recording
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Recordings</h2>
//               {blobUrl ? (
//                 <div className="space-y-4">
//                   <p className="text-gray-600">
//                     Your recording is ready! Click the button below to view it.
//                   </p>
//                   <button
//                     className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
//                     onClick={() => setShowVideo(true)}
//                   >
//                     <Play className="h-5 w-5" />
//                     View Recording
//                   </button>
//                   {showVideo && (
//                     <div className="mt-4 flex items-start gap-4">
//                       <div className="w-1/2">
//                         <video
//                           className="w-full h-auto rounded-lg shadow-md"
//                           src={blobUrl}
//                           controls
//                         />
//                       </div>
//                       <div className="w-1/2 space-y-4">
//                         <Dialog>
//                           <DialogTrigger asChild>
//                             <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-300">
//                               <Maximize2 className="h-5 w-5" />
//                               View Fullscreen
//                             </button>
//                           </DialogTrigger>
//                           <DialogContent className="max-w-4xl">
//                             <video
//                               className="w-full h-auto rounded-lg shadow-md"
//                               src={blobUrl}
//                               controls
//                               autoPlay
//                             />
//                           </DialogContent>
//                         </Dialog>
//                         <button
//                           className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
//                           onClick={downloadHandle}
//                         >
//                           <Download className="h-4 w-4" />
//                           Download
//                         </button>
//                         <button
//                           className="flex items-center justify-center gap-2 w-full bg-white text-blue-700 px-4 py-2 rounded-md border-2 border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
//                           onClick={uploadHandle}
//                         >
//                           <Upload className="h-4 w-4" />
//                           Upload
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg">
//                   <p className="text-gray-500 flex items-center gap-2">
//                     <AlertCircle className="h-5 w-5" />
//                     No recordings yet. Start capturing your screen!
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tips for Great Screen Recordings</h2>
//               <ul className="list-disc list-inside space-y-2 text-gray-600">
//                 <li>Ensure your desktop is clean and organized before recording</li>
//                 <li>Close unnecessary applications to improve performance</li>
//                 <li>Use a good quality microphone if you&apos;re including audio</li>
//                 <li>Plan your content beforehand for smoother recordings</li>
//                 <li>Keep your recordings concise and to the point</li>
//               </ul>
//             </div>
//           </div>
//         )}
//       />
//     </div>
//   )
// }

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import RecordComponent from '@/components/Recordmain'

export default function Record() {
  const router = useRouter()

  useEffect(() => {
    const checkScreenCaptureSupport = () => {
      return !!navigator.mediaDevices?.getDisplayMedia
    }

    if (!checkScreenCaptureSupport()) {
      router.push('/unsupported')
    }
  }, [router])

  return <RecordComponent />
}