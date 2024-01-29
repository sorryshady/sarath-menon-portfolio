import React from 'react'
import styles from './Heading.module.css'
const Heading = ({ text, id }) => {
  return (
    <div className={styles.heading} id={id}>
      <h1>{text}</h1>
    </div>
  )
}

export default Heading
