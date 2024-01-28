import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./VideosMobile.module.css";
import VideoMobileModal from "./VideoMobileModal/VideoMobileModal";
const VideoMobile = ({ title, description, thumbnail, link, cast }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.videoWrapper}>
        <div onClick={() => setIsOpen(true)} className={styles.videoImage}>
          <Image
            src={thumbnail}
            alt={title}
            width={500}
            height={500}
            quality={100}
            priority
          />
        </div>
        <div className={styles.videoCopy}>
          <div className={styles.videoTitle}>
            <h4>{title}</h4>
          </div>
          <p className={styles.videoDescription}>
            {description}{" "}
            <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
          </p>
        </div>
      </div>
      <VideoMobileModal
        title={title}
        description={description}
        modalContent={cast}
        videoLink={link}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  );
};

export default VideoMobile;
