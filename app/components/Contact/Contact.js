import React from 'react'
import styles from './Contact.module.css'
import Reveal from '../utils/Reveal/Reveal'
import Image from 'next/image'
const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
      <div className={styles.header}>
        <Reveal>
          <div className={styles.headingContainer}>
            <div className={styles.photo}>
              <Image
                src='/Images/SarathMenon.jpg'
                alt='Sarath Menon'
                fill
                sizes='(100vw, 100vh)'
              />
            </div>
            <div className={styles.sectionHeader}>Let&apos;s work together</div>
          </div>
        </Reveal>
      </div>
      <hr />
      <div className={styles.footer}>
        <Reveal>
          <div className={styles.pill}>
            <a href='mailto:sample@sample.com'>sample@sample.com</a>
          </div>
        </Reveal>
        <Reveal>
          <div className={styles.pill}>
            <a href='tel:+911234567890'>+91 1234567890</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
