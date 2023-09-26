/* eslint-disable react/no-unescaped-entities */
import styles from './MyProjects.module.css'

const MyProjects = () => {
  return (
    <div className={styles.thngsCntnr}>
      <div className={styles.thngsTitle}>
        <h1>THINGS I'VE MADE</h1>
      </div>
      <br />
      <div className={styles.projects}>
        <div className={styles.thng1}>
          <div className={styles.thngInfo}>
            <h1 className={styles.projName}>Lap Logger</h1>
            <p className={styles.projTools}>TypeScript, JavaScript, React, CSS, MUI</p>
            <div className={styles.projLinks}>
              <a href="https://thelaplogger.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
              <br />
              <a href="https://github.com/ttiurt/laplogger-face" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>
        <div className={styles.thng2}>
          <div className={styles.thngInfo}>
            <h1 className={styles.projName}>BarkBase</h1>
            <p className={styles.projTools}>JavaScript, React, CSS, MongoDB, MUI</p>
            <div className={styles.projLinks}>
              <a href="https://bark-base.netlify.app/" target="_blank" rel="noopener noreferrer">Deployment</a>
              <br />
              <a href="https://github.com/AndrewRentschler/barkbase-front-end" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            
          </div>
        </div>
        <div className={styles.thng3}>
          <div className={styles.thngInfo}>
            <h1 className={styles.projName}>C.D.L.F.G.</h1>
            <p className={styles.projTools}>JavaScript, CSS, MongoDB, Google OAuth</p>
            <div className={styles.projLinks}>
              <a href="https://cdlfg.fly.dev/home" target="_blank" rel="noopener noreferrer">Deployment</a>
              <br />
              <a href="https://github.com/ttiurt/cdlfg-forum" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            
          </div>
        </div>
        <div className={styles.thng4}>
          <div className={styles.thngInfo}>
            <h1 className={styles.projName}>Truitt's Sports Trivia</h1>
            <p className={styles.projTools}>JavaScript, HTML, CSS</p>
            <div className={styles.projLinks}>
              <a href="https://truitts-trivia.netlify.app/" target="_blank" rel="noopener noreferrer">Deployment</a>
              <br />
              <a href="https://github.com/ttiurt/truitts-sports-trivia" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects