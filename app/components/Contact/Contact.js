import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'
import { LuPhone } from 'react-icons/lu'
import Image from 'next/image'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <section className='container' id='contact'>
      <div className={styles.contactWrapper}>
        <div className={styles.contactPhoto}>
          <Image
            src='/Images/SarathMenon.jpg'
            alt='Sarath'
            width={500}
            height={500}
            quality={100}
            priority
          />
        </div>
        <div className={styles.contactContent}>
          <div className={styles.heading}>Let&apos;s work together</div>
          <div className={styles.subHeading}>
            <div className={styles.icons}>
              <FaInstagram />
            </div>
            <a
              href='https://www.instagram.com/sarathmenonfilms/'
              target='_blank'
              className={styles.insta}
            >
              <span className={styles.username}>sarathmenonfilms</span>
            </a>
          </div>
          <div className={styles.subHeading}>
            <div className={styles.icons}>
              <LuMail />
            </div>
            <a href='mailto:sarathmenonfilms@gmail.com'>
              sarathmenonfilms@gmail.com
            </a>
          </div>
          <div className={styles.subHeading}>
            <div className={styles.icons}>
              <LuPhone />
            </div>
            <a href='tel:+917387000371'>+91 7387000371</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
