import React from "react";
import styles from "./poetry.module.css";
import Link from "next/link";
import Image from 'next/image'
import Heading from '@/app/utils/Heading/Heading'
import poem from '/public/Images/poem/img_2.jpg'
const Poetry = () => {
  return (
    <>
      <Heading text='Poetry' id={'poems'} />
      <div className={`container ${styles.poemWrapper}`}>
        <div className={styles.image}>
          <Image src={poem} alt='image' placeholder='blur' />
        </div>
        <div className={styles.poem}>
          <p className={styles.content}>
            To know more about Sarath&apos;s inner world and the depth at which
            he exists, read some of his poems he looks forward to publish.
          </p>
          <div className={styles.linkdiv}>
            <Link href='/poems' className={styles.link}>
              <span className={styles.viewmore}> View More</span>
              <span className={styles.arrow}>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poetry;
