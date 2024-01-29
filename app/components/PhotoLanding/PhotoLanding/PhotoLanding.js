"use client";
import React from "react";
import Link from "next/link";
import styles from "./PhotoLanding.module.css";
import { photoLandingData } from "./data";
const PhotoLanding = () => {
  return (
    <>
      <div className={styles.heading} id="photography">
        <h1>PHOTOGRAPHY</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          {photoLandingData.map((item) => (
            <div key={item.title} className={styles.box}>
              <Link href={item.to}>
                <img src={item.imageLink} alt={item.title} />
                <div className={styles.after}>{item.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoLanding;
