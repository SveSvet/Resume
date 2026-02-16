import { memo, useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './Duck.module.css'

const DUCK_COLORS = {
  yellow: '#FFD93D',
  blue: '#4A90E2',
  orange: '#FF6B35',
  purple: '#9B59B6',
  secret: 'url(#duckSecretGradient)',
}

const IDLE_ANIMATIONS = {
  float: 'duck-idle-float',
  dive: 'duck-idle-dive',
  spin: 'duck-idle-spin',
  circle: 'duck-idle-circle',
}

function DuckSvg({ color, size = 164, className }) {
  const isSecret = color === 'secret'
  const fill = DUCK_COLORS[color] || DUCK_COLORS.yellow

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {isSecret && (
        <defs>
          <linearGradient id="duckSecretGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD93D" />
            <stop offset="50%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#9B59B6" />
          </linearGradient>
        </defs>
      )}
      <ellipse cx="32" cy="40" rx="18" ry="14" fill={fill} />
      <circle cx="42" cy="28" r="12" fill={fill} />
      <circle cx="46" cy="24" r="3" fill="#2D3436" />
      <path
        d="M50 22 Q58 20 56 28 Q54 32 50 30"
        stroke="#E67E22"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

function Duck({
  color = 'yellow',
  position = { top: '15%', left: '10%' },
  idleAnimation = 'float',
  onClick,
  ariaLabel,
  enterDelay = 0,
  size = 164,
  isHidden = false,
}) {
  const [isClicking, setIsClicking] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsClicking(true)
    setTimeout(() => {
      onClick?.()
      setIsClicking(false)
    }, 300)
  }

  const idleClass = IDLE_ANIMATIONS[idleAnimation] || IDLE_ANIMATIONS.float
  const accentColor = DUCK_COLORS[color] || DUCK_COLORS.yellow

  if (isHidden) return null

  return (
    <motion.button
      type="button"
      className={classNames(styles.button, idleClass, {
        'duck-click': isClicking,
      })}
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
      }}
      initial={{ opacity: 0, transform: 'translateY(-200px) rotate(-20deg)' }}
      animate={{
        opacity: 1,
        transform: 'translateY(0) rotate(0)',
        transition: { delay: enterDelay, type: 'spring', damping: 15 },
      }}
      whileHover={{
        scale: 1.15,
        rotate: 5,
        filter: 'brightness(1.2)',
        boxShadow: `0 12px 40px ${typeof accentColor === 'string' && accentColor.startsWith('#') ? accentColor + '40' : 'rgba(155,89,182,0.35)'}`,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <span
        className={styles.inner}
        style={{ width: size, height: size }}
      >
        <DuckSvg color={color} size={size} />
      </span>
    </motion.button>
  )
}

export default memo(Duck)
export { DuckSvg }
