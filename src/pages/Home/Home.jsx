import Hero from '../../components/Hero/Hero'
import MyProjects from '../../components/MyProjects/MyProject'
import About from '../../components/About/About'

import styles from './Home.module.css'
const Home = () => {
  return( 
    <>
      <div className={styles.container}>
        <Hero />
        <About />
        <MyProjects />
      </div>
    </>
  )
}

export default Home