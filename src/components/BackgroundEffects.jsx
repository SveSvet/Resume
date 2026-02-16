import { useMemo } from 'react'
import styles from './BackgroundEffects.module.css'

const BUBBLE_COUNT = 12

export default function BackgroundEffects() {
  const bubbles = useMemo(
    () =>
      Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
        id: i,
        size: 8 + Math.random() * 24,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
      })),
    []
  )

  return (
    <div className={styles.root}>
      <div className={styles.gradient} />
      {bubbles.map(({ id, size, left, duration, delay }) => (
        <div
          key={id}
          className={styles.bubble}
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  )
}
