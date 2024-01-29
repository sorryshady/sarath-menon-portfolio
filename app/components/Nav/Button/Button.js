import React from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'
import styles from './Button.module.css'
const Button = ({ isActive, setIsActive }) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.button}>
      <motion.div
        animate={{ y: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={styles.slider}
      >
        <div className={styles.el}>
          <FaBars />
        </div>
        <div className={styles.el}>
          <FaXmark />
        </div>
      </motion.div>
    </div>
  )
}

export default Button

