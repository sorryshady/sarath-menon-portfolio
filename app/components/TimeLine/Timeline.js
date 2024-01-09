'use client'
import React, { useLayoutEffect, useRef } from 'react'
import styles from './Timeline.module.css'
import Reveal from '../utils/Reveal/Reveal'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Video from '../Video/Video'
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
          start: 'top 10%',
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
        <div className={styles.description}>
          <p>
            Sarath Menon, a professional filmmaker, screenwriter,
            cinematographer and photographer, is an alumnus of The London Film
            School, after completing his undergraduate as a Chemical Engineer
            from the prestigious BITS Pilani. An Internationally acclaimed
            artist and visual storyteller, his creations hold meaning beyond the
            blink of an eye.
          </p>
          <p>
            Brimming with poetic afterthought, Sarath tells stories through
            visuals and words. His aesthetic compositions and unique lighting
            makes his visual creations deep and insightful. He captures emotions
            and conveys them profoundly, leaving you with a tear drop or a smile
            on your face when he signs off.
          </p>
        </div>

        <div ref={slider} className={styles.scrollContainer}>
          <div className={`panel`}>
            <div className={styles.desc}>
              <div>2015</div>
              <div>Debut as Film Writer-Director</div>
            </div>
          </div>
          <div className={`panel`}>
            <div className={styles.desc}>
              <div>2015</div>
              <div>Debut as Film Writer-Director</div>
            </div>
          </div>
          <div className={`panel`}>
            <div className={styles.desc}>
              <div>2015</div>
              <div>Debut as Film Writer-Director</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Timeline
