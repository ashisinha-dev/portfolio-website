import { skills } from '../../data/skills'
import { useReveal } from '../../hooks/useReveal'
import SectionHeading from '../shared/SectionHeading'
import SkillCategory from './SkillCategory'
import styles from './Skills.module.css'

export default function Skills() {
  const revealRef = useReveal()

  return (
    <section id="skills" className={`section reveal ${styles.skills}`} ref={revealRef}>
      <SectionHeading eyebrow="Skills" title="Technical Toolkit" />

      <div className={styles.grid}>
        {skills.map((group) => (
          <SkillCategory key={group.category} category={group.category} items={group.items} />
        ))}
      </div>
    </section>
  )
}
