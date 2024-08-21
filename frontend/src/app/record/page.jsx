'use client'
import React, { useEffect, useRef, useState } from 'react'
import {ReactMediaRecorder} from 'react-media-recorder-2'
import dynamic from 'next/dynamic'

const Screen = () => {
  const mediaInstance =useRef(false);
  const [blobUrl , setblobUrl ] = useState(null);

//seting BlobUrl from recatmediaComponent..
  const fetchBlob =(Blob)=>{
      console.log('blob:'+Blob);
      setblobUrl(Blob);
  }

  //download functionality 
  const downloadHandle=()=>{
      const a = document.createElement('a');

      console.log(a);
      a.href = blobUrl;
      a.download = "MyVideo.mp4";
  
      document.body.appendChild(a);
      console.log(a);
      a.click();
      document.body.removeChild(a);
  }
//Component to show video
  const VideoFrame =()=>{
    return(
      <video src={blobUrl} controls autoPlay></video>
    )
  }
  //Screen return 
  return (

    <div>
      <ReactMediaRecorder
      video={false}
      screen ={true}
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl })=>{return(
        <div className='p-4 border-2 border-white rounded-md max-w-[40%] flex flex-col space-y-2'>
        <p>Status: {status}</p>
        <button className='self-start bg-green-700 px-2 py-1 rounded-full' onClick={startRecording}>Start Recording</button>
        <button className='self-start bg-red-700 px-2 py-1 rounded-full' onClick={stopRecording}>Stop Recording</button>
        <button disabled={!mediaBlobUrl && true} className='self-end' onClick={()=>{fetchBlob(mediaBlobUrl)}}>show blob</button>
      </div>
  )}}
      />
{
  blobUrl && (<div className='max-w-[70%] mx-auto border-4 border-red-700 text-center'><VideoFrame></VideoFrame></div>)
 
}
{
 blobUrl && ( <button className='p-4 bg-green-500 rounded-full' onClick={downloadHandle}>
  Download Video
</button>)
}
 


    
    {/* <p>{mediaRecorder.status}</p>
    <button onClick={mediaRecorder.startRecording}>Start Recording</button>
    <button onClick={mediaRecorder.stopRecording}>Stop Recording</button>
    <video src={mediaRecorder.mediaBlobUrl} controls autoPlay loop /> */}
    
  </div>
  )
}

export default dynamic(() => Promise.resolve(Screen), { ssr: false });
// export default Screen;s
