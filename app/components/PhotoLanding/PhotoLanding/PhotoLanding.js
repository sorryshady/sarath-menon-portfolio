"use client";
import React from "react";
import Link from "next/link";
import styles from "./PhotoLanding.module.css";
import { photoLandingData } from "./data";
import Heading from '@/app/utils/Heading/Heading'
import Image from 'next/image'
const PhotoLanding = () => {
  return (
    <>
      <Heading text='Photography' id={'photography'} />
      <section className='container'>
        <div className={styles.content}>
          {photoLandingData.map((item) => (
            <div key={item.title} className={styles.box}>
              <Link href={item.to}>
                <Image
                  src={item.imageLink}
                  alt={item.title}
                  width={500}
                  height={500}
                  quality={100}
                />
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
