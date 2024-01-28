import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import styles from './VideoMobileModal.module.css'
const VideoMobileModal = ({
  title,
  description,
  modalContent,
  videoLink,
  setIsOpen,
  isOpen,
}) => {
  useEffect(() => {
    const body = document.querySelector('body')

    if (isOpen) {
      body.classList.add('modal-open')
    }
     else {
      body.classList.remove('modal-open')
    }
  }, [isOpen])
  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <div className={styles.iframeContainer}>
          <iframe
            id={title}
            src={videoLink}
            title='Video Player'
            width='100%'
            height='100%'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className={styles.iframe}
          ></iframe>
        </div>
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.description}>{description}</div>
          <div className={styles.suppliedContent}>{modalContent}</div>
        </div>
      </motion.div>
    </div>
  )

  if (!isOpen) return <></>

  return ReactDOM.createPortal(content, document.getElementById('modal'))
}

export default VideoMobileModal
