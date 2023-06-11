import styles from './Skills.module.css'

const Skills = () => {
  return (
    <div className={styles.sklscntnr}>
      <div className={styles.sklstitle}>
        <h1>skills</h1>
      </div>
      <div className={styles.icons}>
        <img className={styles.iconsimg} src='/html.svg' alt="HTML" />
        <img className={styles.iconsimg} src='/css3.svg' alt="CSS" />
        <img className={styles.iconsimg} src='muilogo.png' alt="MUI" />
        <img className={styles.iconsimg} id={styles.vite} src='/vite.png' alt="VITE" />
        <img className={styles.iconsimg} src='/react.svg' alt="REACT" />
        <img className={styles.iconsimg} src='/postgres.svg' alt="POSTGRES" />
        <img className={styles.iconsimg} id={styles.mongo} src='/mongodb.png' alt="MONGODB" />
        <img className={styles.iconsimg} src='/mongoose.png' alt="MONGOOSE" />
        <img className={styles.iconsimg} src='/expressjs.svg' alt="EXPRESS" />
        <img className={styles.iconsimg} src='/nodejs.svg' alt="NODE" />
        <img className={styles.iconsimg} id={styles.sql} src='/sequelize.png' alt="SEQUELIZE" />
        <img className={styles.iconsimg} src='/javascript.svg' alt="JAVASCRIPT" />
        <img className={styles.iconsimg} src='/typescript.svg' alt="TYPESCRIPT" />
        <img className={styles.iconsimg} src='/github.svg' alt="GITHUB" />
      </div>
    </div>
  )
}

export default Skills