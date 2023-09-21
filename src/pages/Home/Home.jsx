import Hero from '../../components/Hero/Hero'
import MyProjects from '../../components/MyProjects/MyProject'

import styles from './Home.module.css'
const Home = () => {
  return( 
    <>
      <div className={styles.container}>
        <Hero />
        <MyProjects />
      </div>
    </>
  )
}

export default Home