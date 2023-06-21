/* eslint-disable react/no-unescaped-entities */
import styles from './MyProjects.module.css'

const MyProjects = () => {
  return (
    <div className={styles.thngsCntnr}>
      <div className={styles.thngsTitle}>
        <h1>thingys</h1>
      </div>
      <div className={styles.thngLeft}>
        <div className={styles.TLimg}>
          <img src="/LLpic.png" alt="The Lap Logger" />
        </div>
        <div className={styles.TLinfo}>
          <h1>Lap Logger</h1>
          <p>This project was made to provide Formula One fans a website similar to Letterboxd or MyAnimeList. After creating an account users may log a race with a rating, a description of what they thought of the race and mark whether they would watch the race again.</p>
          <br />
          <p>TypeScript, JavaScript, React, CSS, MUI</p>
          <br />
          <a href="https://thelaplogger.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <br />
          <a href="https://github.com/ttiurt/laplogger-face" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
      <div className={styles.thngRight}>
        <div className={styles.TRimg}>
          <img src="/BBbanner.png" alt="BarkBase" />
        </div>
        <div className={styles.TRinfo}>
          <h1>BarkBase</h1>
          <p>BarkBase revolutionizes care for your furry companions. Detailed profiles, seamless communication, and real-time updates. Personalized reports, and attendance tracking. Meant to make managing a dog daycare or kennel as easy as possible.</p>
          <br />
          <p>JavaScript, React, CSS, MongoDB, MUI</p>
          <br />
          <a href="https://bark-base.netlify.app/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <br />
          <a href="https://github.com/AndrewRentschler/barkbase-front-end" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
      <div className={styles.thngLeft}>
        <div className={styles.TLimg}>
          <img src="/CDLFGbanner.png" alt="CDLFG" />
        </div>
        <div className={styles.TLinfo}>
          <h1>C.D.L.F.G.</h1>
          <p>This forum is for easily finding a team to help you grind through the ranked ladder. On this forum you will be able to navigate through multiple pages where you are able to view posts people have made and respond to them. Users are also given the ability to make their own post.</p>
          <br />
          <p>JavaScript, CSS, MongoDB, Google OAuth</p>
          <br />
          <a href="https://cdlfg.fly.dev/home" target="_blank" rel="noopener noreferrer">Deployment</a>
          <br />
          <a href="https://github.com/ttiurt/cdlfg-forum" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
      <div className={styles.thngRight}>
        <div className={styles.TRimg}>
          <img src="/TSTbanner.png" alt="Truitt's Sports Trivia" />
        </div>
        <div className={styles.TRinfo}>
          <h1>Truitt's Sports Trivia</h1>
          <p>This is a simple sports trivia site. When the first question appears, a 20-second timer will start counting down for you to answer that question. For each correct answer, you will be given 20 points or 0 points if you fail to answer or chose the incorrect answer.</p>
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