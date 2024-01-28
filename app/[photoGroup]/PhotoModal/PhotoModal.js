import React from 'react'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import styles from './PhotoModal.module.css'
const PhotoModal = ({ src, handleClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* <img src={src} alt='photo' /> */}
        <Image
          src={src}
          alt={'photo'}
          width={1920}
          height={1080}
          priority
          quality={100}
        />
      </div>
      <div onClick={() => handleClick(false)} className={styles.close}>
        {/* <IoClose /> */}
        CLOSE
      </div>
    </div>
  )
}

export default PhotoModal
