"use client";
import React, { useEffect, useState } from "react";
import styles from "./PhotoGroup.module.css";
import PhotoModal from "./PhotoModal/PhotoModal";

const PhotoGroup = ({ photoGroup, photos }) => {
  const [src, setSrc] = useState("");
  const [clicked, setClicked] = useState(false);
  const clickHandler = (src) => {
    setSrc(src);
    setClicked(true);
  };
  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [clicked]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{photoGroup}</h1>
        </div>
        <div className={styles.content}>
          {photos.map((item) => (
            <div
              key={item.id}
              className={styles.box}
              onClick={() => clickHandler(item.path)}
            >
              <img src={item.path} alt={`${item.id}-${photoGroup}-img`} />
            </div>
          ))}
        </div>
      </div>
      {clicked && <PhotoModal src={src} handleClick={setClicked} />}
    </>
  );
};

export default PhotoGroup;
