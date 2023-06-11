import styles from './Hero.module.css'
import Nav from '../Nav/Nav'

const Hero = () => {
  return (
    <div className={styles.HERO}>
      <h1>zach truitt</h1>
      <div className={styles.nav}>
        <Nav />
      </div>
    </div>
  )
}

export default Hero