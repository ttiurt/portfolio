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
        <img className={styles.iconsimg} src='xx' alt="MUI" />
        <img className={styles.iconsimg} src='xx' alt="VITE" />
        <img className={styles.iconsimg} src='/react.svg' alt="REACT" />
        <img className={styles.iconsimg} src='/postgressql.svg' alt="POSTGRES" />
        <img className={styles.iconsimg} src='xx' alt="MONGODB" />
        <img className={styles.iconsimg} src='xx' alt="MONGOOSE" />
        <img className={styles.iconsimg} src='/expressjs.svg' alt="EXPRESS" />
        <img className={styles.iconsimg} src='/nodejs.svg' alt="NODE" />
        <img className={styles.iconsimg} src='xx' alt="SEQUELIZE" />
        <img className={styles.iconsimg} src='/javascript.svg' alt="JAVASCRIPT" />
        <img className={styles.iconsimg} src='/typescript.svg' alt="TYPESCRIPT" />
        <img className={styles.iconsimg} src='/github.svg' alt="GITHUB" />
      </div>
    </div>
  )
}

export default Skills