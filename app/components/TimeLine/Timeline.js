'use client'
import React, { useLayoutEffect, useRef } from 'react'
import styles from './Timeline.module.css'
import Reveal from '../utils/Reveal/Reveal'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Timeline = ({ mainRef }) => {
  gsap.registerPlugin(ScrollTrigger)
  const slider = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel')
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 2),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 2),
          end: () => '+=' + slider.current.offsetWidth,
          markers: true,
        },
      })
    }, mainRef.current)
    return () => ctx.revert()
  })

  return (
    <>
      <section className={styles.section}>
        <div ref={slider} className={styles.scrollContainer}>
          <div className={`${styles.blue} panel`}></div>
          <div className={`${styles.red} panel`}></div>
          <div className={`${styles.green} panel`}></div>
        </div>
      </section>
    </>
  )
}

export default Timeline
