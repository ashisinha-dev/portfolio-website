import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Pill from '../shared/Pill'
import styles from './Projects.module.css'

export default function OtherProjectItem({ project }) {
  return (
    <div className={styles.otherItem}>
      <div className={styles.otherHeader}>
        <div>
          <h3 className={styles.otherTitle}>{project.title}</h3>
          <span className={styles.context}>{project.context}</span>
        </div>
        {project.github || project.report ? (
          <div className={styles.projectLinks}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
                <FiGithub />
              </a>
            )}
            {project.report && (
              <a href={project.report} target="_blank" rel="noreferrer" aria-label="View report">
                <FiExternalLink />
              </a>
            )}
          </div>
        ) : (
          project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className={styles.projectLinks} aria-label="GitHub repository">
              <FiGithub />
            </a>
          )
        )}
      </div>

      {project.bullets ? (
        <ul className={`${styles.bullets} ${styles.otherDescription}`}>
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : (
        <p className={styles.otherDescription}>{project.description}</p>
      )}

      <div className={styles.tech}>
        {project.tech.map((tech) => (
          <Pill key={tech} mono>
            {tech}
          </Pill>
        ))}
      </div>
    </div>
  )
}
