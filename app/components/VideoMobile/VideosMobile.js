import React from "react";
import styles from "./VideosMobile.module.css";
import VideoMobile from "./VideoMobile";
import { descriptions, thumbnails } from './data'

const VideosMobile = () => {
  return (
    <section className={`container ${styles.smallScreen}`}>
      <div id='films' className={styles.films}>
        {descriptions.map((description, index) => (
          <VideoMobile
            key={description.title}
            {...description}
            thumbnail={thumbnails[index]}
          />
        ))}
      </div>
    </section>
  )
};

export default VideosMobile;
