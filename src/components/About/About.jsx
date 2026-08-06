import { profile } from '../../data/profile'
import { useReveal } from '../../hooks/useReveal'
import SectionHeading from '../shared/SectionHeading'
import styles from './About.module.css'

export default function About() {
  const revealRef = useReveal()

  return (
    <section id="about" className={`section reveal ${styles.about}`} ref={revealRef}>
      <SectionHeading eyebrow="About" title="About Me" />

      <div className={styles.story}>
        {profile.aboutParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <p className={styles.techIntro}>Here are a few technologies I&apos;ve worked with:</p>
      <ul className={styles.techList}>
        {profile.aboutTech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  )
}
