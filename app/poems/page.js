import React from 'react'
import Image from 'next/image'
import { data, poemImages } from './data'
import styles from './poetry.module.css'

const Poetry = () => {
  return (
    <div className={styles.main}>
      {data.map((item, index) => (
        <div key={item.id}>
          <h1 className={styles.title}>{item.title}</h1>
          <div className={styles.poemContainer}>
            <div className={styles.poemimage}>
              <Image
                src={poemImages[index]}
                alt={item.title}
                placeholder='blur'
              />
            </div>
            <div className={styles.poem}>{item.poem}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Poetry
