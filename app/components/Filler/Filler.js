import React from 'react'
import styles from './Filler.module.css'
const Filler = ({ content }) => {
  return <div className={`panel ${styles.filler}`}>{content}</div>
}

export default Filler
