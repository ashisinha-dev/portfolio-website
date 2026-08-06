import { useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import styles from './Nav.module.css'

const LINKS = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(LINKS.map((link) => link.id))

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark}>AS</span>
          <span className={styles.logoText}>Ashi Sinha</span>
        </a>

        <nav className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.link} ${activeId === link.id ? styles.active : ''}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" download className={styles.mobileResumeLink} onClick={handleLinkClick}>
            Resume
          </a>
        </nav>

        <div className={styles.actions}>
          <a href="/resume.pdf" download className={styles.resumeButton}>
            Resume
          </a>
          <button
            className={styles.hamburger}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && <button className={styles.overlay} aria-label="Close menu" onClick={handleLinkClick} />}
    </header>
  )
}
