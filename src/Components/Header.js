import React from 'react'
import styles from '../styles/Header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  )
}
