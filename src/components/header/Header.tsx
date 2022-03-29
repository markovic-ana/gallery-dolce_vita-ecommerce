import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Dolce Vita</h1>
      <nav className={styles.nav}>
        <a href="#?">Home</a>
        <a href="#?">Contact</a>
        <button className={styles.button}>
          <a href="#?">Buy a painting!</a>
        </button>
      </nav>
    </div>
  )
}

export default Header
