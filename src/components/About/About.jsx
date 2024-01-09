import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.abtCntnr}>
      <div className={styles.abtTitle}>
        <h1>ABOUT</h1>
      </div>
      <div className={styles.abtText}>
        <p>I am a full stack developer based out of Richmond, Virginia with an interest in the front end. Currently I am working on freelance projects as needed while also actively learning new languages such as C# and C++ and getting familiar with game engines such as Unreal in my free time.</p>
      </div>
    </div>
  )
}

export default About