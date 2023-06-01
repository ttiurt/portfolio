import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.shoe}>
      <div className={styles.links}>
        <p><a href="https://www.linkedin.com/in/truittzach/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><a href="" target="_blank" rel="noopener noreferrer">Resume</a></p>
        <p><a href="https://github.com/ttiurt" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><a href="mailto:truittzach33@gmail.com">eMail</a></p>
      </div>
    </div>
  )
}

export default Footer