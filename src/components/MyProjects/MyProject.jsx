/* eslint-disable react/no-unescaped-entities */
import styles from './MyProjects.module.css'

const MyProjects = () => {
  return (
    <div className={styles.thngsCntnr}>
      <div className={styles.thngsTitle}>
        <h1>thingys</h1>
      </div>
      <div className={styles.thngLeft}>
        <div className={styles.TLinfo}>
          <h1>Lap Logger</h1>
          <br />
          <p>TypeScript, JavaScript, React, CSS, MUI</p>
          <br />
          <a href="https://thelaplogger.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <br />
          <a href="https://github.com/ttiurt/laplogger-face" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
      <div className={styles.thngRight}>
        <div className={styles.TRinfo}>
          <h1>BarkBase</h1>
          <br />
          <p>JavaScript, React, CSS, MongoDB, MUI</p>
          <br />
          <a href="https://bark-base.netlify.app/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <br />
          <a href="https://github.com/AndrewRentschler/barkbase-front-end" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
      <div className={styles.thngLeft}>
        <div className={styles.TLinfo}>
          <h1>C.D.L.F.G.</h1>
          <br />
          <p>JavaScript, CSS, MongoDB, Google OAuth</p>
          <br />
          <a href="https://cdlfg.fly.dev/home" target="_blank" rel="noopener noreferrer">Deployment</a>
          <br />
          <a href="https://github.com/ttiurt/cdlfg-forum" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
      <div className={styles.thngRight}>
        <div className={styles.TRinfo}>
          <h1>Truitt's Sports Trivia</h1>
          <br />
          <p>JavaScript, HTML, CSS</p>
          <br />
          <a href="https://truitts-trivia.netlify.app/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <br />
          <a href="https://github.com/ttiurt/truitts-sports-trivia" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </div>
  )
}

export default MyProjects