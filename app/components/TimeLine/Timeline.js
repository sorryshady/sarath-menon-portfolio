import React from 'react'
import styles from './Timeline.module.css'
import Reveal from '../utils/Reveal/Reveal'
const Timeline = () => {
  return (
    <>
      <section className={`section-wrapper ${styles.timeline}`}>
        <Reveal>
          <h2>About</h2>
        </Reveal>
        <Reveal>
          <p className={styles.about}>
            Sarath Menon, a professional filmmaker, screenwriter,
            cinematographer and photographer, is an alumnus of The London Film
            School, after completing his undergraduate as a Chemical Engineer
            from the prestigious BITS Pilani.{' '}
          </p>
        </Reveal>
        <Reveal>
          <p className={styles.about}>
            An Internationally acclaimed artist and visual storyteller, his
            creations hold meaning beyond the blink of an eye. Brimming with
            poetic afterthought, Sarath tells stories through visuals and words.
            His aesthetic compositions and unique lighting makes his visual
            creations deep and insightful. He captures emotions and conveys them
            profoundly, leaving you with a tear drop or a smile on your face
            when he signs off.
          </p>
        </Reveal>
      </section>
    </>
  )
}

export default Timeline
