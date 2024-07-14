import styles from '../page.module.css'

export default function SelectedWork() {
  return (
    <div>
      <h2>Selected Work</h2>

      <div className={styles.col}>
        <div>
          <h3>Kaito.ai Official Website</h3>
        </div>
        <div>
          <h3>Macallan EBoutique Revamp</h3>
        </div>
        <div>
          <h3>Ainvest trading experience redesign</h3>
        </div>
      </div>
    </div>
  )
}
