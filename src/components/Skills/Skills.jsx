// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import Tooltip from '@mui/material/Tooltip'
import styles from './Skills.module.css'


const Skills = () => {
  return (
    <div className={styles.sklscntnr}>
      <div className={styles.sklstitle}>
        <h1>skills</h1>
      </div>
      <div className={styles.icons}>
        <Tooltip title="HTML" placement="top">
          <img className={styles.iconsimg} src='/html.svg' alt="HTML" />
        </Tooltip>
        <Tooltip title="CSS" placement="top">
          <img className={styles.iconsimg} src='/css3.svg' alt="CSS" />
        </Tooltip>
        <Tooltip title="MUI" placement="top">
          <img className={styles.iconsimg} src='muilogo.png' alt="MUI" />
        </Tooltip>
        <Tooltip title="Vite" placement="top">
          <img className={styles.iconsimg} id={styles.vite} src='/vite.png' alt="VITE" />
        </Tooltip>
        <Tooltip title="React" placement="top">
          <img className={styles.iconsimg} src='/react.svg' alt="REACT" />
        </Tooltip>
        <Tooltip title="PostgreSQL" placement="top">
          <img className={styles.iconsimg} src='/postgres.svg' alt="POSTGRES" />
        </Tooltip>
        <Tooltip title="MongoDB" placement="top">
          <img className={styles.iconsimg} id={styles.mongo} src='/mongodb.png' alt="MONGODB" />
        </Tooltip>
        <Tooltip title="Mongoose" placement="top">
          <img className={styles.iconsimg} src='/mongoose.png' alt="MONGOOSE" />
        </Tooltip>
        <Tooltip title="Express" placement="bottom">
          <img className={styles.iconsimg} src='/expressjs.svg' alt="EXPRESS" />
        </Tooltip>
        <Tooltip title="NodeJS" placement="bottom">
          <img className={styles.iconsimg} src='/nodejs.svg' alt="NODE" />
        </Tooltip>
        <Tooltip title="Sequelize" placement="bottom">
          <img className={styles.iconsimg} id={styles.sql} src='/sequelize.png' alt="SEQUELIZE" />
        </Tooltip>
        <Tooltip title="JavaScript" placement="bottom">
          <img className={styles.iconsimg} src='/javascript.svg' alt="JAVASCRIPT" />
        </Tooltip>
        <Tooltip title="TypeScript" placement="bottom">
          <img className={styles.iconsimg} src='/typescript.svg' alt="TYPESCRIPT" />
        </Tooltip>
        <Tooltip title="GitHub" placement="bottom">
          <img className={styles.iconsimg} src='/github.svg' alt="GITHUB" />
        </Tooltip>
      </div>
    </div>
  )
}

export default Skills