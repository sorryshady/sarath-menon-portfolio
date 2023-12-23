'use client'
import React, { useState } from 'react'
import styles from './Video.module.css'
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from 'react-icons/hi2'
const Video = () => {
  const [mute, setMute] = useState(true)
  return (
    <div className={styles.videoContainer}>
      <video
        playsInline
        className={styles.video}
        autoPlay
        muted={mute}
        loop
        src='/Videos/reel.mp4'
      />
      <button className={styles.muteBtn} onClick={() => setMute(!mute)}>
        {mute ? (
          <HiOutlineSpeakerWave size='1.2rem' />
        ) : (
          <HiOutlineSpeakerXMark size='1.2rem' />
        )}
      </button>
    </div>
  )
}

export default Video
