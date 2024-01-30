"use client";
import React, { useEffect, useState } from "react";
import styles from "./PreLoader.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { animationVariant, paraVariant } from "./anime";
import Image from 'next/image'
import logo from '/public/Images/logo.png'
const PreLoader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setDimension({ width: window.innerWidth, height: window.innerHeight })
    setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 1000)
    setTimeout(() => {
      setIsLoading(false)
      window.scrollTo(0, 0)
    }, 1000)
  }, [])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  }

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        <motion.div
          variants={animationVariant}
          initial='initial'
          exit='exit'
          className={styles.introduction}
        >
          {dimension.height > 0 && (
            <>
              <motion.div
                className={styles.introText}
                variants={paraVariant}
                initial='initial'
                animate='animate'
              >
                <Image src={logo} alt='logo' priority />
                <p>Sarath Menon</p>
              </motion.div>
              <svg className={styles.svg}>
                <motion.path
                  variants={curve}
                  initial='initial'
                  exit='exit'
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default PreLoader;
