import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Ashi Sinha · Built with React &amp; Vite</span>
      <a href="#top" className={styles.backToTop}>
        Back to top ↑
      </a>
    </footer>
  )
}
