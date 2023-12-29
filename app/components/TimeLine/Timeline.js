'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Timeline.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Timeline = () => {
  const [year, setYear] = useState('2015')
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const years = document.querySelectorAll('.year')
    const options = {
      threshold: 0.9,
    }
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setYear(entry.target.id)
        }
      })
    }
    const observer = new IntersectionObserver(callback, options)

    years.forEach((section) => observer.observe(section))
  }, [])
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.year:not(:first-child)', { opacity: 0, scale: 0.5 })
      const animation = gsap.to('.year:not(:first-child)', {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      })
      ScrollTrigger.create({
        trigger: '.timeline',
        start: 'top 20%',
        end: 'bottom 80%',
        pin: '.yearsRef',
        animation: animation,
        scrub: true,
        // markers: true,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className={`section-wrapper ${styles.section}`}>
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
            on your face when he signs off.
          </p>
        </div>
        <div className={`timeline ${styles.timelineWrapper}`}>
          <div className={`yearsRef ${styles.years}`}>
            <p className={year === '2015' ? styles.active : ''}>2015</p>
            <p className={year === '2016' ? styles.active : ''}>2016</p>
            <p className={year === '2017' ? styles.active : ''}>2017</p>
            <p className={year === '2018' ? styles.active : ''}>2018</p>
            <p className={year === '2019' ? styles.active : ''}>2019</p>
            <p className={year === '2020' ? styles.active : ''}>2020</p>
            <p className={year === '2021' ? styles.active : ''}>2021</p>
            <p className={year === '2023' ? styles.active : ''}>2023</p>
          </div>
          <div className={styles.timelineDesc}>
            <div id='2015' className={`${styles.yearView} year`}>
              Debut Film as Writer-Director
            </div>
            <div id='2016' className={`${styles.yearView} year`}>
              Kerala state award winner for Rajakumaran
            </div>
            <div id='2017' className={`${styles.yearView} year`}>
              Joined London Film School
            </div>
            <div id='2018' className={`${styles.yearView} year`}>
              Awarded Best Cinematographer at Pilas en Corto International Film
              Festival, Spain
            </div>
            <div id='2019' className={`${styles.yearView} year`}>
              Graduated MA in Filmmaking
            </div>
            <div id='2020' className={`${styles.yearView} year`}>
              Started working in Indian Film and advertising Industry
            </div>
            <div id='2021' className={`${styles.yearView} year`}>
              Started working with Rajiv Menon
            </div>
            <div id='2023' className={`${styles.yearView} year`}>
              Independent
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Timeline
