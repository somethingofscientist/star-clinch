import React from 'react'
import styles from './style.module.css';

export default function Header() {
    const url = `https://static.vecteezy.com/system/resources/previews/015/936/794/original/silhouette-black-japanese-traditional-torii-gate-on-a-red-sun-vector.jpg`
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <img src={url} alt="shraadhhanand" />
            <div className={styles.logo_text}>TORII</div>
        </div>
        <div className={styles.right}>
            <div className={styles.link}>Home</div>
            <div className={styles.link}>About</div>
        </div>
    </div>
  )
}
