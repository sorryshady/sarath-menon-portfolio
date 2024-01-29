import React from "react";
import styles from "./carousel.module.css";
import Image from 'next/image'
import { imagesData1, imagesData2 } from './data'

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.slider}>
        <div className={styles.slidetrackone}>
          {imagesData1.map((image) => (
            <div key={image.id} className={styles.slide}>
              <Image
                src={image.path}
                alt={`Image ${image.id}`}
                width={500}
                height={500}
                quality={100}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.slider}>
        <div className={styles.slidetracktwo}>
          {imagesData2.map((image) => (
            <div key={image.id} className={styles.slide}>
              <Image
                src={image.path}
                alt={`Image ${image.id}`}
                width={500}
                height={500}
                quality={100}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;
