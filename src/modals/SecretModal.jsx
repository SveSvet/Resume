import classNames from 'classnames'
import styles from './ModalContent.module.css'

export default function SecretModal() {
  return (
    <div className={classNames(styles.root, styles.center)}>
      <h2 id="modal-title" className={styles.title}>
        Секретная утка!  🦆
      </h2>
      <p className={styles.paragraph}>
        Которая делает мир веселее
      </p>
    </div>
  )
}
