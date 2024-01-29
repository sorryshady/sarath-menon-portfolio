import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Filmography.module.css'
import { descriptions } from '../VideoMobile/data'
import Heading from '@/app/utils/Heading/Heading'
import VideosMobile from '../VideoMobile/VideosMobile'

const Filmography = () => {
  const [index, setIndex] = useState(0)
  return (
    <>
      <Heading text={'Filmography'} id={'films'} />
      <section className={`container ${styles.largeScreen}`}>
        <div className={styles.activeVideo}>
          <iframe
            id='videoIframe'
            width='100%'
            height='100%'
            src={descriptions[index].link}
            title='Video Player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        <Description {...descriptions[index]} />
        <div className={styles.thumbnails}>
          {descriptions.map((description, index) => (
            <div
              key={index}
              className={styles.thumbnailWrapper}
              onClick={() => {
                setIndex(index)
              }}
            >
              <Image
                src={description.thumbnail}
                alt={description.title}
                className={styles.thumbnail}
                width={500}
                height={500}
                quality={100}
              />
              <div className={styles.after}>{description.title}</div>
            </div>
          ))}
        </div>
      </section>
      <VideosMobile />
    </>
  )
}

export default Filmography

const Description = ({ title, description, cast }) => {
  return (
    <div className={styles.descriptionWrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.cast}>{cast}</div>
    </div>
  )
}
