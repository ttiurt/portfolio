import Skills from '../../components/Skills/Skills'
import Footer from '../../components/Footer/Footer'

import styles from './Home.module.css'


const Home = () => {
  return( 
    <div className={styles.container}>
      <div className={styles.HERO}>
        <h1>zach TRUITT</h1>
      </div>
      <div className={styles.ABOUT}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores repellendus nam, id a asperiores corporis soluta quis excepturi numquam illo vitae itaque corrupti, ratione quam esse fuga aperiam aut?</p>
      </div>
      <div className={styles.IMG}><img src='/portfolioHEADSHOT.png' alt="Me." /></div>
      <div className={styles.PRJCT}></div>
      <div className={styles.SKILLS}>
        <Skills />
      </div>
      <div className={styles.FOOT}>
        <Footer />
      </div>
    </div>
  )
}

export default Home