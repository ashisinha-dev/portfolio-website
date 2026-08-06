import Pill from '../shared/Pill'
import styles from './Skills.module.css'

export default function SkillCategory({ category, items }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.category}>{category}</h3>
      <div className={styles.pills}>
        {items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
    </div>
  )
}
