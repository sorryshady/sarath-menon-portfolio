'use client'
import styles from './page.module.css'
import Landing from './components/Landing/Landing'
import PreLoader from './components/PreLoader/PreLoader'
import {  AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
    }, 2000)
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading ? <PreLoader /> : null}
      </AnimatePresence>
      <Landing />
    </main>
  )
}
