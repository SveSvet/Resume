import { useEffect } from 'react'
import classNames from 'classnames'
import confetti from 'canvas-confetti'
import styles from './ModalContent.module.css'

const achievements = [
  { icon: '•', text: '• Работала над 10+ продуктами' },
  { icon: '•', text: '• Внесла вклад в дизайн-систему (50%+ компонентов)' },
  { icon: '•', text: '• A/B-тесты и аналитика' },
  { icon: '•', text: '• Менторинг джунов' },
  { icon: '•', text: '• Выступление на РИФ' },
]

export default function BeelineModal() {
  useEffect(() => {
    const burst = () => {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF6B35', '#FFD93D', '#FF6F61'],
      })
    }
    const t = setTimeout(burst, 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={styles.root}>
      <h2 id="modal-title" className={styles.title}>
        beeline
      </h2>
      <div className={classNames(styles.card, styles.cardBeeline)}>
        <p className={styles.cardMeta}>июль 2020 — май 2024</p>
        <p className={styles.cardRole}>Frontend-разработчик</p>
        <p className={styles.cardMeta}>B2C для миллионов пользователей</p>
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
