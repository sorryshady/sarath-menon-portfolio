import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styles from './Landing.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Video from '../Video/Video'
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
      x: '-=300px',
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
    xPercent += 0.1 * direction
  }

  return (
    <main className={styles.main}>
      {/* <Image
        fill={true}
        alt='backgroundImg'
        src='/Images/Background1.jpg'
        priority
      /> */}
      <Video />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Independent Film Maker -</p>
          <p ref={secondText}>Independent Film Maker -</p>
        </div>
      </div>
    </main>
  )
}

export default Landing
