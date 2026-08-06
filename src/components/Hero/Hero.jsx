import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { profile } from '../../data/profile'
import { useIsTouchDevice, externalLinkProps } from '../../hooks/useIsTouchDevice'
import photo from '../../assets/photo.jpg'
import styles from './Hero.module.css'

const BADGE_COLORS = [
  { bg: 'rgba(163, 36, 63, 0.16)', border: 'rgba(163, 36, 63, 0.45)', color: '#f0a6b6', glow: 'rgba(163, 36, 63, 0.4)' },
  { bg: 'rgba(214, 83, 109, 0.16)', border: 'rgba(214, 83, 109, 0.45)', color: '#f6b9c6', glow: 'rgba(214, 83, 109, 0.4)' },
  { bg: 'rgba(201, 122, 61, 0.16)', border: 'rgba(201, 122, 61, 0.45)', color: '#e8b384', glow: 'rgba(201, 122, 61, 0.4)' },
  { bg: 'rgba(79, 138, 139, 0.18)', border: 'rgba(79, 138, 139, 0.5)', color: '#9fdcdd', glow: 'rgba(79, 138, 139, 0.4)' },
  { bg: 'rgba(124, 92, 191, 0.18)', border: 'rgba(124, 92, 191, 0.5)', color: '#c3b1ed', glow: 'rgba(124, 92, 191, 0.4)' },
]

export default function Hero() {
  const linkProps = externalLinkProps(useIsTouchDevice())

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Hey there👋 I&apos;m</span>
          <div className={styles.headlineWrap}>
            <span className={styles.glow} aria-hidden="true" />
            <h1 className={styles.headline}>{profile.name}</h1>
          </div>
          <div className={styles.badgeRow}>
            {profile.tagline.map((item, i) => {
              const colors = BADGE_COLORS[i % BADGE_COLORS.length]
              return (
                <span
                  key={item}
                  className={styles.badge}
                  style={{
                    '--badge-bg': colors.bg,
                    '--badge-border': colors.border,
                    '--badge-color': colors.color,
                    '--badge-glow': colors.glow,
                    '--badge-delay': `${i * 0.15}s`,
                  }}
                >
                  {item}
                </span>
              )
            })}
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
            <a href={profile.socials.linkedin} {...linkProps} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={profile.socials.github} {...linkProps} aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.socials.leetcode} {...linkProps} aria-label="LeetCode">
              <SiLeetcode />
            </a>
          </div>

          <a href={profile.resumeUrl} {...linkProps} className={styles.resumeCta}>
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
