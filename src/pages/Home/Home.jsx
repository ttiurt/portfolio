import Skills from '../../components/Skills/Skills'
import MyProjects from '../../components/MyProjects/MyProject'
// import MoreMe from '../../components/MoreMe/MoreMe'

import styles from './Home.module.css'


const Home = () => {
  return( 
    <>
      <div className={styles.container}>
        <div className={styles.ABOUT}>
          <div className={styles.ABOUTmain}>
            <div className={styles.ABOUTtitle}>
              <h1>who even is he</h1>
            </div>
            <p>I am a fullstack developer with an high interest in the front end. I have learned and worked with a number of coding languages, including Javascript, HTML, CSS, React and Typescript.</p>
          </div>
          <div className={styles.ABOUTimg}>
            <img src='/headshot.jpg' alt="Me." />
          </div>
        </div>
        <div className={styles.PRJCT}>
          <MyProjects />
        </div>
        <div className={styles.SKILLS}>
          <Skills />
        </div>
        {/* <div className={styles.MOREME}>
          <MoreMe />
        </div> */}
      </div>
    </>
  )
}

export default Home