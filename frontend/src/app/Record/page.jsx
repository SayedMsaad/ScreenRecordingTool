'use client'
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react'
// import { ReactMediaRecorder } from 'react-media-recorder-2'
import axios from 'axios'
import localFont from "next/font/local";
import toast from 'react-hot-toast'
// const {ReactMediaRecorder} =dynamic(() => import('react-media-recorder-2'), { ssr: false });
const ReactMediaRecorder = dynamic(
  () => import('react-media-recorder-2').then((mod) => mod.ReactMediaRecorder),
  { ssr: false }
);

const local = localFont({ src: '../../Fonts/GrandisExtended-Black.ttf' })
const Record = () => {  
//capital R
  const mediaInstance = useRef(false);
  const [blobUrl, setblobUrl] = useState(null);
  const [blobdata, setblobdata] = useState(null);

  //seting BlobUrl from recatmediaComponent..
  const fetchBlob = (url) => {
    console.log('blob:' + Blob);
    setblobUrl(url);
    // setblobdata(blob);
  }

  const getBlobFromUrl = async () => {
    try {
      // Use fetch to download the blob URL
      const response = await fetch(blobUrl);

      // Convert the response into a Blob object
      const blob = await response.blob();
      console.log("blob genrated successfully");
      return blob;
    } catch (error) {
      console.error('Error fetching blob from URL:', error);
      return null;
    }
  };

  //download functionality 
  const downloadHandle = () => {
    const a = document.createElement('a');

    console.log(a);
    a.href = blobUrl;
    a.download = "MyVideo.mp4";

    document.body.appendChild(a);
    console.log(a);
    a.click();
    document.body.removeChild(a);
  }

  const uploadHandle = async () => {
    const blob = await getBlobFromUrl();
    if (blob) {


      const fd = new FormData();

      fd.append('file', blob);
      fd.append('upload_preset', 'mypreset');
      fd.append('cloud_name', 'dhrsze4te');

      axios.post('https://api.cloudinary.com/v1_1/dhrsze4te/video/upload', fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then((result) => {
        toast.success("File Uploaded successfully");
        console.log(result.data);
      }).catch((err) => {
        toast.error("Cannot Upload File");
        console.log(err);
      });
    } else {
      console.log("No media blob present");
    }
  }
  //Component to show video
  const VideoFrame = () => {
    return (
      <video className='rounded-md' src={blobUrl} controls autoPlay></video>
    )
  }
  //Screen return 
  return (

    <div>
      <ReactMediaRecorder
        video={false}
        screen={true}
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
          return (
            <div className='w-full p-5 bg-gray-200 flex items-center justify-center space-x-4'>
              <p className={`${local.className} rounded-full hover:text-lg transition-all duration-300`}>Status: {status}</p>
              <button className={`${local.className} flex gap-2 text-green-500 rounded-full hover:text-lg transition-all duration-300`} onClick={startRecording}><img src="/images/record.svg" alt="" className='h-6' />Start Recording</button>
              <button className={`${local.className} text-red-500 rounded-full hover:text-lg transition-all duration-300`} onClick={stopRecording}> Stop Recording</button>
              <button disabled={!mediaBlobUrl && true} className={`${local.className} rounded-full hover:text-lg transition-all duration-300`} onClick={() => { fetchBlob(mediaBlobUrl) }}>show blob</button>
            </div>
          )
        }}
      />
      {
        blobUrl && (<div className='w-full px-8 flex mt-8'>

          <div className='w-[45%] flex-col space-y-6'>
            <p className={`${local.className} text-2xl`}>Well Done!</p>
            <p className={`${local.className} text-sm`}>Here is your recording</p>
            <div className='flex gap-4'><button className='p-4 bg-gray-800 rounded-lg text-white' onClick={downloadHandle}>
              Download Video
            </button>

            <button className='p-4 bg-transparent rounded-lg border-2 border-black' onClick={uploadHandle}>
              Upload
            </button></div>
            
          </div>

          <div className='w-[55%] flex justify-between items-center'>

          <div className='w-[70%] h-[90%] text-center rounded-md'><VideoFrame></VideoFrame></div>
          </div>

        </div>)}





      {/* <p>{mediaRecorder.status}</p>
    <button onClick={mediaRecorder.startRecording}>Start Recording</button>
    <button onClick={mediaRecorder.stopRecording}>Stop Recording</button>
    <video src={mediaRecorder.mediaBlobUrl} controls autoPlay loop /> */}

    </div>
  )
}

// export default dynamic(() => Promise.resolve(Record), { ssr: false });
export default Record;

