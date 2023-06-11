import Skills from '../../components/Skills/Skills'

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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolor provident iure quasi nihil dolorem ipsa eum modi inventore, voluptate ad libero voluptas. Sint quod impedit laudantium accusamus saepe odit!</p>
          </div>
          <div className={styles.ABOUTimg}>
            <img src='/headshot.jpg' alt="Me." />
          </div>
        </div>
        <div className={styles.PRJCT}>
          <h1>thingys</h1>
        </div>
        <div className={styles.SKILLS}>
          <Skills />
        </div>
      </div>
    </>
  )
}

export default Home