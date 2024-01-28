"use client";
import React, { useState } from "react";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import styles from "./Video.module.css";
const Video = () => {
  const [mute, setMute] = useState(true);

  return (
    <div className={styles.videoContainer}>
      <video
        playsInline
        controls
        className={styles.video}
        autoPlay
        muted={mute}
        loop
        src="/Videos/reel.mp4"
      />
      {/* <button className={styles.muteBtn} onClick={() => setMute(!mute)}>
        {mute ? (
          <HiOutlineSpeakerWave size="1.8rem" />
        ) : (
          <HiOutlineSpeakerXMark size="1.8rem" />
        )}
      </button> */}
    </div>
  );
};

export default Video;
