"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useWindowSize } from 'rooks'
import styles from './Header.module.css'
import Logo from '../../utils/Logo'
import Button from './Button/Button'
import NavLinks from './NavLinks/NavLinks'
const Header = () => {
  const { innerWidth: inner } = useWindowSize()
  const [isActive, setIsActive] = useState(false)
  const variants = {
    open: {
      width: inner > 768 ? 480 : 250,
      height: inner > 768 ? 370 : 270,
      top: inner > 768 ? '-10px' : '-5px',
      right: inner > 768 ? '-10px' : '-5px',
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: inner > 425 ? 50 : 40,
      height: inner > 425 ? 50 : 40,
      top: '0px',
      right: '0px',
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  }
  return (
    <>
      <header className={styles.header}>
        <Link href={'/'}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <Link href={'/'}>
          <div className={styles.name}>
            <div>SARATH MENON</div>
            <div>ARTIST | FILMMAKER</div>
          </div>
        </Link>
      </header>
      <div className={styles.menuContainer}>
        <motion.div
          variants={variants}
          animate={isActive ? 'open' : 'closed'}
          className={styles.menu}
          initial='closed'
        >
          <AnimatePresence>
            {isActive && <NavLinks setIsActive={setIsActive} />}
          </AnimatePresence>
        </motion.div>
        <Button setIsActive={setIsActive} isActive={isActive} />
      </div>
    </>
  )
}

export default Header;
