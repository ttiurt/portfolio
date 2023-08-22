//import Skills from '../../components/Skills/Skills'
import MyProjects from '../../components/MyProjects/MyProject'
// import MoreMe from '../../components/MoreMe/MoreMe'

import styles from './Home.module.css'


const Home = () => {
  return( 
    <>
      <div className={styles.container}>
        <div className={styles.ABOUT}>
          
        </div>
        <div className={styles.PRJCT}>
          <MyProjects />
        </div>
        {/* <div className={styles.SKILLS}>
          <Skills />
        </div> */}
      </div>
    </>
  )
}

export default Home