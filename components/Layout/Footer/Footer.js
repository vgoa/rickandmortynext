import React from "react";

import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.Footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>
  );
}

export default Footer;
