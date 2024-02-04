"use client";
import React from 'react'
import styles from './Video.module.css'
import Vimeo from '@u-wave/react-vimeo'
const Video = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        poster='/Images/videothumbnail.jpg'
        width={'100%'}
        height={'100%'}
        playsInline
        controls
        className={styles.video}
        autoPlay
        muted={true}
        loop
        controlsList='nodownload'
        src='/Videos/reel.mp4'
      />
      {/* <Vimeo
        video='898292506'
        width={'100vw'}
        height={'100svh'}
        autoplay={true}
        // controls={false}
        muted={true}
        playsInline
        loop
        className={styles.video}
      /> */}
    </div>
  )
}

export default Video;
