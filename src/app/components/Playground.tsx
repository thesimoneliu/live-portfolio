import styles from '../page.module.css'

export default function Playground() {
  const gridItems = Array(9).fill(0)

  return (
    <div>
      <h2>Playground</h2>

      <div className={styles.grid}>
        {gridItems.map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  )
}
