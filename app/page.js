'use client'
import styles from './page.module.css'
import Landing from './components/Landing/Landing'
import PreLoader from './components/PreLoader/PreLoader'
import {  AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Filler from './components/Filler/Filler'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import ScrollEffect from './components/ScrollEffect/ScrollEffect'
import Contact from './components/Contact/Contact'
import Timeline from './components/TimeLine/Timeline'
// import Description from './components/Description/Description'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
    }, 2000)
    setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 2500)
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading ? <PreLoader /> : null}
      </AnimatePresence>
      <SmoothScroll>
        <Landing />
        <Timeline />
        <ScrollEffect />
        <Filler content='Filler 1' />
        <Contact />
        {/* <Contact /> */}
      </SmoothScroll>
    </main>
  )
}
