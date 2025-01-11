'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { Camera, Download, Upload, Video, Play, AlertCircle, Maximize2 } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const ReactMediaRecorder = dynamic(
  () => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder),
  { ssr: false }
)

export default function RecordComponent() {
  const [blobUrl, setBlobUrl] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const Router = useRouter();

  const fetchBlob = (url) => {
    setBlobUrl(url)
    setShowVideo(false)
  }

  const getBlobFromUrl = async (url) => {
    try {
      const response = await fetch(url)
      return await response.blob()
    } catch (error) {
      console.error('Error fetching blob from URL:', error)
      return null
    }
  }

  const downloadHandle = () => {
    if (blobUrl) {
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = "ScreenRecording.mp4"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  const uploadHandle = async () => {
    if (blobUrl) {
      const blob = await getBlobFromUrl(blobUrl)
      if (blob) {
        const fd = new FormData()
        fd.append('file', blob)
        fd.append('upload_preset', 'screen_recordings')
        fd.append('cloud_name', 'dhrsze4te')

        try {
        const token = localStorage.getItem('Usertoken');
        const user = JSON.parse(localStorage.getItem('user'));
          if (!token || !user) {
            toast.error("User not authenticated");
            Router.push('/');
            return;
          }
          const result = await axios.post(
            'https://api.cloudinary.com/v1_1/dhrsze4te/video/upload',
            fd,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          )
          console.log(result.data)
          const videoUrl = result.data.secure_url;
          
          await axios.post('https://screenrecordingtool.onrender.com/video/api/recordings',{ url: videoUrl},{headers:{
              'x-auth-token': token,
            }}
          );
          
          toast.success("File uploaded successfully")

        } catch (err) {
          toast.error("Cannot upload file")
          console.error(err)
        }
       
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">
        Screen Snap
      </h1>
      <ReactMediaRecorder
        video={false}
        screen={true}
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Record Your Screen</h2>
              <p className="text-gray-600 mb-4">
                Capture your screen with ease. Perfect for tutorials, presentations, or bug reports.
              </p>
              <p className="text-lg font-semibold mb-4 text-blue-600">Status: {status}</p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                  onClick={startRecording}
                >
                  <Camera className="h-5 w-5" />
                  Start Recording
                </button>
                <button
                  className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                  onClick={stopRecording}
                >
                  <Video className="h-5 w-5" />
                  Stop Recording
                </button>
                <button
                  className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                  onClick={() => fetchBlob(mediaBlobUrl)}
                  disabled={!mediaBlobUrl}
                >
                  <Play className="h-5 w-5" />
                  Save Recording
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Recordings</h2>
              {blobUrl ? (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Your recording is ready! Click the button below to view it.
                  </p>
                  <button
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                    onClick={() => setShowVideo(true)}
                  >
                    <Play className="h-5 w-5" />
                    View Recording
                  </button>
                  {showVideo && (
                    <div className="mt-4 flex items-start gap-4">
                      <div className="w-1/2">
                        <video
                          className="w-full h-auto rounded-lg shadow-md"
                          src={blobUrl}
                          controls
                        />
                      </div>
                      <div className="w-1/2 space-y-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="flex items-center gap-2 bg-gray-200 text-white px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-300 w-full">
                              <Maximize2 className="h-5 w-5" />
                              View Fullscreen
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <video
                              className="w-full h-auto rounded-lg shadow-md"
                              src={blobUrl}
                              controls
                              autoPlay
                            />
                          </DialogContent>
                        </Dialog>
                        <button
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm w-full"
                          onClick={downloadHandle}
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                        <button
                          className="flex items-center justify-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-md border-2 border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm w-full"
                          onClick={uploadHandle}
                        >
                          <Upload className="h-4 w-4" />
                          Upload
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg">
                  <p className="text-gray-500 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    No recordings yet. Start capturing your screen!
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tips for Great Screen Recordings</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Ensure your desktop is clean and organized before recording</li>
                <li>Close unnecessary applications to improve performance</li>
                <li>Use a good quality microphone if you&apos;re including audio</li>
                <li>Plan your content beforehand for smoother recordings</li>
                <li>Keep your recordings concise and to the point</li>
              </ul>
            </div>
          </div>
        )}
      />
    </div>
  )
}