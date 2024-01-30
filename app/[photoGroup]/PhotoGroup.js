"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import styles from './PhotoGroup.module.css'
import PhotoModal from './PhotoModal/PhotoModal'

const PhotoGroup = ({ photoGroup, photos }) => {
  const [src, setSrc] = useState('')
  const [clicked, setClicked] = useState(false)
  const clickHandler = (src) => {
    setSrc(src)
    setClicked(true)
  }

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [clicked])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 id='photo'>{photoGroup}</h1>
        </div>
        <div className={styles.content}>
          {photos.map((item, index) => (
            <div
              key={index}
              className={styles.box}
              onClick={() => clickHandler(item)}
            >
              <Image
                src={item}
                alt={`item-{photoGroup}-id`}
                placeholder='blur'
              />
            </div>
          ))}
        </div>
      </div>
      {clicked && <PhotoModal src={src} handleClick={setClicked} />}
    </>
  )
}

export default PhotoGroup;
