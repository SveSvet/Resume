import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const name = 'Светлана Митюхина'
const specialization = 'Frontend-разработчик & UX-исследователь'
const pitch = 'Frontend-разработчик с опытом в UX-исследованиях. Умею находить проблемы пользователей и исправлять их кодом'

export default function Hero() {
  return (
    <section className={styles.section}>
      <motion.h1
        className={styles.title}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.04 } },
          hidden: {},
        }}
      >
        {name.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {specialization}
      </motion.p>

      <motion.p
        className={styles.pitch}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {pitch}
      </motion.p>
    </section>
  )
}
