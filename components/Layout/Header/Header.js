import React from 'react'

import Link from 'next/link'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.Header}>
      <Link href="/"> 
        <a>
          <img src="assets/img/randmportal.png" alt="logo"/>
        </a>
      </Link>
    </header>
  )
}

export default Header
