import styles from '../page.module.css'

export default function Hero() {
  return (
    <div>
      <div className={styles.center}>
        <h1 className={styles.title}>Hello, I’m Simone Liu.</h1>
        <h1 className={styles.title}>I’m a product designer and technologist. </h1>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <svg></svg>
          <p>
            Currently designing product at <p>Kaito.ai</p>
          </p>
        </div>
        <div className={styles.col}>
          <svg></svg>
          <p>Have a keen eye in creating pixel-perfect user experience consolidated by front-end dev skills</p>
        </div>
        <div className={styles.col}>
          <svg></svg>
          <p>Driven by mission, Learn through building</p>
        </div>
      </div>
    </div>
  )
}
