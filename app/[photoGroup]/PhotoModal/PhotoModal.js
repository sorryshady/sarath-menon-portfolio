import React from 'react'
import Image from 'next/image'
import styles from './PhotoModal.module.css'
const PhotoModal = ({ src, handleClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={src} alt={'photo'} placeholder='blur' />
      </div>
      <div onClick={() => handleClick(false)} className={styles.close}>
        CLOSE
      </div>
    </div>
  )
}

export default PhotoModal
