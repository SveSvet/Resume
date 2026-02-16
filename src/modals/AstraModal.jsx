import { useEffect } from 'react'
import classNames from 'classnames'
import confetti from 'canvas-confetti'
import styles from './ModalContent.module.css'

const achievements = [
  { icon: '•', text: '• Сократила время освоения на 20%' },
  { icon: '•', text: '• Построила CJM, нашла 15–20 проблем' },
  { icon: '•', text: '• Внедрила code review и style guide' },
  { icon: '•', text: '• Оптимизировала архитектуру' },
]

export default function AstraModal() {
  useEffect(() => {
    const burst = () => {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#4A90E2', '#2EC4B6', '#FFD93D'],
      })
    }
    const t = setTimeout(burst, 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={styles.root}>
      <h2 id="modal-title" className={styles.title}>
        Astra Linux
      </h2>
      <div className={classNames(styles.card, styles.cardAstra)}>
        <p className={styles.cardMeta}>май 2024 — сентябрь 2025</p>
        <p className={styles.cardRole}>Frontend-разработчик</p>
        <p className={styles.cardMeta}>B2B для мониторинга ИТ</p>
      </div>

      <div>
        <ul className={styles.achievementsList}>
          {achievements.map(({ icon, text }) => (
            <li key={text} className={styles.achievementItem}>
              <span className={styles.achievementText}>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
