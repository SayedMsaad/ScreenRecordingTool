'use client'
import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const recording = () => {
  const mediaRecorderRef = useRef(null);
  const [mediaBlobUrl, setMediaBlobUrl] = useState('');
  const [status, setStatus] = useState('Idle');

  useEffect(() => {
    const initMediaRecorder = async () => {
      if (mediaRecorderRef.current) {
        console.log('MediaRecorder instance already exists');
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });

        const mimeType = 'video/webm';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          console.error(`MIME type ${mimeType} is not supported`);
          return;
        }

        const recorder = new MediaRecorder(stream, { mimeType });

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setMediaBlobUrl(URL.createObjectURL(event.data));
          }
        };

        recorder.onstart = () => setStatus('Recording');
        recorder.onstop = () => setStatus('Stopped');

        mediaRecorderRef.current = recorder;
        recorder.start();
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    initMediaRecorder();

    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        mediaRecorderRef.current = null; // Clean up the ref
      }
    };
  }, []);

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={() => mediaRecorderRef.current && mediaRecorderRef.current.start()}>Start Recording</button>
      <button onClick={() => mediaRecorderRef.current && mediaRecorderRef.current.stop()}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default dynamic(() => Promise.resolve(recording), { ssr: false });
