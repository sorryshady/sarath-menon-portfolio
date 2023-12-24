import React from 'react'
import styles from './Filler.module.css'
import Reveal from '../utils/Reveal/Reveal'
const Filler = ({ content }) => {
  return (
    <div className={`panel ${styles.filler}`}>
      <Reveal>{content}</Reveal>
    </div>
  )
}

export default Filler
