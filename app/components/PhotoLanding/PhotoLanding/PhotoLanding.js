"use client";
import React from "react";
import Link from "next/link";
import styles from "./PhotoLanding.module.css";
import { photoLandingData, images } from './data'
import Heading from '@/app/utils/Heading/Heading'
import Image from 'next/image'

const PhotoLanding = () => {
  return (
    <>
      <Heading text='Photography' id={'photography'} />
      <section className='container'>
        <div className={styles.content}>
          {photoLandingData.map((item, i) => (
            <div key={item.title} className={styles.box}>
              <Link href={item.to}>
                <Image src={images[i]} alt={item.title} placeholder='blur' />
                <div className={styles.after}>{item.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default PhotoLanding;
