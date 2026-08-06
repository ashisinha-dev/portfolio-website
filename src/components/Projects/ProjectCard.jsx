import { FiExternalLink, FiImage, FiGithub } from 'react-icons/fi'
import Pill from '../shared/Pill'
import TicTacToeArt from './TicTacToeArt'
import ClinicalReportArt from './ClinicalReportArt'
import RepoRadarArt from './RepoRadarArt'
import DecodingImages from './DecodingImages'
import styles from './Projects.module.css'

const CUSTOM_ART = {
  'tic-tac-toe': TicTacToeArt,
  'clinical-reporting': ClinicalReportArt,
  reporadar: RepoRadarArt,
}

export default function ProjectCard({ project }) {
  const CustomArt = CUSTOM_ART[project.id]

  return (
    <div className={styles.card}>
      {project.id === 'ciir-lab' ? (
        <DecodingImages />
      ) : CustomArt ? (
        <div className={styles.imageFrame}>
          <CustomArt />
        </div>
      ) : project.image ? (
        <div className={styles.imageFrame}>
          <img src={project.image} alt={project.title} className={styles.image} />
        </div>
      ) : (
        <div className={styles.imagePlaceholder}>
          <FiImage />
        </div>
      )}

      <span className={styles.featuredTag}>Featured Project</span>
      <h3 className={styles.title}>{project.title}</h3>
      <span className={styles.context}>{project.context}</span>

      <ul className={styles.bullets}>
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <div className={styles.tech}>
        {project.tech.map((tech) => (
          <Pill key={tech} mono>
            {tech}
          </Pill>
        ))}
      </div>

      {project.github || project.report ? (
        <div className={styles.projectLinks}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
              <FiGithub />
            </a>
          )}
          {project.report && (
            <a href={project.report} target="_blank" rel="noopener noreferrer" aria-label="View report">
              <FiExternalLink />
            </a>
          )}
        </div>
      ) : (
        project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Project <FiExternalLink />
          </a>
        )
      )}
    </div>
  )
}
