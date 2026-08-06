import { useState } from 'react'
import { experience } from '../../data/experience'
import { useReveal } from '../../hooks/useReveal'
import SectionHeading from '../shared/SectionHeading'
import ExperienceItem from './ExperienceItem'
import styles from './Experience.module.css'

export default function Experience() {
  const revealRef = useReveal()
  const [activeOrg, setActiveOrg] = useState(experience[0].org)

  const active = experience.find((entry) => entry.org === activeOrg)

  return (
    <section id="experience" className={`section reveal ${styles.experience}`} ref={revealRef}>
      <SectionHeading eyebrow="Experience" title="Where I've Worked" />

      <div className={styles.layout}>
        <div className={styles.orgList}>
          {experience.map((entry) => (
            <button
              key={entry.org}
              className={`${styles.orgTab} ${activeOrg === entry.org ? styles.orgTabActive : ''}`}
              onClick={() => setActiveOrg(entry.org)}
            >
              {entry.org}
            </button>
          ))}
        </div>

        <div className={styles.roles}>
          {active.roles.map((role) => (
            <ExperienceItem key={role.id} item={role} />
          ))}
        </div>
      </div>
    </section>
  )
}
