'use client'
import React, { useEffect } from 'react'
import {ReactMediaRecorder} from 'react-media-recorder'
import dynamic from 'next/dynamic'

const Screen = () => {
    
    // const mediaRecorder = useReactMediaRecorder({
    //     screen:true,
    //    onStop:()=>{
    //     clearBlobUrl();
    //    },
    // //    askPermissionOnMount:true,

    // })


//   useEffect(() => {
//     // Start recording when the component mounts
//     mediaRecorder.startRecording();

//     // Stop recording when the component unmounts
//     return () => {
//      mediaRecorder.stopRecording();
//     };
//   }, [mediaRecorder.startRecording, mediaRecorder.stopRecording]); 
// useEffect(() => {
    

  
// }, [])

  return (
    <div>
        {
        <ReactMediaRecorder
    video
    render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
      <div>
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
        <video src={mediaBlobUrl} controls autoPlay loop />
      </div>
    )}
  />
}
  </div>
  )
}

export default dynamic(() => Promise.resolve(Screen), { ssr: false });
// export default Screen;s
