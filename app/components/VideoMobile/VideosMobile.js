import React from "react";
import styles from "./VideosMobile.module.css";
import VideoMobile from "./VideoMobile";
import { descriptions } from "./data";

const VideosMobile = () => {
  return (
    <section className={styles.filmography}>
      <div className={styles.heading}>
        <h1>FILMOGRAPHY</h1>
      </div>
      <div id="films" className={styles.films}>
        {descriptions.map((description) => (
          <VideoMobile key={description.title} {...description} />
        ))}
      </div>
    </section>
  );
};

export default VideosMobile;
