import { useState } from 'react'
import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Duck from './components/Duck'
import Modal from './components/Modal'
import BackgroundEffects from './components/BackgroundEffects'
import AboutModal from './modals/AboutModal'
import AstraModal from './modals/AstraModal'
import BeelineModal from './modals/BeelineModal'
import ContactModal from './modals/ContactModal'
import SecretModal from './modals/SecretModal'
import styles from './App.module.css'

const MODALS = {
  about: 'about',
  astra: 'astra',
  beeline: 'beeline',
  contact: 'contact',
  secret: 'secret',
}

const DUCK_CONFIG = [
  {
    id: MODALS.about,
    color: 'yellow',
    position: { top: '15%', left: '10%' },
    idleAnimation: 'float',
    ariaLabel: 'Открыть информацию о себе и скиллах',
    enterDelay: 1.5,
  },
  {
    id: MODALS.astra,
    color: 'blue',
    position: { bottom: '20%', right: '15%' },
    idleAnimation: 'dive',
    ariaLabel: 'Открыть опыт в Астре',
    enterDelay: 1.7,
  },
  {
    id: MODALS.beeline,
    color: 'orange',
    position: { top: '60%', left: '8%' },
    idleAnimation: 'spin',
    ariaLabel: 'Открыть опыт в билайне',
    enterDelay: 1.9,
  },
  {
    id: MODALS.contact,
    color: 'purple',
    position: { top: '10%', right: '12%' },
    idleAnimation: 'circle',
    ariaLabel: 'Открыть контакты',
    enterDelay: 2.1,
  },
]

export default function App() {
  const [openModal, setOpenModal] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const open = (key) => {
    setOpenModal(key)
    setMobileMenuOpen(false)
  }
  const close = () => setOpenModal(null)

  const modalContent = {
    [MODALS.about]: <AboutModal />,
    [MODALS.astra]: <AstraModal />,
    [MODALS.beeline]: <BeelineModal />,
    [MODALS.contact]: <ContactModal />,
    [MODALS.secret]: <SecretModal />,
  }

  return (
    <div className={styles.app}>
      <BackgroundEffects />
      <Hero />

      <div className={styles.desktopDucks}>
        {DUCK_CONFIG.map((config) => (
          <Duck
            key={config.id}
            color={config.color}
            position={config.position}
            idleAnimation={config.idleAnimation}
            ariaLabel={config.ariaLabel}
            enterDelay={config.enterDelay}
            onClick={() => open(config.id)}
          />
        ))}
        <Duck
          color="secret"
          position={{ bottom: '8%', left: 'calc(50% - 20px)' }}
          idleAnimation="float"
          ariaLabel="Секретная утка"
          enterDelay={2.5}
          size={40}
          onClick={() => open(MODALS.secret)}
        />
      </div>

      <div className={styles.mobileMenu}>
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className={styles.menuList}>
              {DUCK_CONFIG.map((config) => (
                <button
                  key={config.id}
                  type="button"
                  className={styles.menuItem}
                  onClick={() => open(config.id)}
                  aria-label={config.ariaLabel}
                >
                  <DuckIcon color={config.color} size={32} />
                  <span className={styles.menuItemLabel}>
                    {config.id === MODALS.about && 'О себе'}
                    {config.id === MODALS.astra && 'Астра'}
                    {config.id === MODALS.beeline && 'Билайн'}
                    {config.id === MODALS.contact && 'Контакты'}
                  </span>
                </button>
              ))}
              <button
                type="button"
                className={styles.menuItem}
                onClick={() => open(MODALS.secret)}
                aria-label="Секретная утка"
              >
                <span className={styles.emoji}>🎉</span>
                <span className={styles.menuItemLabel}>Ещё утка</span>
              </button>
            </div>
          )}
        </AnimatePresence>
        <button
          type="button"
          className={styles.fab}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          <DuckIcon color="yellow" size={36} />
        </button>
      </div>

      <Modal isOpen={!!openModal} onClose={close}>
        {openModal ? modalContent[openModal] : null}
      </Modal>
    </div>
  )
}

function DuckIcon({ color, size }) {
  const colors = {
    yellow: '#FFD93D',
    blue: '#4A90E2',
    orange: '#FF6B35',
    purple: '#9B59B6',
  }
  const fill = colors[color] || colors.yellow
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} style={{ flexShrink: 0 }}>
      <ellipse cx="32" cy="40" rx="18" ry="14" fill={fill} />
      <circle cx="42" cy="28" r="12" fill={fill} />
      <circle cx="46" cy="24" r="3" fill="#2D3436" />
    </svg>
  )
}
