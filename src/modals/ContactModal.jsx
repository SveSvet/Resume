import classNames from 'classnames'
import styles from './ContactModal.module.css'

export default function ContactModal() {
  const email = 'svetlana.mit.dev@gmail.com'
  const telegram = '@vsbnesm'
  const phone = '+7 (999) 828-27-15'
  const city = 'Москва'

  return (
    <div className={styles.root}>
      <h2 id="modal-title" className={styles.title}>
        Let's talk
      </h2>

      <ul className={styles.contactList}>
        <li className={styles.contactItem}>
          <span>Почта</span>
          <a href={`mailto:${email}`} className={styles.link}>
            {email}
          </a>
        </li>
        <li className={styles.contactItem}>
          <span>Телефон</span>
          <a href="tel:+79196740744" className={styles.link}>
            {phone}
          </a>
        </li>
      </ul>

      <div className={styles.socialLinks}>
          <a
            href="https://t.me/vsbnesm"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Telegram
          </a>
        <a
          href="https://www.linkedin.com/in/svetlana-mityukhina"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SveSvet"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
