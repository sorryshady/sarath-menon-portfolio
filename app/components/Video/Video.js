"use client";
import React from 'react'
import styles from './Video.module.css'
const Video = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        playsInline
        controls
        className={styles.video}
        autoPlay
        muted={true}
        loop
        controlsList='nodownload'
        src='/Videos/reel.mp4'
      />
    </div>
  )
}

export default Video;
