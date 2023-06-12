import styles from './MoreMe.module.css'

const MoreMe = () => {
  return (
    <div className={styles.mmCntnr}>
      <div className={styles.mmTitle}>
        <h1>more me</h1>
      </div>
      <div className={styles.mmInfo}>
        <p>Belive it or not I do find things outside of coding cool, below are five boxes that link to something I find interesting and I hope you do too.</p>
      </div>
      <div className={styles.mmB1}><a href="https://open.spotify.com/playlist/1Qx0dvQ2FzHUCOSirj9ono?si=b6f094fd0da842fb" target="_blank" rel="noopener noreferrer"><img src="box.png" alt="box" /></a></div>
      <div className={styles.mmB2}><a href="https://www.youtube.com/watch?v=BRLYSsldne4" target="_blank" rel="noopener noreferrer"><img src="box.png" alt="box" /></a></div>
      <div className={styles.mmB3}><a href="https://www.uncensoredlibrary.com/en" target="_blank" rel="noopener noreferrer"><img src="box.png" alt="box" /></a></div>
      <div className={styles.mmB4}><a href="https://www.youtube.com/watch?v=6SJuZ30PESk" target="_blank" rel="noopener noreferrer"><img src="box.png" alt="box" /></a></div>
      <div className={styles.mmB5}><a href="https://myanimelist.net/animelist/ttiurt" target="_blank" rel="noopener noreferrer"><img src="box.png" alt="box" /></a></div>
    </div>
  )
}

export default MoreMe