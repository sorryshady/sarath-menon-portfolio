/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef } from 'react'
import styles from './Landing.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Video from '../Video/Video'
import { motion } from 'framer-motion'
const Landing = () => {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)

  let xPercent = 0
  let direction = -1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    requestAnimationFrame(animation)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-=200px',
    })
  }, [])

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0
    }
    if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animation)
    xPercent += 0.05 * direction
  }

  const slideUp = {
    initial: {
      y: 300,
    },
    enter: {
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
    },
  }
  return (
    <motion.main
      variants={slideUp}
      initial='initial'
      animate='enter'
      className={styles.main}
    >
      <Video />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Independent Film Maker -</p>
          <p ref={secondText}>Independent Film Maker -</p>
        </div>
      </div>
    </motion.main>
  )
}

export default Landing
