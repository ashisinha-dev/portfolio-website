import { education } from '../../data/education'
import { useReveal } from '../../hooks/useReveal'
import SectionHeading from '../shared/SectionHeading'
import Pill from '../shared/Pill'
import styles from './Education.module.css'

export default function Education() {
  const revealRef = useReveal()

  return (
    <section id="education" className={`section reveal ${styles.education}`} ref={revealRef}>
      <SectionHeading eyebrow="Education" title="Academic Background" />

      <div className={styles.grid}>
        {education.map((entry) => (
          <div key={entry.id} className={styles.card}>
            <h3 className={styles.school}>{entry.school}</h3>
            <span className={styles.degree}>{entry.degree}</span>
            <div className={styles.meta}>
              <span>{entry.dates}</span>
              <span>{entry.gpa}</span>
            </div>
            <div className={styles.pills}>
              {entry.coursework.map((course) => (
                <Pill key={course}>{course}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
