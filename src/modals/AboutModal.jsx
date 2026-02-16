import styles from './ModalContent.module.css'

export default function AboutModal() {
  const skills = ['JavaScript', 'Node.js', 'React', 'TypeScript', 'REST', 'CMS', 'UX Research']
  const tools = ['Figma', 'Kibana', 'Grafana', 'Метрика', 'Analytics']
  const soft = ['Кросс-функциональная работа', 'Менторство']

  return (
    <div className={styles.root}>
      <h2 id="modal-title" className={styles.title}>
        About
      </h2>
      <p className={styles.paragraph}>
        Я frontend-разработчик, но кроме кода умею в UX-исследования. Это значит, что я не просто пишу компоненты, а понимаю, почему пользователи делают то, что делают
      </p>
      <p className={styles.paragraph}>
        За 5 лет работы научилась находить баланс между красотой интерфейса, хорошим кодом и удобством для людей. Работала в билайне над продуктами для миллионов пользователей и в Астре над сложными B2B-системами
      </p>
      <p className={styles.paragraph}>
        Могу разговаривать на одном языке с дизайнерами, продактами, бэкендерами и аналитиками
      </p>

      <div>
        <h3 className={styles.sectionTitle}>Компетенции</h3>
        <div className={styles.skillsList}>
          {skills.map((s) => (
            <span key={s} className={styles.skillTag}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className={styles.sectionTitle}>Инструменты</h3>
        <div className={styles.skillsList}>
          {tools.map((t) => (
            <span key={t} className={styles.toolTag}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className={styles.sectionTitle}>Soft skills</h3>
        <ul className={styles.softList}>
          {soft.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
