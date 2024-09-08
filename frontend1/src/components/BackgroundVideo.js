import React, { useRef, useEffect } from 'react';
import './Backgroundv.css';

const BackgroundVideo = () => {
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set the playback rate to slow down the video
    }
  }, []);

  return (
    <div className="background-video-container">
      <video autoPlay loop muted id="background-video" ref={videoRef}>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
