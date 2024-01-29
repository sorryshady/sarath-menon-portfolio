export const animationVariant = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100svh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
}
export const paraVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.2 },
  },
}
