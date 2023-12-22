'use client'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Button from './Button/Button'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from './Nav/Nav'

const Header = () => {
  const [inner, setInner] = useState(window.innerWidth)

  useEffect(() => {
    const changeInner = () => {
      setInner(window.innerWidth)
    }

    window.addEventListener('resize', changeInner)

    return () => {
      window.removeEventListener('resize', changeInner)
    }
  }, [])
  console.log(inner)
  const variants = {
    open: {
      width: inner > 768 ? 480 : 250,
      height: inner > 768 ? 450 : 350,
      top: '-10px',
      right: '-10px',
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: inner > 768 ? 100 : 80,
      height: inner > 768 ? 40 : 30,
      top: '0px',
      right: '0px',
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  }
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.header}>
      <motion.div
        variants={variants}
        animate={isActive ? 'open' : 'closed'}
        className={styles.menu}
        initial='closed'
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

export default Header
