import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Pill from '../shared/Pill'
import { useIsTouchDevice, externalLinkProps } from '../../hooks/useIsTouchDevice'
import styles from './Experience.module.css'

export default function ExperienceItem({ item }) {
  const linkProps = externalLinkProps(useIsTouchDevice())

  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <div className={styles.headerRow}>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <span className={styles.company}>{item.company}</span>
          </div>
          <div className={styles.meta}>
            <span>{item.dates}</span>
            <span>{item.location}</span>
          </div>
        </div>

        <ul className={styles.bullets}>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className={styles.footerRow}>
          <div className={styles.tech}>
            {item.tech.map((tech) => (
              <Pill key={tech} mono>
                {tech}
              </Pill>
            ))}
          </div>

          {(item.github || item.paper) && (
            <div className={styles.itemLinks}>
              {item.github && (
                <a href={item.github} {...linkProps} aria-label="GitHub repository">
                  <FiGithub />
                </a>
              )}
              {item.paper && (
                <a href={item.paper} {...linkProps} aria-label="Read the paper">
                  <FiExternalLink />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

