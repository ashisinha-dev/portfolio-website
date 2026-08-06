import styles from './Pill.module.css'

export default function Pill({ children, mono = false }) {
  return <span className={`${styles.pill} ${mono ? styles.mono : ''}`}>{children}</span>
}
