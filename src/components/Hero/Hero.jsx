import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { profile } from '../../data/profile'
import photo from '../../assets/photo.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Hey there👋 I&apos;m</span>
          <div className={styles.headlineWrap}>
            <span className={styles.glow} aria-hidden="true" />
            <h1 className={styles.headline}>{profile.name}</h1>
          </div>
          <p className={styles.intro}>{profile.homeIntro}</p>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.primaryCta}>
              View Projects
            </a>
            <a href="#contact" className={styles.secondaryCta}>
              Contact Me
            </a>
          </div>

          <div className={styles.iconRow}>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <SiLeetcode />
            </a>
          </div>

          <a href="/resume.pdf" download className={styles.resumeCta}>
            <FiDownload /> Download Resume
          </a>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoFrame}>
            <img src={photo} alt={profile.name} className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  )
}
