import React from 'react'
import styles from './Nav.module.css'
import { links } from './data'
import Link from 'next/link'
import { motion } from 'framer-motion'

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: '80px',
    translateX: '-20px',
  },
  animate: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: '0px',
    translateX: '0px',
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
}

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          return (
            <div key={i} className={styles.linkContainer}>
              <motion.div
                variants={perspective}
                custom={i}
                initial='initial'
                animate='animate'
                exit='exit'
                className={styles.link}
              >
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Nav
