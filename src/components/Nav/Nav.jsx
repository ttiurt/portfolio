import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.hat}>
      <div className={styles.links}>
        <p className={styles.linked}><a href="https://www.linkedin.com/in/truittzach/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p className={styles.resume}><a href="https://docs.google.com/document/d/1fdu2pVtlFe7Ohr3HA5HqTou6T0fwHr0W1vEuQwF5Rk8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></p>
        <p className={styles.github}><a href="https://github.com/ttiurt" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p className={styles.email}><a href="mailto:truittzach33@gmail.com">eMail</a></p>
      </div>
    </div>
  )
}

export default Nav