import React, { useEffect, useState } from 'react'
import styles from './PreLoader.module.css'
import { motion } from 'framer-motion'
import { animationVariant, paraVariant } from './anime'
const PreLoader = () => {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const words = [
    'ശരത് മേനോൻ',
    'サラス・メノン',
    'सारथ मेनन',
    'سارات مينون',
    'சரத் ​​மேனன்',
    '사라스 메논',
    'ಶರತ್ ಮೆನನ್',
    'Sarath Menon',
  ]

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])
  useEffect(() => {
    if (index == words.length - 1) return

    setTimeout(
      () => {
        setIndex(index + 1)
      },
      index == 0 ? 1000 : 150
    )
  }, [index])

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
    <motion.div
      variants={animationVariant}
      initial='initial'
      exit='exit'
      className={styles.introduction}
    >
      {dimension.height > 0 && (
        <>
          <motion.p
            className={styles.introText}
            variants={paraVariant}
            initial='initial'
            animate='animate'
          >
            {words[index]}
          </motion.p>
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
  )
}

export default PreLoader
