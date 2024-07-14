import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Playground from './components/Playground'
import About from './components/About'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <SelectedWork />
      <Playground />
      <About />
    </main>
  )
}
