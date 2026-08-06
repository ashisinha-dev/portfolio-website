import cd1 from '../../assets/projects/decoding-cd1.png'
import dc from '../../assets/projects/decoding-dc.png'
import styles from './Projects.module.css'

export default function DecodingImages() {
  return (
    <div className={styles.splitImageFrame}>
      <img src={cd1} alt="Extrapolating a model's behavior at longer context lengths" className={styles.splitImage} />
      <img src={dc} alt="Neural network" className={styles.splitImage} />
    </div>
  )
}
