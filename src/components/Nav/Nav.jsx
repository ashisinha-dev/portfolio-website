import { useState, useRef, useEffect } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useIsTouchDevice, externalLinkProps } from '../../hooks/useIsTouchDevice'
import { profile } from '../../data/profile'
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
  const linkProps = externalLinkProps(useIsTouchDevice())
  const linksRef = useRef(null)
  const hamburgerRef = useRef(null)

  const handleLinkClick = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const handleOutsideEvent = (event) => {
      if (linksRef.current?.contains(event.target)) return
      if (hamburgerRef.current?.contains(event.target)) return
      setMenuOpen(false)
    }

    document.addEventListener('touchstart', handleOutsideEvent)
    document.addEventListener('mousedown', handleOutsideEvent)
    return () => {
      document.removeEventListener('touchstart', handleOutsideEvent)
      document.removeEventListener('mousedown', handleOutsideEvent)
    }
  }, [menuOpen])

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark}>AS</span>
          <span className={styles.logoText}>Ashi Sinha</span>
        </a>

        <nav ref={linksRef} className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
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
          <a href={profile.resumeUrl} {...linkProps} className={styles.mobileResumeLink} onClick={handleLinkClick}>
            Resume
          </a>
        </nav>

        <div className={styles.actions}>
          <a href={profile.resumeUrl} {...linkProps} className={styles.resumeButton}>
            Resume
          </a>
          <button
            ref={hamburgerRef}
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

      {menuOpen && <div className={styles.overlay} aria-hidden="true" />}
    </header>
  )
}
