import React from 'react'
import styles from './Button.module.css'
import { motion } from 'framer-motion'
const Button = ({ isActive, setIsActive }) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.button}>
      <motion.div
        animate={{ y: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={styles.slider}
      >
        <div className={styles.el}>
          <PerspectiveText label={'Menu'} />
        </div>
        <div className={styles.el}>
          <PerspectiveText label={'Close'} />
        </div>
      </motion.div>
    </div>
  )
}
const PerspectiveText = ({ label }) => {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}

export default Button
