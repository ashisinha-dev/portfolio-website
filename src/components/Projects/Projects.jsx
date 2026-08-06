import { useState } from 'react'
import { featuredProjects, otherProjects } from '../../data/projects'
import { useReveal } from '../../hooks/useReveal'
import SectionHeading from '../shared/SectionHeading'
import ProjectCard from './ProjectCard'
import OtherProjectItem from './OtherProjectItem'
import styles from './Projects.module.css'

const COLLAPSED_COUNT = 2

export default function Projects() {
  const revealRef = useReveal()
  const [showAllOther, setShowAllOther] = useState(false)

  const visibleOtherProjects = showAllOther
    ? otherProjects
    : otherProjects.slice(0, COLLAPSED_COUNT)

  return (
    <section id="projects" className={`section reveal ${styles.projects}`} ref={revealRef}>
      <SectionHeading eyebrow="Projects" title="Some Things I've Built" />

      <div className={styles.grid}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h3 className={styles.otherHeading}>Other Noteworthy Projects</h3>
      <div className={styles.otherList}>
        {visibleOtherProjects.map((project) => (
          <OtherProjectItem key={project.id} project={project} />
        ))}
      </div>

      {otherProjects.length > COLLAPSED_COUNT && (
        <button className={styles.showMore} onClick={() => setShowAllOther((prev) => !prev)}>
          {showAllOther ? 'Show Less' : `Show More (${otherProjects.length - COLLAPSED_COUNT})`}
        </button>
      )}
    </section>
  )
}
