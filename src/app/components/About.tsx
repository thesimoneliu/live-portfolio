import styles from '../page.module.css'

export default function About() {
  return (
    <div>
      <h2>About Me</h2>

      <div className={styles.row}>
        <div>
          <p>
            Born in Shanghai, China in the age of the last wave of paper media and the rise of Apple. Lived my childhood
            with the company of Tecent QQ and HTC palm phones.
          </p>
        </div>
        <div>
          <p>
            Finished my bachelor’s degree in tourism management in Fudan University, Shanghai, when I embodied learning
            by traveling a lot to Southern-east Asia, Middle East, Southern America.
          </p>
        </div>
        <div>
          <p>Left for New York City to pursue a whole new life balancing my right brain and left.</p>
        </div>
      </div>
    </div>
  )
}
