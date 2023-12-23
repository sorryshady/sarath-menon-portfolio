'use client'
import styles from './page.module.css'
import Landing from './components/Landing/Landing'
import PreLoader from './components/PreLoader/PreLoader'
import {  AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Filler from './components/Filler/Filler'
import ScrollSnap from './components/ScrollSnap/ScrollSnap'
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
      <ScrollSnap>
        <Landing />
        <Filler content='Filler 1' />
        <Filler content='Filler 2' />
      </ScrollSnap>
    </main>
  )
}
